# marketing-

Claude Code için pazarlama çalışma alanı. İki açık kaynak (MIT) projeden seçilmiş skill'ler bu repoya **proje seviyesinde** kuruldu (`.claude/skills/`), böylece bu repoyu açan her Claude Code oturumu (web, CLI, masaüstü) bunları otomatik yükler.

## Kaynaklar

| Kaynak | Sürüm | Kurulan |
|---|---|---|
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | v2.11.26 (`1efedbc`) | 50 skill'in tamamı + `tools/` (66 CLI, entegrasyon rehberleri) |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | v2.2.3 (`b92f181`) | 311 skill'den pazarlama/içerik/araştırma ile ilgili 19'u |

## İlk adım

Claude'a şunu söyleyin: **"product-marketing skill'ini çalıştır"**. Ürün, hedef kitle ve konumlandırma bilgilerinizi soracak ve `.agents/product-marketing.md` dosyasını oluşturacak. Diğer tüm skill'ler önce bu dosyayı okur.

## marketingskills (50)

- **SEO & içerik:** seo-audit, ai-seo, site-architecture, programmatic-seo, schema, content-strategy, aso
- **CRO:** cro, signup, onboarding, popups, paywalls
- **Metin:** copywriting, copy-editing, cold-email, emails, social, video, image, sms
- **Reklam & ölçüm:** ads, ad-creative, ab-testing, analytics, attribution
- **Büyüme & elde tutma:** referrals, free-tools, churn-prevention, community-marketing, lead-magnets, co-marketing, influencer-marketing
- **Satış & GTM:** revops, sales-enablement, launch, pricing, offers, competitors, competitor-profiling, directory-submissions, prospecting, events, public-relations
- **Strateji:** product-marketing, marketing-ideas, marketing-psychology, customer-research, marketing-plan, marketing-council, marketing-loops

## ECC'den seçilenler (19)

- **Marka & içerik:** brand-discovery, brand-voice, content-engine, article-writing, crosspost, marketing-campaign, seo
- **Araştırma & rekabet:** market-research, deep-research, competitive-platform-analysis, benchmark-methodology, competitive-report-structure, product-lens
- **Yatırımcı & satış:** investor-materials, investor-outreach, lead-intelligence
- **Sunum & medya:** frontend-slides, fal-ai-media, x-api

## ECC'den neden hepsi kurulmadı?

ECC esas olarak bir **yazılım mühendisliği** harness'i (TDD, code review, dil kuralları, hook'lar, 71 agent). 311 skill'in tamamı bağlamı şişirir ve pazarlama işinde yanlış skill tetiklenmesine yol açar; hook'lar her araç çağrısını etkiler. Yazılım geliştirme için de kullanmak isterseniz kendi bilgisayarınızda (interaktif CLI) şu yol önerilir:

```text
/plugin marketplace add https://github.com/affaan-m/ECC
/plugin install ecc@ecc
```

## API anahtarı gerektirenler

Skill'ler anahtarsız da çalışır (strateji, metin, plan). Canlı veri için ilgili anahtarlar ortam değişkeni olarak gerekir; örn. `tools/clis/ga4.js`, `google-ads.js`, `meta-ads.js`, `ahrefs.js`, `semrush.js`, `apollo.js` vb. Ayrıntı: `tools/SETUP.md` ve `tools/integrations/`. ECC tarafında `lead-intelligence` (Exa/Apollo), `deep-research` (Firecrawl/Exa MCP — yoksa yerleşik web araması), `fal-ai-media` (fal.ai), `x-api` (X API) anahtar ister.

Anahtarları **asla commit etmeyin**; Claude Code web ortamında environment ayarlarındaki secrets/ortam değişkenleri bölümünü kullanın.

## Güncelleme

Kaynak repoları yeniden klonlayıp `skills/` klasörlerini `.claude/skills/` altına kopyalamak yeterli. Lisanslar: `third_party/licenses/`.
