# Color Sort: Puzzle Game — App Store Connect doldurma rehberi

Sürüm 1.0 · Ekim 2026. Oyun, Magic Sort tarzı bir renk/sıvı sıralama bulmacası.
`[ ]` ile işaretli yerler oyuna göre kontrol edilmeli. Oyunda olmayan bir özelliği yazmayın; Apple bunu kontrol eder.

---

## 0. Onay için kırmızı çizgiler (önce bunlar)

| Kural | Ne yapılmalı |
|---|---|
| 4.1 Kopya | "Magic Sort" adı, ikonu, renkleri, karakterleri, sesleri hiçbir yerde kullanılmaz (isim, metin, anahtar kelime, ekran görüntüsü, ikon). Kendi tasarımınız olmalı. |
| 4.3 Spam | Tür çok kalabalık. Açıklamada ve oyunda kendi farkınız görünsün (ör. zamanlayıcısız mod, özel tema, günlük bulmaca). |
| 2.1 Eksiksiz uygulama | Gerçek cihazda çökme yok, yer tutucu metin/görsel yok, tüm butonlar çalışıyor. Satın alma sandbox'ta test edildi. |
| 2.3 Doğru meta veri | Ekran görüntüleri gerçek oyun ekranı. Fiyat, "No.1", "Best" gibi iddialar ya da başka oyun adları yok. Android veya başka platform adı geçmez. |
| 3.1.1 Satın alma | Reklam kaldırma gibi ürünler StoreKit ile satılır. Ayarlar'da "Restore Purchases" (Satın alımları geri yükle) butonu olmalı. |
| 5.1.1 Gizlilik | Gizlilik politikası linki hem App Store Connect'te hem oyunun içinde (Ayarlar). Linkler açılmalı. |
| 5.1.2 Takip (ATT) | App Privacy'de "takip ediyoruz" denirse oyunda ATT izin penceresi **mutlaka** çıkmalı ve reviewer notunda nerede çıktığı yazmalı. Uyumsuzluk en sık red nedenlerinden biri. |
| iPad | Build iPad'i de destekliyorsa iPad ekran görüntüsü gerekir ve oyun iPad'de düzgün çalışmalıdır. Emin değilseniz ilk sürümü yalnızca iPhone olarak gönderin (iPhone uygulamaları iPad'de yine de test edilebilir; çökmemeli). |

---

## 1. App Information (General → App Information)

| Alan | Ne yazılacak |
|---|---|
| Name (EN) | `Color Sort: Puzzle Game` (23). Daha iyi arama için öneri: `Color Sort: Water Puzzle` (oyunda sıvı varsa) |
| Subtitle (EN) | `Pour Liquids, Relax Your Mind` (29) |
| Primary Language | English (U.S.) |
| Category | Primary: **Games**, alt kategoriler: **Puzzle**, **Casual**. Secondary: boş bırakılabilir |
| Content Rights | "Does your app contain, show, or access third-party content?" → **No** (tüm görsel, ses ve fontların hakkı sizdeyse veya ticari lisanslıysa) |
| Age Rating | Anketi dürüstçe doldurun; bu türde tüm içerik soruları "None/No". Beklenen sonuç: **4+**. AdMob panelinde de en yüksek reklam içerik derecesini **G** veya **PG** yapın ki reklamlar yaş derecesiyle uyumlu olsun |
| Made for Kids | **No** (çocuk kategorisinin reklam/analiz kuralları çok sıkı) |
| License Agreement | Apple'ın standart EULA'sı (dokunmayın) |
| Localizations | Sağ üstteki dilden **Türkçe** ekleyin (Bölüm 4) |

## 2. iOS App Version 1.0 (Distribution → 1.0 Prepare for Submission)

### 2.1 Header and Search Results (yeni bölüm)
"0 of 1 Header Asset" alanı **opsiyonel**. İlk gönderimde boş bırakın; lansmandan sonra yatay bir tanıtım görseli (3840×1646) ekleriz. "Search Results" sekmesinde de değişiklik gerekmez.

### 2.2 App Previews and Screenshots

| Alan | Ne yapılacak |
|---|---|
| iPhone 6.9" | **Zorunlu.** 5 ekran görüntüsü, dikey **1320×2868** (veya 1290×2796). Küçük ekranlar bundan otomatik üretilir |
| iPad 13" | Sadece build iPad'i destekliyorsa (2064×2752) |
| iPhone Duo ve diğer cihazlar | Sistem zorunlu tutmuyorsa boş bırakın (6.9" görüntülerden ölçeklenir) |
| App Preview (video) | Opsiyonel. 15–30 sn gerçek oynanış. İlk sürümde atlanabilir |

Ekran görüntüsü planı (üstte büyük yazı + altta gerçek oyun ekranı):

| # | Üst yazı (EN) | Üst yazı (TR) | Görüntü |
|---|---|---|---|
| 1 | Sort the Colors! | Renkleri Sırala! | Karışık tüpler, bir döküş anı |
| 2 | Relax, No Timer | Rahatla, Süre Yok | Sakin, yarısı çözülmüş seviye |
| 3 | Hundreds of Levels `[ ]` | Yüzlerce Bölüm `[ ]` | Zor, çok tüplü seviye |
| 4 | Play Offline `[ ]` | İnternetsiz Oyna `[ ]` | Tamamlanmış renkli seviye |
| 5 | Train Your Brain | Zekânı Çalıştır | Seviye geçildi ekranı |

### 2.3 Metin alanları (EN)

**Promotional Text** (107/170)
```
Pour, sort and relax! Hundreds of colorful levels, no timer and no internet needed. How many can you solve?
```

**Description**
```
Pour, sort and relax with Color Sort, a calm and colorful puzzle game.

Tap a tube to pour the top color into another tube. You can only pour onto the same color or into an empty tube. Sort every color into its own tube to clear the level. Easy to learn, surprisingly hard to master.

WHY YOU'LL LOVE IT
• Hundreds of hand-made levels, from easy to brain-melting [ ]
• No timer and no pressure: play at your own pace
• Play offline, anytime and anywhere [ ]
• Undo moves and add an extra tube when you get stuck [ ]
• Smooth, satisfying animations and relaxing sounds
• One-finger controls, perfect for short breaks

A few minutes a day is a great way to unwind and train your brain.

Color Sort is free to play and contains ads. An optional in-app purchase removes ads. [ ]
```

**Keywords** (98/100)
```
water,ball,tube,bottle,glass,brain,teaser,logic,match,offline,zen,stack,fill,jar,potion,cup,iq,fun
```
Kurallar: virgül, boşluk yok; başlıktaki kelimeler (color, sort, puzzle, game) tekrar yazılmaz; başka oyun adı yok.

| Alan | Ne yazılacak |
|---|---|
| Support URL | **Zorunlu.** Çalışan bir sayfa: oyun adı + iletişim e-postası (ör. GitHub Pages, Google Sites, Notion) |
| Marketing URL | Opsiyonel (web sitesi varsa) |
| Version | `1.0` |
| Copyright | `2026 Mehmet Sönmez` (şirket hesabıysa şirket adı) |

### 2.4 Build
Geliştirici Xcode'dan build'i yükledikten sonra "Build" bölümünde **+** ile seçin. Export compliance sorusu: Oyun sadece standart HTTPS kullanıyorsa "None of the algorithms mentioned" seçilir (geliştirici `ITSAppUsesNonExemptEncryption = NO` eklerse bu soru gelmez).

### 2.5 In-App Purchases and Subscriptions
Reklam kaldırma ürünü varsa: **ilk satın alma ürünü, uygulamanın ilk sürümüyle birlikte gönderilmelidir.** Bu bölümden ürünü sürüme ekleyin (bkz. Bölüm 5).

### 2.6 Game Center
Oyunda Game Center (skor tablosu) kodlanmadıysa **kapalı** bırakın.

### 2.7 App Review Information

| Alan | Ne yazılacak |
|---|---|
| Sign-in required | **İşaretsiz** (hesap yok) |
| Contact | Ad, soyad, telefon (+90…), e-posta: ulaşılabilir olun, Apple arayabilir/yazabilir |
| Attachment | Opsiyonel; gerekirse 30 sn oynanış videosu |

**Notes** (oyuna göre `[ ]` yerleri düzeltin):
```
Color Sort is a single-player offline puzzle game. No account or login is required; all content is available right after launch.

Ads: The game shows ads from Google AdMob. Rewarded ads are optional (extra tube / undo). Interstitial ads appear between levels after level 3. [ ]

App Tracking Transparency: The ATT permission prompt is shown after the player completes the first level, preceded by a short explanation screen. [ ]

In-App Purchase: "Remove Ads" (non-consumable) is available in Settings > Remove Ads. "Restore Purchases" is in Settings. [ ]

Privacy policy is linked in Settings > Privacy Policy.
```

### 2.8 Version Release
**"Manually release this version"** seçin. Onay gelince yayın tarihini siz belirlersiniz (video ve duyurularla aynı gün).

## 3. Trust & Safety

### App Privacy
1. **Privacy Policy URL**: Zorunlu (oyun içindeki linkle aynı).
2. **Data Collection**: Hangi SDK'ların build'de olduğunu geliştiricilere sorun. Her SDK'nın (Google AdMob, Firebase) resmi "App Store veri beyanı" dokümanına göre doldurun.
   - **Hiç analiz/reklam SDK'sı yoksa:** "No, we do not collect data from this app."
   - **AdMob + Firebase varsa (tipik):**

| Veri türü | Amaç | Kimliğe bağlı mı | Takip için mi |
|---|---|---|---|
| Identifiers → Device ID | Third-Party Advertising, Analytics | No | Yes (ATT ile) |
| Usage Data → Product Interaction | Analytics, Third-Party Advertising | No | Yes |
| Usage Data → Advertising Data | Third-Party Advertising | No | Yes |
| Location → Coarse Location | Third-Party Advertising | No | Yes |
| Diagnostics → Crash Data, Performance Data | App Functionality, Analytics | No | No |
| Purchases → Purchase History (IAP varsa) | Analytics | No | No |

   Burada "takip" (tracking) işaretlenirse oyunda ATT penceresi olmalıdır (Kural 5.1.2).

### App Accessibility (yeni)
Opsiyonel. Sadece gerçekten desteklenen özellikleri işaretleyin. Renk sıralama oyunu için "Differentiate Without Color Alone" (renk körleri için desen/sembol modu) varsa işaretlenebilir; yoksa işaretlemeyin. Emin değilseniz boş bırakın.

### Ratings and Reviews
Yayından önce yapılacak bir şey yok.

## 4. Türkçe yerelleştirme (sağ üst: English (U.S.) → Türkçe ekle)

| Alan | TR |
|---|---|
| Name | `Color Sort: Su Sıralama` (23) |
| Subtitle | `Renkleri Dök, Kafanı Dinlendir` (30) |
| Keywords (95/100) | `renk,sıralama,su,tüp,şişe,top,bulmaca,zeka,mantık,beyin,internetsiz,rahatlatıcı,eşleştir,doldur` |
| Promotional Text | `Dök, sırala, rahatla! Yüzlerce renkli bölüm, zamanlayıcı yok, internet gerekmez. Kaçını çözebilirsin?` |

**Açıklama (TR)**
```
Color Sort ile renkleri dök, sırala ve rahatla!

Bir tüpe dokun, en üstteki rengi başka bir tüpe dök. Sadece aynı rengin üstüne veya boş tüpe dökebilirsin. Her rengi kendi tüpünde topla, bölümü geç. Öğrenmesi kolay, ustalaşması zor.

NEDEN SEVECEKSİN
• Kolaydan beyin yakana yüzlerce bölüm [ ]
• Süre yok, baskı yok: kendi temponda oyna
• İnternetsiz, her yerde oyna [ ]
• Takıldığında hamleyi geri al veya ekstra tüp ekle [ ]
• Akıcı, tatmin edici animasyonlar ve rahatlatıcı sesler
• Tek parmakla oynanır, kısa molalar için ideal

Günde birkaç dakika hem kafanı dinlendirir hem zekânı çalıştırır.

Color Sort ücretsizdir ve reklam içerir. İsteğe bağlı bir satın alma ile reklamlar kaldırılabilir. [ ]
```
Ekran görüntülerini Türkçe yazılarla ayrıca yükleyin (Bölüm 2.2 tablosu).

## 5. Monetization

### Pricing and Availability
| Alan | Ne yapılacak |
|---|---|
| Price | **Free (0,00)** |
| Availability | Sınırlı lansman: **Türkiye** + 1 ülke (ör. Kanada veya Brezilya). Global lansmanda tüm ülkeler. **Çin anakarası hariç tutulur** (oyunlar için yayın lisansı gerekir) |
| Pre-Order | İsterseniz açın (lansmandan 2–6 hafta önce) |

### In-App Purchases → "+"
| Alan | Değer |
|---|---|
| Type | Non-Consumable |
| Reference Name | `Remove Ads` |
| Product ID | `com.<studyo>.colorsort.removeads` (koddakiyle **birebir aynı**) |
| Price | Düşük-orta bir kademe (ör. 2,99–3,99 USD karşılığı) |
| Display Name (EN/TR) | `Remove Ads` / `Reklamları Kaldır` |
| Description (EN/TR) | `Remove all banner and interstitial ads forever.` / `Banner ve geçiş reklamlarını kalıcı olarak kaldırır.` |
| Review Screenshot | Oyundaki satın alma ekranının görüntüsü |
| Review Notes | `Settings > Remove Ads. Restore Purchases is in Settings.` |

Not: Ödüllü reklamlar (oyuncunun isteğiyle izlenen) satın almadan sonra da kalıyorsa açıklamada "banner and interstitial ads" demek doğru olur.

### Subscriptions
Gerek yok.

## 6. Growth & Marketing ve Featuring (ilk gönderimde gerekmez)
| Bölüm | Ne zaman |
|---|---|
| Nominations (Featuring) | Lansmandan 3–4 hafta önce doldurun: oyunun hikâyesi, farkı, lansman tarihi |
| In-App Events | Lansmandan sonra |
| Custom Product Pages, Product Page Optimization | Trafik oluşunca |
| Promo Codes | Influencer ve basın için (yayından sonra) |
| Asset Library | Header görseli eklerken |

## 7. Business sekmesi (satın alma için şart)
- **Paid Apps Agreement** imzalı mı?
- **Banka ve vergi** bilgileri girildi mi?
- **App Store Small Business Program** başvurusu (komisyon %15).

## 8. Göndermeden önce son kontrol
- [ ] Build seçildi, gerçek iPhone'da çökme yok
- [ ] Ekran görüntüleri gerçek oyun, "Magic Sort" hiçbir yerde yok
- [ ] Support URL ve Privacy Policy URL açılıyor
- [ ] App Privacy cevapları build'deki SDK'larla uyumlu; "tracking" varsa ATT penceresi çıkıyor
- [ ] "Remove Ads" ürünü sürüme eklendi; "Restore Purchases" çalışıyor
- [ ] Reviewer notları oyunun gerçek davranışıyla aynı
- [ ] Age rating 4+, AdMob içerik derecesi G/PG
- [ ] Version Release: Manual
- [ ] **Add for Review** → **Submit**
