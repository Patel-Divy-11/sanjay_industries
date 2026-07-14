# 🏭 Sanjay Industries — Official Website
**Project Phoenix** · Built with Next.js 14 + TypeScript + Tailwind CSS

> Premium industrial B2B website for Sanjay Industries — a direct dyes and chemicals manufacturer based in GIDC Naroda, Ahmedabad, Gujarat, India. Established 1990.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
sanjay-industries/
│
├── docs/                        # Project documentation
│   ├── brand-guidelines.md      # Colors, fonts, tone of voice
│   └── sitemap.md               # URL structure and page map
│
├── public/                      # Static assets
│   ├── logo/                    # Company logo files (add here)
│   ├── factory/                 # Factory photos (add here)
│   ├── products/                # Product photos (add here)
│   └── certificates/            # Certificate images (add here)
│
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (fonts, metadata, Navbar, Footer)
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   ├── loading.tsx          # Global loading UI
│   │   ├── not-found.tsx        # 404 page
│   │   ├── about/page.tsx       # About Us
│   │   ├── products/page.tsx    # All products
│   │   ├── applications/page.tsx
│   │   ├── infrastructure/page.tsx
│   │   ├── quality/page.tsx
│   │   ├── certificates/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky responsive navbar with dropdown
│   │   │   └── Footer.tsx       # Full footer with links and contact
│   │   │
│   │   ├── sections/            # Homepage sections (used in page.tsx)
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── About.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ProductCategories.tsx
│   │   │   ├── Applications.tsx
│   │   │   ├── Infrastructure.tsx
│   │   │   ├── Quality.tsx
│   │   │   ├── ExportMarkets.tsx
│   │   │   ├── ContactCTA.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       └── Badge.tsx
│   │
│   ├── data/                    # All editable site content
│   │   ├── company.ts           # ← Edit company info, nav, stats here
│   │   └── products.ts          # ← Edit product list here
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   │
│   └── lib/
│       └── utils.ts             # cn(), helpers
│
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## ✏️ How to Edit Content

All content is centralised in `src/data/` — no need to touch component files for routine updates.

### Update Company Info
```ts
// src/data/company.ts
export const company = {
  name: 'Sanjay Industries',
  contact: {
    phone: '+91 73137 27060',   // ← Update phone
    email: 'info@sanjaydyes.com', // ← Update email
    address: '...',              // ← Update address
  }
}
```

### Add / Edit Products
```ts
// src/data/products.ts
products: [
  {
    id: 'dy-12',
    name: 'Direct Yellow 12',
    shade: 'Bright Lemon Yellow',
    applications: ['Cotton', 'Viscose'],
    availability: 'In Stock',
  },
  // Add more products here
]
```

### Add Factory Images
1. Copy factory photos to `public/factory/photo1.jpg`
2. In `src/data/company.ts`, update `infrastructureGallery`:
```ts
{
  id: 'factory-floor',
  title: 'Manufacturing Floor',
  description: '...',
  src: '/factory/photo1.jpg',  // ← add src here
}
```

---

## 🎨 Design Tokens

| Token       | Value     |
|-------------|-----------|
| Navy        | `#0B1F3A` |
| Gold        | `#EAB308` |
| Background  | `#F8FAFC` |
| Text        | `#1F2937` |
| Border      | `#E5E7EB` |

---

## 📧 Contact Form Setup

The contact form at `src/components/sections/ContactSection.tsx` currently simulates submission.

To make it live, connect to one of:
- **[Resend](https://resend.com)** — Recommended for Next.js (free tier available)
- **[Formspree](https://formspree.io)** — No backend needed
- **[Nodemailer](https://nodemailer.com)** — Full control via API route

Create `src/app/api/contact/route.ts` and replace the `handleSubmit` simulation.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Or Netlify
```bash
npm run build
# Upload the .next folder to Netlify
```

### Custom Domain
Point `sanjaydyes.com` to your Vercel/Netlify deployment via DNS settings.

---

## 📌 Pending Items (From Client)

| Item                   | Status        | Action Needed                        |
|------------------------|---------------|--------------------------------------|
| Factory Photos         | ⏳ Waiting    | Add to `/public/factory/`            |
| Logo (SVG/PNG HD)      | ⏳ Waiting    | Add to `/public/logo/`               |
| Certificate Images     | ⏳ Waiting    | Add to `/public/certificates/`       |
| Real Email Address     | ⏳ Confirm    | Update `company.ts → contact.email`  |
| Google Map Embed URL   | ⏳ Confirm    | Update `company.ts → mapEmbedUrl`    |
| Contact Form Backend   | 🔧 Dev Task   | Connect Resend/Formspree             |

---

## 🧱 Tech Stack

| Tool           | Version | Purpose                        |
|----------------|---------|--------------------------------|
| Next.js        | 14.2    | React framework, App Router    |
| TypeScript     | 5.x     | Type safety                    |
| Tailwind CSS   | 3.4     | Utility-first styling          |
| Framer Motion  | 11.x    | Scroll animations              |
| Lucide React   | 0.383   | Icon library                   |

---

*Built by Project Phoenix · Client: Sanjay Industries, Ahmedabad*
