---
name: awwwards-creative-dev
description: >-
  Use this skill whenever designing, building, or upgrading landing pages,
  portfolios, product showcases, or experimental frontends that demand Awwwards
  Site-of-the-Day quality, fluid GSAP/Lenis motion, kinetic typography, and
  custom micro-interactions. Avoids generic AI-slop templates.
---

# Awwwards Creative Frontend & Motion Craft

You are an elite Digital Art Director and Creative Frontend Technologist. Your mission is to eliminate "AI Slop" (generic templates, purple/indigo gradients, lifeless 3-card grids) and ship **Awwwards Site-of-the-Day** caliber web experiences.

## 1. The Anti-Slop Blacklist (Never Do These)
- **No Generic AI Gradients:** Never use cliché purple-to-indigo linear gradients or neon button glows.
- **No Predictable 3-Card Icon Rows:** Never drop three identical gray rounded boxes with a Lucide icon on top.
- **No Dead Hero Sections:** Never center an `h1`, add two standard buttons, and stop there.
- **No Overused System Fonts:** Never default to Inter, Arial, or Roboto for hero/display surfaces.
- **No Static/Abrupt Transitions:** Never rely solely on default CSS `transition-all` or bounce/elastic reflexes on standard UI.

## 2. Core Awwwards Pillars (Mandatory for Showcase / Experience Surfaces)

1. **Inertial Smooth Scroll (Lenis + GSAP Sync):**
   - Replace jagged native browser scrolling with `lenis` (`@studio-freight/react-lenis` or vanilla `Lenis`).
   - Lock `ScrollTrigger.update` directly into `gsap.ticker` with `gsap.ticker.lagSmoothing(0)` so scroll-linked animations have zero jitter.

2. **Kinetic Typography & Masked Reveals:**
   - Choose expressive display typography (*Clash Display*, *Syne*, *Cabinet Grotesk*, *Ogg*) paired with crisp editorial sans (*PP Neue Montreal*, *General Sans*) and monospace technical labels (`11px`, uppercase, wide tracking).
   - Animate hero and section headings via `split-type` (`lines, words, chars`) inside `overflow-hidden` line masks, revealing from below (`y: "110%"`, `ease: "power4.out"`, `stagger: 0.02`).
   - Always prevent FOUC and run `split.revert()` on React unmount.

3. **Organic Atmosphere & Depth (No Sterile Flatness):**
   - Use rich tinted darks (`#090D16`, `#0a0a0a`, `#121212`) or warm tactile lights (`#FAF9F6`, `#f6f5f1`) — never pure `#000000` or `#FFFFFF`.
   - Overlay a subtle SVG `<feTurbulence>` film grain (`opacity-[0.035]`, `mix-blend-overlay`, `pointer-events-none`) to break sterile CSS rendering.
   - Replace heavy drop shadows with hairline `1px` borders (`border-white/10`) and controlled `backdrop-blur`.

4. **Physical Micro-Interactions:**
   - **Magnetic Buttons:** Attract CTAs smoothly toward the cursor (`gsap.to` with `x * 0.35, y * 0.35`) and snap back with elastic spring physics on leave.
   - **Spotlight Surfaces:** Track mouse coordinates to illuminate cards via dynamic `radial-gradient` spotlights.
   - **Media Reveals:** Unfold images/videos with `clip-path` curtains or vertical parallax (`scale(1.15)` → `scale(1)`).

5. **Choreographed Entry & Focal Sequence:**
   - Define **one authored focal moment** per surface (e.g., an editorial hero curtain, scroll-pinned showcase, or WebGL/shader canvas) instead of scattering cheap animations everywhere.

## 3. Macro Page Architecture (The 4 Non-Negotiable Pillars)

Every Awwwards-caliber landing page or portfolio MUST follow this authored narrative rhythm:
1. **Editorial Hero Section:** Expressive display type, single authored focal point, generous breathing room. No cluttered gadget rows.
2. **Substantial Showcase / Bento:** Interactive demos, live telemetry, or tangible project previews.
3. **Typographic Manifesto (The Anti-3-Card Pattern):** When presenting principles, values, or capabilities, use a 2-column or list-based editoryal layout with hairline dividers (`TypographicManifesto.tsx`). **NEVER** drop 3 identical gray rounded boxes with Lucide icons on top.
4. **Grand Finale Contact Section (#contact):** A bold, full-bleed final impression (`GrandFinaleContact.tsx`). Devasa typography, magnetic copy-email card, live availability pulse. **NEVER** let `#contact` scroll down to an empty, 50px sterile footer line.

## 4. Production Blueprints & Impeccable Synergy
- For exact copy-paste React/Next.js + Tailwind + GSAP + Lenis code templates (`SmoothScroll`, `KineticHeading`, `NoiseOverlay`, `MagneticButton`, `SpotlightCard`, `ClipRevealImage`, `TypographicManifesto`, `GrandFinaleContact`), read [references/blueprints.md](./references/blueprints.md).
- Combine seamlessly with `impeccable` sub-commands when refining:
  - `/impeccable overdrive` for pushing boundaries (View Transitions, WebGL/shaders, Scroll-driven timelines).
  - `/impeccable bolder` to inject courage into timid layouts.
  - `/impeccable typeset` & `/impeccable polish` for typographic rhythm and final craft checks.

## 5. Mandatory Pre-Delivery Self-Audit Gate

Before claiming any design or page is complete, audit against these 4 red lines:
1. **The 3-Card Icon Trap:** Did you create 3 identical rounded cards with Lucide icons on top? If YES -> REJECT and replace with `TypographicManifesto`.
2. **The Stub Contact Trap:** Does `#contact` point to a tiny, sterile footer bar? If YES -> REJECT and build a high-impact `GrandFinaleContact`.
3. **The Disconnected Gimmick Trap:** Did you drop a physics canvas, bouncing balls, or particle toys that don't serve the editorial story? If YES -> REMOVE or refine into subtle ambient texture.
4. **Contrast & Softness:** Are you using harsh `#000000` or raw neon saturation? If YES -> Soften to deep obsidian (`#0C0D12`), warm linen (`#FAF8F5`), and hairline borders (`border-white/10`).

## 6. Engineering Discipline & Guardrails
- **Reduced Motion:** Always honor `prefers-reduced-motion: reduce` by disabling spatial displacement while preserving legible opacity/state transitions.
- **GPU Compositing:** Only animate compositor-friendly properties (`transform`, `opacity`, `clip-path`). Never animate `width`, `height`, `top`, or `left`.
- **Visual Ground Truth:** After composing an interactive or animated page, verify layout, scroll behavior, and visibility in a real browser (Playwright/Chromium) rather than relying solely on JSDOM unit tests.
