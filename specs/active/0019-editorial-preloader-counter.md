# Spec 0019: Editoryal Sayaç & Shutter Perde (Editorial Preloader)

## 1. Amaç ve Kapsam
Siteye ilk defa giren ziyaretçilere yüksek kaliteli bir editoryal karşılama sunmak. Sayfa yüklenirken sıradan bir spinner yerine Awwwards Site-of-the-Day kalitesinde tabüler sayaç (`00` -> `100`), Mezopotamya telemetri verileri ve yukarı doğru açılan mimari bir perde (Curtain Shutter) animasyonu tasarlamak.

## 2. Kabul Kriterleri (Acceptance Criteria)
- [ ] **Tabüler Sayaç (00 -> 100):** Mono fontla, organik bir yavaşlama (ease-out) eğrisiyle 0'dan 100'e sayan animasyon.
- [ ] **Editoryal Telemetri:** `ABDULLAH KEKLİK · FOLIO [2026]`, `37°09'N · URFA` ve yükleme aşamalarını belirten dinamik mikro-durum metinleri.
- [ ] **Awwwards Shutter Exit:** Sayaç 100'e ulaştığında üst ve alt paneller veya yukarı doğru kayan monolitik perde (`[0.76, 0, 0.24, 1]` Awwwards cubic-bezier) ile ana sahneyi açar.
- [ ] **UX & Oturum Hafızası (`sessionStorage`):** İlk ziyarette tam koreografi çalışır, aynı sekmedeki sonraki sayfa geçişlerinde ziyaretçiyi bekletmeden hemen sahneyi gösterir.
- [ ] **Erişilebilirlik (A11y & Reduced Motion):** `prefers-reduced-motion: reduce` tercihinde animasyon atlanır; ekran okuyucular için `aria-live` durumu sağlanır.
- [ ] **Gövde Kaydırma Kilidi (Scroll Lock):** Preloader etkinken sayfa kaydırması kilitlenir, perde açıldığında Lenis smooth scroll serbest bırakılır.
- [ ] **Tip & Test Güvencesi:** Sıfır TypeScript hatası, yeşil birim testler (`vitest`) ve hatasız derleme (`next build`).
