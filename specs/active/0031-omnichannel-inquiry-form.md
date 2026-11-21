# Spec 0031 — Çok Kanallı İletişim & Proje Talep Formu (Omnichannel Inquiry Form)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-21
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Main Page / Grand Finale Contact Section
- **İlişkili Kararlar:** `DESIGN.md` & `AGENTS.md`

## 1. Problem
Portföy ziyaretçileri (CTO, VP of Engineering, Kurucu Ortaklar veya danışmanlık talep edenler) şu anda yalnızca ham bir e-posta linkiyle karşılaşmaktadır. Bu durum iletişim sürtünmesine (friction) yol açmakta; mobil veya anlık iletişim arayan ziyaretçilerin WhatsApp veya Telegram üzerinden hızlıca yazabilmesini engellemektedir. Ayrıca Instagram ve diğer ağ bağlantılarıyla birlikte proje kapsamını tek bakışta belirtebilecekleri interaktif bir talep formu bulunmamaktadır.

## 2. Kapsam
### İçinde (In Scope)
1. **Çok Kanallı Doğrudan İletişim Rozetleri (Quick Channels Bar):**
   - 🟢 **WhatsApp:** `https://wa.me/905531675669` (Tek tıkla doğrudan sohbet başlatma).
   - 🔵 **Telegram:** `https://t.me/+905531675669` (Bireysel doğrudan sohbet hattı).
   - 📸 **Instagram:** `https://www.instagram.com/_keklikabdullah` (Kişisel ağ profili `_keklikabdullah`).
   - ✉️ **E-posta:** `keklikabdullah07@gmail.com` (Doğrudan istemci açma ve kopyalama).
2. **Editoryal Proje Talep Formu (`CommissionInquiryForm`):**
   - **İsim / Kurum:** Minimal alt çizgili metin kutusu.
   - **İletişim Adresi:** E-posta veya telefon numarası.
   - **Disiplin Seçici (Taktil Chip'ler):**
     - `[SİSTEM MİMARİSİ / ARCHITECTURE]`
     - `[WEB & ARTIFACTS / FULL-STACK]`
     - `[DANIŞMANLIK & ADVISORY]`
   - **Proje Kapsamı / Notu:** Temiz, monospaced textarea.
3. **Akıllı Çift Aksiyon (Dual-Submit Actions):**
   - **"WhatsApp ile Gönder" Butonu:** Form alanlarını (İsim, Disiplin, İletişim, Not) okunaklı bir şablonda derleyerek doğrudan `wa.me/905531675669?text=...` URI'sine fırlatır.
   - **"E-posta ile İlet" Butonu:** Aynı veriyi `mailto:keklikabdullah07@gmail.com?subject=...&body=...` olarak derler.
4. **Çoklu Dil Desteği:**
   - TR, EN, KU sözlüklerine form etiketleri, yer tutucular ve başarı mesajları.
5. **Anti-AI-Slop & Tasarım Uyumu:**
   - Sıfır yapay zeka ikonu.
   - Nahit Taşı (`#F4EFE6`), derin obsidyen (`#090D16`), terracotta (`#C8532B`) ve taktil pirinç vurgular.
6. **Birim Testleri & Kanıt Kapısı:**
   - `tests/unit/contact-inquiry.test.ts` ile tüm form alanlarının, iletişim bağlantılarının ve i18n anahtarlarının doğrulanması.
   - `./scripts/check` ile 5 kapıdan yeşil geçiş.

### Dışında (Out of Scope)
- Harici üçüncü parti ücretli form SaaS servisleri (Formspree, vb. bağımlılık oluşturmamak için güvenli, anlık ve sıfır-maliyetli URI derleyici modeli kullanılır).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: İletişim alanında WhatsApp (`+90 553 167 56 69`), Telegram ve E-posta doğrudan erişim rozetleri bulunmalıdır.
- [x] AC-2: Ziyaretçinin ad, iletişim bilgisi, disiplin ve mesaj girebileceği interaktif bir form sunulmalıdır.
- [x] AC-3: Form doldurulduğunda hem WhatsApp hem de E-posta üzerinden tek tıkla önceden formatlanmış mesaj fırlatılabilmelidir.
- [x] AC-4: TR, EN ve KU dillerinde form metinleri eksiksiz yerelleştirilmelidir.
- [x] AC-5: `tests/unit/contact-inquiry.test.ts` yazılarak tüm kontroller test edilmeli ve `./scripts/check` 5 kapıdan da geçmelidir.

## 4. Tasarım İlkeleri
- Mode: EXPERIENCE & PERSUADE
- Background: Obsidian (`#0F141C`) ve Canvas-alt zemin üzerinde taktil sınır çizgileri (`border-white/10`).
- Tipografi: Fira Code monospaced chip'ler + Instrument Serif / Inter editoryal başlıklar.
