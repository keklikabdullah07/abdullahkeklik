# Bilinmeyenler Kayıt Defteri (UNKNOWNS Registry)

> **Amaç:** Projede henüz netleşmemiş mimari, teknik veya iş alanı sorularını
> kayıt altına almak. AI, belirsiz varsayımlarla kod yazmasın diye.
>
> **Kural (AC-15):** Bir `spec`'in kabul edilmesi (`Approved` olması) için,
> o spec'e dokunan tüm soru işaretlerinin bu defterde veya spec içinde
> **"çözüldü"** durumuna getirilmesi zorunludur.
> `scripts/check-unknowns.ts` bu kuralı doğrular.
>
> **Boş şablon.** Bu dosya **projeye özgüdür** — harness'ta boş kalır.

---

## Aktif Bilinmeyenler Tablosu

| ID | Soru / Belirsizlik | Neden Kritik? (Etki) | Sahibi | Durum | Çözüm / Karar |
|---|---|---|---|---|---|
| | | | | | |

---

## Bilinmeyen Ekleme Formatı

Yeni bir belirsizlikle karşılaşıldığında derhal bu tabloya yeni satır eklenir:

- **ID:** Sıralı `UNK-XXX`
- **Soru:** Net, spekülasyondan uzak soru cümlesi.
- **Neden Kritik?:** Hangi modülü veya kararı kilitlediği.
- **Sahibi:** Kullanıcı, Mimar veya Ürün Yöneticisi.
- **Durum:** `açık` | `çözüldü` | `pas`
- **Çözüm:** Netleştiğinde alınan kararın özeti, tarihi ve **varsa ilgili ADR referansı.**

> **Kural:** Bir bilinmeyen çözülürken kararın **nerede yazılı olduğu** belirtilir
> (`docs/decisions/000N-...md` veya `specs/active/000N-...md`). Sözlü çözüm kabul edilmez.
> Referans verilen ADR **yoksa** bilinmeyen çözülmüş sayılmaz.
