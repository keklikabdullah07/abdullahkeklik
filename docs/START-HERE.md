# Yeni Proje Başlangıç Rehberi (START-HERE)

> **Hoş Geldiniz!** Bu proje, **ANEW (AI-Native Engineering Workspace)** mimarisi ve 
> 3 Katmanlı Harness ile yönetilmektedir.

---

## 🧭 3 Katmanlı Harness Nedir?

```
┌────────────────────────────────────────────────────────┐
│ 1. ANAYASA (AGENTS.md)                                 │
│    "Nasıl davranılır?" — Kurallar, Risk Kademeleri     │
├────────────────────────────────────────────────────────┤
│ 2. HARİTA & ALAN BİLGİSİ (Katman 2)                   │
│    "Neler var?" — PROJECT-MAP.md, DOMAIN.md, UNKNOWNS  │
├────────────────────────────────────────────────────────┤
│ 3. KANIT KAPISI (scripts/check)                        │
│    "Doğru mu?" — Tip + Lint + Test + Drift Denetimi    │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Yeni Bir Göreve Başlarken AI ve Geliştirici Akışı

### Adım 1: Oryantasyon (İlk 1 Dakika)
1. `AGENTS.md` dosyasını incele (Projenin aktif `capabilities` matrisi ve anayasası).
2. `docs/PROJECT-MAP.md` dosyasını oku (Rotalar, şemalar, mevcut modüller).
3. `docs/UNKNOWNS.md` tablosuna bak (Açık soru işaretleri var mı?).
4. `docs/DOMAIN.md` sözlüğünü tara (İş kuralları ve jargon).

### Adım 2: Şartname ve Plan (No Spec, No Code)
1. `specs/active/0000-template.md` dosyasını kopyala → `specs/active/000X-ozellik-adi.md`.
2. Kabul kriterlerini (AC) ve varsa açık bilinmeyenleri (`UNK-XXX`) yaz.
3. `specs/plans/0000-template.md` ile hangi dosyaların etkileneceğini belirle.
4. İnsan onayı almadan kod geliştirmeye başlama!

### Adım 3: Geliştirme (Feature Branch)
1. `developer` dalından yeni dal aç: `git checkout -b feature/000X-ozellik-adi`.
2. Kodunu yaz, testlerini ekle.

### Adım 4: Kanıt Kapısı (Evidence Over Claims)
1. Doğrulama zincirini çalıştır:
   - Linux/Mac: `bash scripts/check`
   - Windows: `powershell -ExecutionPolicy Bypass -File scripts/check.ps1`
2. Tüm 5 kapı yeşil olduğunda haritayı güncelle:
   - `npx tsx scripts/generate-project-map.ts`
3. İnceleme sonrası `developer` dalına birleştir.
