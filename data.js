/**
 * SMART FIT - CENTRAL DATA STORE
 * =============================================================================
 * Client: Smart Fit, Udumalpet, Tamil Nadu
 * Target: Branded Surplus Clothing (Men, Women, Kids)
 * Note: All orders are facilitated via WhatsApp enquiries (No cart/checkout).
 * =============================================================================
 */

const SMART_FIT_DATA = {
  // Store & Contact Information
  store: {
    name: "SMART FIT",
    tagline: "Branded Style. Smart Price.",
    subtitle: "Authentic branded surplus fashion for Men, Women & Kids — delivered fast across South India.",
    phone: "+91 9360660051",
    whatsappNumber: "919360660051",
    email: "smartfit0626@gmail.com",
    address: {
      line1: "No. 68, Kaliyaniammal Layout",
      line2: "Gandhi Nagar",
      city: "Udumalpet",
      state: "Tamil Nadu",
      pincode: "642126",
      full: "No. 68, Kaliyaniammal Layout, Gandhi Nagar, Udumalpet - 642126, Tamil Nadu"
    },
    hours: "Mon - Sun: 10:00 AM - 9:30 PM (All 7 Days Open)",
    social: {
      instagram: "https://instagram.com/smartfitudumalpet",
      instagramHandle: "@smartfitudumalpet",
      facebook: "https://facebook.com/smartfitudumalpet"
    },
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15684.364408995392!2d77.23412028682654!3d10.584346747514868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9d9e4a30e8c79%3A0x7d6f5ad41c2c4d61!2sGandhi%20Nagar%2C%20Udumalaipettai%2C%20Tamil%20Nadu%20642126!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    deliveryRegions: "Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana"
  },

  // Trust Badges
  trustBadges: [
    {
      id: "authentic",
      icon: "verified_user",
      title: "100% Authentic Surplus",
      description: "Direct factory excess from top national & international labels."
    },
    {
      id: "delivery",
      icon: "local_shipping",
      title: "South India Delivery",
      description: "Express shipping to your doorstep across TN, KL, KA, AP & TS."
    },
    {
      id: "pricing",
      icon: "savings",
      title: "Unbeatable Surplus Prices",
      description: "Flat 50% to 75% OFF compared to standard showroom retail tags."
    }
  ],

  // Brand Marquee (Strictly bold editorial typography - NO trademark logos)
  brands: [
    "LOUIS PHILIPPE",
    "US POLO",
    "RALPH LAUREN POLO",
    "AVAASA",
    "ALLEN SOLLY",
    "PUMA SURPLUS",
    "PREMIUM DENIMS",
    "SOUTH INDIA SHIPPING"
  ],

  // Shop By Category (Bento Grid)
  categories: [
    {
      id: "men",
      title: "Men's Surplus",
      tagline: "Sharp, Casual & Streetwear",
      description: "Executive shirts, slim fit trousers, branded polos & active wear.",
      itemsCount: "180+ Styles",
      badge: "HOT SELLERS",
      link: "collections.html?category=men",
      image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=900&auto=format&fit=crop",
      subcategories: ["Shirts", "Pants", "T-Shirts", "Active Wear"]
    },
    {
      id: "women",
      title: "Women's Collection",
      tagline: "Avaasa Kurtis & Western Wear",
      description: "Designer 2-pc/3-pc kurti sets, stretch jeggings, tops & active wear.",
      itemsCount: "220+ Styles",
      badge: "TRENDING NOW",
      link: "collections.html?category=women",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
      subcategories: ["Kurtis", "Leggings", "Jeans", "T-Shirts", "Active Wear"]
    },
    {
      id: "kids",
      title: "Kids Daily Wear",
      tagline: "Comfortable All-Day Play & Home Wear",
      description: "Super-comfy cotton sets, breathable daily tees & durable joggers for boys & girls.",
      itemsCount: "95+ Styles",
      badge: "DAILY ESSENTIALS",
      link: "collections.html?category=kids",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop",
      subcategories: ["Daily Wear"]
    }
  ],

  // Complete Catalog for Collections & Featured
  featuredProducts: [
    {
      id: "fp-01",
      title: "Avaasa Floral Embroidered Kurti Set",
      brand: "AVAASA",
      category: "women",
      subcategory: "Kurtis",
      price: 649,
      retailPrice: 1799,
      discount: "64% OFF",
      badge: "BESTSELLER",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL", "XXL"],
      fabric: "100% Rayon Cotton",
      color: "Dusty Emerald & Gold"
    },
    {
      id: "fp-02",
      title: "LP Classic Fit Royal Oxford Formal Shirt",
      brand: "LOUIS PHILIPPE",
      category: "men",
      subcategory: "Shirts",
      price: 799,
      retailPrice: 2499,
      discount: "68% OFF",
      badge: "PREMIUM SURPLUS",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
      sizes: ["39", "40", "42", "44"],
      fabric: "100% Giza Cotton",
      color: "Sky Blue Texture"
    },
    {
      id: "fp-03",
      title: "US Polo Pique Cotton Slim Polo Tee",
      brand: "US POLO",
      category: "men",
      subcategory: "T-Shirts",
      price: 499,
      retailPrice: 1599,
      discount: "69% OFF",
      badge: "HOT VALUE",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      fabric: "Bio-washed Stretch Pique",
      color: "Burgundy Maroon"
    },
    {
      id: "fp-04",
      title: "Avaasa Indigo Block Print A-Line Kurti",
      brand: "AVAASA",
      category: "women",
      subcategory: "Kurtis",
      price: 549,
      retailPrice: 1499,
      discount: "63% OFF",
      badge: "TRENDING",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
      sizes: ["S", "M", "L", "XL"],
      fabric: "Mulberry Cotton",
      color: "Indigo & Ivory"
    },
    {
      id: "fp-05",
      title: "RL Polo Heavyweight Street Crewneck",
      brand: "RALPH LAUREN POLO",
      category: "men",
      subcategory: "T-Shirts",
      price: 599,
      retailPrice: 2199,
      discount: "72% OFF",
      badge: "LIMITED SURPLUS",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL"],
      fabric: "260 GSM French Terry",
      color: "Sage Olive"
    },
    {
      id: "fp-06",
      title: "Kids Cotton Dino Print Graphic Daily Tee & Shorts Set",
      brand: "BRANDED SURPLUS",
      category: "kids",
      subcategory: "Daily Wear",
      price: 399,
      retailPrice: 999,
      discount: "60% OFF",
      badge: "DAILY ESSENTIAL",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=800&auto=format&fit=crop",
      sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
      fabric: "100% Breathable Combed Cotton",
      color: "Cobalt & Grey"
    },
    {
      id: "fp-07",
      title: "Women's High-Rise Ankle Stretch Denim",
      brand: "PREMIUM SURPLUS",
      category: "women",
      subcategory: "Jeans",
      price: 699,
      retailPrice: 1999,
      discount: "65% OFF",
      badge: "MUST HAVE",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
      sizes: ["28", "30", "32", "34"],
      fabric: "Super-soft Spandex Denim",
      color: "Vintage Washed Blue"
    },
    {
      id: "fp-08",
      title: "LP Executive Structured Tapered Chinos",
      brand: "LOUIS PHILIPPE",
      category: "men",
      subcategory: "Pants",
      price: 849,
      retailPrice: 2899,
      discount: "70% OFF",
      badge: "POPULAR",
      image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop",
      sizes: ["30", "32", "34", "36"],
      fabric: "Twill Cotton with Comfort Stretch",
      color: "Khaki Sand"
    },
    {
      id: "fp-09",
      title: "Avaasa 3-Piece Chanderi Kurti & Palazzo Set",
      brand: "AVAASA",
      category: "women",
      subcategory: "Kurtis",
      price: 899,
      retailPrice: 2999,
      discount: "70% OFF",
      badge: "ETHNIC EDIT",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL"],
      fabric: "Chanderi Silk Blend with Dupatta",
      color: "Ruby Red & Gold"
    },
    {
      id: "fp-10",
      title: "US Polo Striped Yarn-Dyed Casual Shirt",
      brand: "US POLO",
      category: "men",
      subcategory: "Shirts",
      price: 699,
      retailPrice: 2299,
      discount: "69% OFF",
      badge: "FRESH SURPLUS",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL", "XXL"],
      fabric: "100% Breathable Linen Cotton",
      color: "Navy & White Stripe"
    },
    {
      id: "fp-11",
      title: "Kids Breathable Cotton Daily Playwear Set",
      brand: "BRANDED SURPLUS",
      category: "kids",
      subcategory: "Daily Wear",
      price: 449,
      retailPrice: 1199,
      discount: "62% OFF",
      badge: "DAILY WEAR",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
      sizes: ["3-4Y", "5-6Y", "7-8Y"],
      fabric: "100% Soft Bio-Washed Cotton",
      color: "Mint & Grey Stripe"
    },
    {
      id: "fp-12",
      title: "Men's Quick-Dry Breathable Active Gym Joggers",
      brand: "PUMA SURPLUS",
      category: "men",
      subcategory: "Active Wear",
      price: 549,
      retailPrice: 1899,
      discount: "71% OFF",
      badge: "ACTIVEWEAR",
      image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL"],
      fabric: "4-Way Poly Spandex",
      color: "Charcoal Heather"
    },
    {
      id: "fp-13",
      title: "Women's 4-Way Stretch Ankle Cotton Leggings",
      brand: "AVAASA",
      category: "women",
      subcategory: "Leggings",
      price: 349,
      retailPrice: 899,
      discount: "61% OFF",
      badge: "COMFORT FIT",
      image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
      sizes: ["M", "L", "XL", "Free Size"],
      fabric: "95% Combed Cotton, 5% Lycra",
      color: "Jet Black"
    },
    {
      id: "fp-14",
      title: "Women's Oversized Drop-Shoulder Graphic Tee",
      brand: "BRANDED SURPLUS",
      category: "women",
      subcategory: "T-Shirts",
      price: 449,
      retailPrice: 1299,
      discount: "65% OFF",
      badge: "GEN-Z EDIT",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      sizes: ["S", "M", "L"],
      fabric: "240 GSM Pure Cotton",
      color: "Lavender Mist"
    },
    {
      id: "fp-15",
      title: "Women's Seamless Quick-Dry Activewear Tights",
      brand: "PREMIUM SURPLUS",
      category: "women",
      subcategory: "Active Wear",
      price: 599,
      retailPrice: 1799,
      discount: "66% OFF",
      badge: "WORKOUT GEAR",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      sizes: ["S", "M", "L"],
      fabric: "High-Compression Poly Spandex",
      color: "Slate Teal"
    }
  ],

  // New Arrivals Carousel & Dedicated Page Drops
  newArrivals: [
    {
      id: "na-01",
      title: "LP Micro-Checks Premium Linen Shirt",
      brand: "LOUIS PHILIPPE",
      category: "men",
      price: 849,
      retailPrice: 2699,
      discount: "68% OFF",
      badge: "NEW DROP",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
      tag: "Pure Linen Blend",
      dropDate: "This Week's Excess Clearance"
    },
    {
      id: "na-02",
      title: "Avaasa Festive 3-Piece Silk Blend Kurti",
      brand: "AVAASA",
      category: "women",
      price: 899,
      retailPrice: 2999,
      discount: "70% OFF",
      badge: "JUST IN",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=800&auto=format&fit=crop",
      tag: "With Dupatta",
      dropDate: "Fresh Wednesday Drop"
    },
    {
      id: "na-03",
      title: "US Polo Tipped Collar Sport Tee",
      brand: "US POLO",
      category: "men",
      price: 529,
      retailPrice: 1699,
      discount: "69% OFF",
      badge: "FRESH STOCK",
      image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=800&auto=format&fit=crop",
      tag: "Sport Edition",
      dropDate: "Factory Release"
    },
    {
      id: "na-04",
      title: "RL Polo Vintage Washed Denim Jacket",
      brand: "RALPH LAUREN POLO",
      category: "men",
      price: 1199,
      retailPrice: 3999,
      discount: "70% OFF",
      badge: "RARE FIND",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop",
      tag: "Heavy Cotton",
      dropDate: "Limited 12 Pieces Only"
    },
    {
      id: "na-05",
      title: "Kids Pure Cotton Daily Loungewear Set",
      brand: "BRANDED SURPLUS",
      category: "kids",
      price: 429,
      retailPrice: 1099,
      discount: "61% OFF",
      badge: "DAILY DROP",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop",
      tag: "100% Combed Cotton",
      dropDate: "Daily Collection"
    },
    {
      id: "na-06",
      title: "Women's Oversized Graphic Street Tee",
      brand: "BRANDED SURPLUS",
      category: "women",
      price: 449,
      retailPrice: 1299,
      discount: "65% OFF",
      badge: "GEN-Z EDIT",
      image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
      tag: "240 GSM Cotton",
      dropDate: "Streetwear Drop"
    }
  ],

  // Promotional Offers for Offers Page
  offers: [
    {
      id: "offer-1",
      badge: "MOST POPULAR COMBO",
      title: "3 Branded Shirts or Kurtis @ Flat ₹1,799",
      description: "Mix & Match across Louis Philippe, US Polo, and Avaasa. Valid for in-store pickup and WhatsApp parcel dispatch across South India.",
      code: "SMART3X",
      savings: "Save up to ₹4,500 vs MRP",
      waMessage: "Hello Smart Fit! I want to claim the '3 Branded Shirts/Kurtis for ₹1,799' combo offer. Please share the currently available designs in my size!"
    },
    {
      id: "offer-2",
      badge: "SOUTH INDIA SHIPPING DEAL",
      title: "Free Express Courier on Orders Above ₹1,499",
      description: "Enjoy zero shipping charges on parcels delivered across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.",
      code: "FREESHIP",
      savings: "Flat ₹120 Courier Fee Waived",
      waMessage: "Hello Smart Fit! I would like to place an order above ₹1,499 with Free Express Shipping. Please share the current stock catalog!"
    },
    {
      id: "offer-3",
      badge: "COLLEGE YOUTH COMBO",
      title: "2 Branded Polo T-Shirts @ Flat ₹899",
      description: "Pick any 2 US Polo or Ralph Lauren Polo pique cotton tees for college and weekend wear.",
      code: "POLO2X",
      savings: "Save up to ₹2,200 vs MRP",
      waMessage: "Hello Smart Fit! I want to claim the '2 Polo T-Shirts for ₹899' offer. What colors and sizes do you have in stock?"
    }
  ],

  // Primary Hero Promo Banner
  promoOffer: {
    badge: "LIMITED TIME SURPLUS COMBO",
    title: "GRAB 3 BRANDED SHIRTS OR KURTIS AT FLAT ₹1,799",
    subtitle: "Mix & Match across Louis Philippe, US Polo, and Avaasa. Valid till stocks last in our Udumalpet outlet & WhatsApp delivery across South India.",
    code: "SMART3X",
    ctaText: "Claim Offer on WhatsApp",
    waMessage: "Hello Smart Fit! I want to claim the '3 Branded Shirts/Kurtis for ₹1,799' combo offer. Please share the currently available designs in my size!"
  },

  // Why Smart Fit - 4 Pillars
  valuePillars: [
    {
      id: "vp-1",
      number: "01",
      title: "Branded & Premium",
      description: "Authentic export and brand surplus garments directly sourced. No cheap lookalikes—get the exact luxury fabrics and stitching."
    },
    {
      id: "vp-2",
      number: "02",
      title: "Unbelievable Low Prices",
      description: "Direct surplus sourcing means zero showroom markups. Enjoy 60%–75% discounts below original MRP every single day."
    },
    {
      id: "vp-3",
      number: "03",
      title: "Doorstep South India Delivery",
      description: "Fast courier delivery across Tamil Nadu (24-48 hrs), Kerala, Karnataka, Andhra Pradesh, and Telangana with tracking updates."
    },
    {
      id: "vp-4",
      number: "04",
      title: "Instant 1-on-1 WhatsApp Service",
      description: "Skip clunky carts! Chat directly with our Udumalpet boutique staff. Get real product photos, size videos, and instant parcel dispatch."
    }
  ],

  // Customer Testimonials
  testimonials: [
    {
      id: "t-1",
      name: "Kavitha R.",
      location: "Coimbatore, TN",
      badge: "Verified Buyer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      item: "Avaasa 3-Pc Kurti Set",
      quote: "Ordered two Avaasa kurtis through WhatsApp. The fabric quality is 100% original showroom stock, but paid only ₹649 each! Delivery to Coimbatore took just one day. Super impressed!"
    },
    {
      id: "t-2",
      name: "Sanjay Kumar",
      location: "Bengaluru, KA",
      badge: "Verified Buyer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      item: "LP Formal Shirts (Pack of 3)",
      quote: "Was skeptical about branded surplus online, but Smart Fit sent actual video clips of the tags and collar stitch on WhatsApp before I paid. Shirts arrived safely in Bengaluru. Truly smart pricing!"
    },
    {
      id: "t-3",
      name: "Arun Praveen",
      location: "Udumalpet (Local Customer)",
      badge: "Regular In-store Shopper",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      item: "US Polo & RL Polos",
      quote: "The Gandhi Nagar store is our go-to spot! Best collection in Udumalpet for college guys. Whenever fresh surplus lands, they ping me on WhatsApp. Unbeatable value."
    },
    {
      id: "t-4",
      name: "Deepa & Mahesh",
      location: "Kochi, Kerala",
      badge: "Verified Buyer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      item: "Kids Daily Wear + Polo Tees",
      quote: "Ordered combo clothes for my kids and husband. Arrived nicely packed via professional courier. The WhatsApp team was extremely polite and helped us choose the exact sizes."
    }
  ]
};

/**
 * HELPER: Build sanitized, pre-filled WhatsApp link
 */
function getWhatsAppEnquiryUrl(productName, price, customMessage) {
  const phone = SMART_FIT_DATA.store.whatsappNumber;
  let text = "";

  if (customMessage) {
    text = customMessage;
  } else if (productName && price) {
    text = `Hello Smart Fit, I would like to enquire about ${productName} (₹${price}). Is it available in my size?`;
  } else {
    text = "Hello Smart Fit! I visited your website and would like to see the latest branded surplus collections available for order.";
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

window.SMART_FIT_DATA = SMART_FIT_DATA;
window.getWhatsAppEnquiryUrl = getWhatsAppEnquiryUrl;
