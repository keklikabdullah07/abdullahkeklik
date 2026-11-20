import fs from "node:fs";
import path from "node:path";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ARCHITECTURE_NODES } from "@/data/architectureBlueprint";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Interactive System Architecture Blueprint (İnteraktif Sistem Mimarisi Şeması)", () => {
  it("ArchitectureDiagram geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof ArchitectureDiagram).toBe("function");
  });

  it("ARCHITECTURE_NODES 6 aşamalı boru hattını eksiksiz içerir", () => {
    expect(ARCHITECTURE_NODES.length).toBe(6);
    const nodeIds = ARCHITECTURE_NODES.map((n) => n.id);
    expect(nodeIds).toContain("edge-gateway");
    expect(nodeIds).toContain("auth-tenant-guard");
    expect(nodeIds).toContain("l1-l2-cache");
    expect(nodeIds).toContain("core-engine");
    expect(nodeIds).toContain("event-outbox");
    expect(nodeIds).toContain("postgres-cluster");
  });

  it("Tüm mimari düğümler TR, EN ve KU dillerinde role, description ve rationale içerir", () => {
    for (const node of ARCHITECTURE_NODES) {
      expect(node.latency.length).toBeGreaterThan(0);
      expect(node.throughput.length).toBeGreaterThan(0);
      expect(node.pattern.length).toBeGreaterThan(0);

      expect(node.tr.role.length).toBeGreaterThan(0);
      expect(node.tr.description.length).toBeGreaterThan(0);
      expect(node.tr.rationale.length).toBeGreaterThan(0);

      expect(node.en.role.length).toBeGreaterThan(0);
      expect(node.en.description.length).toBeGreaterThan(0);
      expect(node.en.rationale.length).toBeGreaterThan(0);

      expect(node.ku.role.length).toBeGreaterThan(0);
      expect(node.ku.description.length).toBeGreaterThan(0);
      expect(node.ku.rationale.length).toBeGreaterThan(0);
    }
  });

  it("Ana sayfa (page.tsx) ArchitectureDiagram bileşenini içerir", () => {
    const pagePath = path.resolve(process.cwd(), "src/app/page.tsx");
    expect(fs.existsSync(pagePath)).toBe(true);

    const source = fs.readFileSync(pagePath, "utf-8");
    expect(source).toContain("ArchitectureDiagram");
  });

  it("ArchitectureDiagram kaynak kodunda id=system-architecture ve zero AI slop kuralı geçerlidir", () => {
    const compPath = path.resolve(process.cwd(), "src/components/ArchitectureDiagram.tsx");
    expect(fs.existsSync(compPath)).toBe(true);

    const source = fs.readFileSync(compPath, "utf-8");
    expect(source).toContain('id="system-architecture"');
    expect(source).not.toContain("Sparkles");
    expect(source).not.toContain("Wand");
    expect(source).not.toContain("Bot");
    expect(source).not.toContain("Brain");
  });

  it("Tüm dil dosyaları (TR, EN, KU) architectureDiagram anahtarlarını eksiksiz içerir", () => {
    const dicts = [trDict, enDict, kuDict];
    for (const dict of dicts) {
      expect(dict.architectureDiagram).toBeDefined();
      expect(dict.architectureDiagram.sectionBadge.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.title.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.subtitle.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.pipelineHeading.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.inspectorHeading.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.metricLatency.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.metricThroughput.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.metricPattern.length).toBeGreaterThan(0);
      expect(dict.architectureDiagram.rationaleLabel.length).toBeGreaterThan(0);
    }
  });
});
