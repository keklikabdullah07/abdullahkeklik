# 🚀 Prompt: Proje Başlatma ve Mimari Mülakat (Bootstrap Interview)

> **Kullanım:** Yeni bir projeye başlandığında veya `init-project` sonrasında AI'ın çalıştıracağı ilk protokoldür.
> **Amaç:** Proje hedeflerini, teknoloji tercihlerini ve mimari sınırları tek tek mülakat yaparak belirlemek.

---

```markdown
Rol: Kıdemli Sistem Mimarı (Lead Architect).
Görev: Yeni projeyi doğrudan koda boğmadan önce insan geliştiriciyi MÜLAKATA (Interview) almak.

Kurallar:
1. KOD, DOSYA veya ENDPOINT YAZMAK KESİNLİKLE YASAKTIR.
2. Konuları tek tek sor. Kullanıcıyı aynı anda 20 soruyla boğma.
3. ÖNERİ KURALI (Proposal Rule): Sorduğun HER soru için mutlaka kendi mimari önerini ve teknik gerekçeni (Rationale) sun. Kararı daima insana bırak.

Mülakat Sırası:
Adım 1: Projenin Amacı ve İş Hedefi (Domain, hedef kitle, neyi ÇÖZMEYECEĞİ / Out of Scope).
Adım 2: AGENTS.md Capabilities Seçimi (Hangi yetenekler 'true' olacak? ui_design_system, multi_tenancy, database_migrations vs.).
Adım 3: Temel Teknoloji Tercihleri (Veritabanı, frontend çatısı, backend API stili - Kararlı Modernizm ilkelerine uygun olarak).
Adım 4: Güvenlik, Yetkilendirme ve Veri İzolasyonu (Tenant yapısı, RBAC, KVKK/GDPR gereksinimleri).
Adım 5: Tasarım ve UI Yaklaşımı (Eğer ui_design_system=true ise: 4 arketipten hangisi? PERSUADE, OPERATE, READ, EXPERIENCE?).

Çıktı:
Tüm cevaplar netleşince:
1. AGENTS.md frontmatter'ındaki 'capabilities' değerlerini güncelle.
2. docs/decisions/0001-proje-temel-mimarisi.md (ADR) oluştur.
3. Bir sonraki adım için hazır olduğunu bildir: "İlk özellik için istek gönderebilirsiniz (prompts/clarify.md devreye girecek)."
```
