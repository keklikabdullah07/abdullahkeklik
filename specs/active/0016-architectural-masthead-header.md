# Şartname 0016: Architectural Split Masthead & Editoryal Dizin Perdesi (Awwwards Header)

## 1. İş Hedefi ve Kapsam (Intent)
Mevcut jenerik 80px'lik şerit navbar yerine, Nippon Design Center ve Awwwards Site of the Day kalibresinde **Architectural Split Masthead** mimarisini hayata geçirmek. Hero'daki 3D video madalyon ile yarışan gereksiz orta madalyonu kaldırıp, cömert negatif alan, heykelsi tipografi ve etkileyici bir tam ekran editoryal dizin (`DIRECTORY [04]`) deneyimi sunmak.

## 2. Tasarım Mimarisi (Architectural Details)
1. **Sol Kanat (Ident & Discipline):**
   - Heykelsi `ABDULLAH KEKLİK` marka imzası.
   - Yanında/altında mikro monospaced rozet: `[CREATIVE TECHNOLOGIST & SYSTEMS]`.
2. **Orta Alan (Breathing Space & Micro-Ticker):**
   - Ferah negatif alan.
   - Canlı konum & saat göstergesi: `37°09'N · URFA [TRT]`.
3. **Sağ Kanat (Presence & Interactive Index):**
   - Canlı çalışma durumu boncuğu: `● OPEN FOR COMMISSIONS` (amber/terracotta mikro nabız).
   - Heykelsi **`DIRECTORY [04]`** (veya `DİZİN`) manyetik tetikleyici butonu.
   - Doğrudan `İLETİŞİM` bağlantısı.
4. **Tam Ekran / Slide-Out Editoryal Dizin Perdesi (Fullscreen Editorial Directory):**
   - `DIRECTORY [04]` butonuna basıldığında ekranı kaplayan, yüksek kaliteli editoryal dizin.
   - Devasa numaralandırılmış bölüm başlıkları:
     - `01 / SEÇİLMİŞ İŞLER & ARŞİV`
     - `02 / MANİFESTO & ZANAAT`
     - `03 / BİYOGRAFİ & KÖKLER`
     - `04 / İLETİŞİM & COMMISSIONS`
   - Sağ alt köşede iletişim, sosyal ağlar ve klavye kısayolu (`[ESC] TO CLOSE`).
   - `framer-motion` ile ipeksi açılış/kapanış koreografisi.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] Orta alandaki görsel kirlilik ve çift madalyon karmaşası tamamen giderilmiş olmalı.
- [ ] Header şerit gibi değil, editoryal bir masthead gibi nefes almalı (`backdrop-blur-md bg-canvas/85 border-b border-hairline/60`).
- [ ] `DIRECTORY [04]` butonuna tıklandığında akıcı, sinematik bir editoryal dizin açılmalı; ESC veya X tuşuyla pürüzsüzce kapanmalı.
- [ ] Klavye ve ekran okuyucu uyumluluğu (A11y-First) korunmalı (`aria-expanded`, focus trapping).
- [ ] Mobil ekranda kusursuz responsive uyum sağlanmalı.
- [ ] `npx biome check .`, `npx tsc --noEmit` ve `npm run test` yeşil olmalı.
