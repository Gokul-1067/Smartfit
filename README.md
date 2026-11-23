# Smart Fit Boutique — High-Converting Editorial Home Page

A bold, bright, modern, and colorful fashion boutique website for **"Smart Fit"** in **Udumalpet, Tamil Nadu**, targeting youth aged 14–25. Built with an energetic high-fashion lookbook aesthetic, vibrant multi-color gradients (hot pink, sunset coral, electric cobalt, sunshine yellow, and mint), smooth 60fps animations, centralized data architecture, and full WhatsApp ordering flow.

---

## 🚀 Live Preview / Running the Site

Simply open `index.html` in any web browser, or serve it using your preferred local server:

```bash
# Python
python -m http.server 3000

# Node / npx (if installed)
npx serve .
```

Then visit `http://localhost:3000` (or double-click `index.html`).

---

## 📁 Multi-Page Project Architecture

```
Smartfit/
├── index.html        # Home Page (Editorial Hero, Brand Marquee, Bento Grid, Curated Featured, Value Pillars, Testimonials)
├── collections.html  # Full Collections Catalog (Dynamic Category Filters, Search Box, Sort Dropdown, Live Product Count)
├── new-arrivals.html # New Weekly Drops (Fresh Factory Excess Drops & VIP Drop WhatsApp Broadcast)
├── offers.html       # Exclusive Offers & Combos (3 for ₹1,799 deal, Free Shipping, Step-by-Step Claim Guide)
├── about.html        # About Us & Story (Udumalpet boutique roots, surplus sourcing philosophy, trust stats, 4 pillars)
├── contact.html      # Contact & Directions (Store details, full Google Maps embed, interactive WhatsApp enquiry builder)
├── styles.css        # Central design system with :root variables, colorful gradients & 60fps animations
├── data.js           # Single source of truth for products, categories, combo deals, and store info
├── app.js            # Universal interactive engine: routing, filtering, search, carousel, animations, forms
└── README.md         # Customization guide for real client photos, text & branding
```

---

## 🎨 How to Customize

### 1. Changing Brand Colors (`styles.css`)
All theme colors are centralized at the very top of `styles.css` under `:root`. Once the client provides their official logo colors, update these 3 variables:

```css
:root {
  /* High-energy saturated fashion accents */
  --accent-pink: #ff1b6b;             /* Electric Hot Pink / Magenta */
  --accent-coral: #ff5733;            /* Vivid Sunset Coral */
  --accent-orange: #ff7700;           /* Electric Tangerine */
  --accent-yellow: #ffb703;           /* Sunburst Gold / Mango */
  --accent-blue: #3a86ff;             /* Electric Royal Cobalt */
  --accent-purple: #8338ec;           /* Radiant Lavender / Violet */
  --accent-mint: #06d6a0;             /* Fresh Vivid Mint Emerald */

  /* Primary UI Pop Color */
  --accent-primary: #ff1b6b;          /* Vibrant Pop Crimson/Pink */
  --accent-secondary: #3a86ff;        /* Electric Royal Blue */

  /* Radiant clean surfaces */
  --bg-primary: #f8fafc;
  --bg-secondary: #f0f4fa;
  --bg-card: #ffffff;
}
```

### 2. Updating Store Info, Phone & WhatsApp (`data.js`)
Edit `SMART_FIT_DATA.store` in `data.js`:

```javascript
store: {
  name: "SMART FIT",
  tagline: "Branded Style. Smart Price.",
  phone: "+91 9360660051",
  whatsappNumber: "919360660051",          // International format without '+'
  email: "smartfit0626@gmail.com",
  address: {
    line1: "No. 68, Kaliyaniammal Layout",
    line2: "Gandhi Nagar",
    city: "Udumalpet",
    state: "Tamil Nadu",
    pincode: "642126"
  }
}
```

### 3. Adding or Swapping Products & Images (`data.js`)
To swap placeholder images with real studio or boutique photos, modify the `featuredProducts` and `newArrivals` arrays in `data.js`:

```javascript
{
  id: "fp-01",
  title: "Avaasa Floral Embroidered Kurti Set",
  brand: "AVAASA",                        // Editorial typography only (NO trademark logos)
  category: "women",                      // "women", "men", or "kids"
  price: 649,                             // Surplus Price
  retailPrice: 1799,                      // Original Retail MRP
  discount: "64% OFF",
  badge: "BESTSELLER",
  image: "assets/images/kurti-01.jpg",    // Swap local path or cloud URL
  sizes: ["M", "L", "XL", "XXL"],
  fabric: "100% Rayon Cotton",
  color: "Dusty Emerald & Gold"
}
```

Every product card automatically generates its own personalized WhatsApp enquiry link:
```
https://wa.me/919360660051?text=Hello%20Smart%20Fit%2C%20I%20would%20like%20to%20enquire%20about%20[Product%20Name]%20(%E2%82%B9[Price]).%20Is%20it%20available%3F
```

---

## ⚡ Key Features Built

1. **Global Sticky Navbar**: Glassmorphic blur (`backdrop-filter: blur(16px)`), animated scroll-state switch, active link tracker, and responsive slide-in mobile navigation drawer.
2. **Hero Section & Visual Lookbook**: Staggered word-reveal headline ("Branded Style. Smart Price."), dual CTAs, trust row badges, interactive 3D perspective tilt frame, and floating badges.
3. **Infinite Editorial Brand Marquee**: Keyframe ticker featuring *Louis Philippe*, *US Polo*, *Ralph Lauren Polo*, and *Avaasa* in bold typography (trademark safe).
4. **Shop by Category Bento Grid**: Asymmetrical 3-card layout (Men, Women, Kids) with hover scale zoom, dark gradient legibility overlays, and subcategory tags.
5. **Featured Products**: Dynamic catalog with instant category filtering (All, Women, Men, Kids), price slash badges, and 1-tap WhatsApp checkout buttons.
6. **New Arrivals Carousel**: Smooth touch-swipe horizontal scroll track with next/prev navigation buttons and drag-to-scroll support.
7. **Offers Banner**: High-impact promotional banner with animated glowing border shimmer and promo code pill (`SMART3X`).
8. **Why Smart Fit (4 Pillars)**: Staggered entrance cards for *Branded & Premium*, *Low Surplus Prices*, *South India Delivery*, and *Easy WhatsApp Chat*.
9. **Customer Testimonials**: 4 realistic buyer reviews from Coimbatore, Bengaluru, Udumalpet, and Kochi with star ratings and verified buyer badges.
10. **Store Location & Map Teaser**: Udumalpet store card with one-tap Call, WhatsApp, and Email buttons paired with a responsive Google Maps embed.
11. **Global Footer & Floating WhatsApp Button**: Complete footer with quick links, social links (`@smartfitudumalpet`), and a persistent bottom-right WhatsApp button with pulsing ripple animations.
