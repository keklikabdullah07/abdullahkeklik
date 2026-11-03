# Proje Alan Bilgisi Sözlüğü (DOMAIN Glossary)

> **Bu dosya elle yazılır ve korunur.**
> Koddan ve veritabanı şemasından **doğrudan türetilemeyen** iş kurallarını,
> kavramları ve terimleri içerir. AI her oturumda bu dosyayı okuyarak projeye
> özgü iş jargonuna ve kurallarına hâkim olur.
>
> **Boş şablon.** Bu dosya **projeye özgüdür** — harness'ta boş kalır.
> Kodlanabilir olan (kolon tipleri, index'ler, route'lar) `docs/PROJECT-MAP.md`
> içinde üretilir; buraya **yalnızca koddan okunamayan** bilgi girer.

---

## 1. Temel İş Kavramları (Glossary)

> Her satır: `<Terim>` | `<Tanım ve iş mantığı>` | `<İhlal edilirse ne olur / dikkat kuralı>`
> Terimleri **domain sahibiyle birlikte** yaz; koddan türetilemeyen kavramlar
> (ör. "onaylı", "iptal", "mahsup") burada tanımlanır.

| Terim | Tanım ve İş Mantığı | Dikkat Edilecek Kural / Invariant |
|---|---|---|
| `<Terim 1>` | `<tek cümle tanım>` | `<değişmez kural>` |
| `<Terim 2>` | `<tek cümle tanım>` | `<değişmez kural>` |

---

## 2. Kurumsal ve Yasal İş Kuralları (Business Invariants)

> Bu kurallar **kodla zorlanamaz**, yalnızca burada tanımlanır. İhlali bug'dır.

1. `<Kural 1 — örn. onaylanmış kayıtlar değiştirilemez, düzeltme ters kayıtla yapılır>`
2. `<Kural 2 — örn. hangi raporlar resmî kuruma gider, kim onaylar>`
3. `<Kural 3 — örn. saklama süreleri / yasal yükümlülükler>`

---

## 3. Erişim ve Yetki Kuralları

> Bu projenin yetki modelini **tek yerde** tanımla. (Kaç kullanıcı, kaç yetki
> seviyesi, hangi roller hangi veriyi görebilir.) Model koda yansımıyorsa
> buraya yazılmaz.

| Rol | Ne görebilir | Ne yapabilir | Not |
|---|---|---|---|
| `<Rol 1>` | `<kapsam>` | `<yetki>` | `<not>` |

---

## 4. Terminoloji: Bu Projeye Özgü Olmayan Terimler

> Sektör standardı olan terimler (PDF, e-posta, stok, sipariş) tanımlanmaz.
> Sadece **bu projede** farklı anlam taşıyanlar yazılır.

| Terim | Bu Projede Anlamı | Standart Anlamından Farkı |
|---|---|---|
| `<Terim>` | `<anlam>` | `<fark>` |

---

## 5. Kodlama ve Veri Tipleri Klavuzu

> Genel kodlama kuralları `docs/conventions.md` içindedir (çekirdek, ortak).
> Buraya **yalnızca bu projeye özgü** tip kararları yazılır.
> Örn. bu projede "rapor bitiş tarihi" `date` mi `timestamptz` mi?

| Alan / Kavram | Karar | Gerekçe |
|---|---|---|
| `<Alan>` | `<date \| timestamptz \| numeric \| uuid>` | `<gerekçe>` |

---

## 6. Bilinmeyenler

> Bu projede hâlâ cevaplanmamış iş/mimari soruları `docs/UNKNOWNS.md`
> dosyasında takip edilir. Buraya yalnızca **yanıtlanmış** bilgi girer.

---

*Bu şablonu kopyala, doldur, `AGENTS.md` içinde referans ver. Token şişmesine izin verme.*
