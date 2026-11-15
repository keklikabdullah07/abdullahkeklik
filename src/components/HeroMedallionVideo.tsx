"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface HeroMedallionVideoProps {
  className?: string;
}

export function HeroMedallionVideo({ className = "" }: HeroMedallionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // prefers-reduced-motion kontrolü
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  // Videonun arka planda aktif oynatılması
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  // WebGL Donanım İvmeli Canlı Yeşil Ekran (Chroma Key) Gölgelendiricisi
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: true,
    });

    if (!gl) return;

    // 1. Vertex Shader (16:9 videonun tam ortasındaki 1080x1080 kareyi çeker)
    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        vec2 norm = a_position * 0.5 + 0.5;
        // 16:9 yatay videodan merkez kareyi kırp (420px ofset)
        float xMin = 0.21875;
        float xRange = 0.5625;
        v_texCoord = vec2(xMin + norm.x * xRange, 1.0 - norm.y);
      }
    `;

    // 2. Fragment Shader (Yeşil ekranı algılayıp şeffaflaştırır ve kenar yeşilliğini de-spill eder)
    const fsSource = `
      precision mediump float;
      uniform sampler2D u_texture;
      varying vec2 v_texCoord;
      void main() {
        vec4 color = texture2D(u_texture, v_texCoord);
        float maxRB = max(color.r, color.b);
        float greenDiff = color.g - maxRB;
        
        // Yumuşak kenarlı şeffaflık eşiği
        float alpha = 1.0 - smoothstep(0.10, 0.24, greenDiff);
        
        // Kenarlara vuran yeşil parlamayı temizle (De-spill)
        if (greenDiff > 0.0) {
          color.g = maxRB;
        }
        
        gl_FragColor = vec4(color.rgb * alpha, alpha);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Dörtgen (Quad) geometri
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const aPosition = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Video Dokusu
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    let animationFrameId: number;

    const render = () => {
      if (video.readyState >= 2) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      gl.deleteTexture(texture);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      aria-label="Abdullah Keklik 3D Heykelsi Madalyon Sekansı"
    >
      {/* 
        Tarayıcının kareleri çözmeyi durdurmaması için 'hidden' değil,
        ekranda görünmeyen ama aktif kod çözen (hardware decode) katman
      */}
      <video
        ref={videoRef}
        src="/medallion_portal_green_635683c6.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        className="absolute opacity-0 pointer-events-none -z-50 w-1 h-1 overflow-hidden"
      />

      {/* Şeffaf WebGL Kanvası */}
      <div
        role="button"
        tabIndex={0}
        onClick={togglePlayback}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePlayback();
          }
        }}
        title="3D madalyon döngüsünü duraklatmak veya oynatmak için tıklayın"
        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform duration-500 hover:scale-[1.02]"
      >
        <canvas
          ref={canvasRef}
          width={800}
          height={800}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_15px_35px_rgba(28,22,19,0.12)]"
        />
      </div>
    </div>
  );
}
