/**
 * SMART FIT - UNIVERSAL INTERACTIVE ENGINE
 * =============================================================================
 * Handles dynamic product rendering, subcategory filters, dynamic homepage offers
 * and testimonials, horizontal carousel, animations, and WhatsApp integration.
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileNavigation();
  highlightActiveNavLink();
  initBrandMarquee();
  initCategoryBento();
  initFeaturedProducts();
  initCollectionsCatalog();
  initHomeOfferBanner();
  initHomeTestimonials();
  initNewArrivalsPage();
  initArrivalsCarousel();
  initOffersPage();
  initContactWhatsAppForm();
  initScrollAnimations();
  initMagneticButtons();
  initCardTilt();
  updateDynamicLinks();
});

/* -----------------------------------------------------------------------------
   1. NAVBAR SCROLL & ACTIVE PAGE HIGHLIGHT
   ----------------------------------------------------------------------------- */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const targetFile = href.split('#')[0] || 'index.html';
    if (targetFile === currentPath || (currentPath === '' && targetFile === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* -----------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   ----------------------------------------------------------------------------- */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav || !backdrop) return;

  function toggleMenu(isOpen) {
    const shouldOpen = isOpen !== undefined ? isOpen : !mobileNav.classList.contains('open');
    if (shouldOpen) {
      mobileNav.classList.add('open');
      backdrop.classList.add('open');
      toggleBtn.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('open');
      backdrop.classList.remove('open');
      toggleBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  backdrop.addEventListener('click', () => toggleMenu(false));

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* -----------------------------------------------------------------------------
   3. BRAND MARQUEE
   ----------------------------------------------------------------------------- */
function initBrandMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track || !window.SMART_FIT_DATA) return;

  const brands = window.SMART_FIT_DATA.brands || [];
  
  function createGroup() {
    const group = document.createElement('div');
    group.className = 'marquee-group';
    brands.forEach(b => {
      const item = document.createElement('span');
      item.className = 'marquee-item';
      item.innerHTML = `${b} <span class="marquee-star">✦</span>`;
      group.appendChild(item);
    });
    return group;
  }

  track.innerHTML = '';
  track.appendChild(createGroup());
  track.appendChild(createGroup());
}

/* -----------------------------------------------------------------------------
   4. CATEGORY BENTO GRID (FOR HOME PAGE)
   ----------------------------------------------------------------------------- */
function initCategoryBento() {
  const container = document.getElementById('bento-categories-container');
  if (!container || !window.SMART_FIT_DATA) return;

  const categories = window.SMART_FIT_DATA.categories || [];
  container.innerHTML = '';

  categories.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = `bento-card bento-card-${cat.id} reveal delay-${(index % 3) + 1}`;
    
    const subTagsHtml = cat.subcategories.map(s => `<span class="bento-tag-item">${s}</span>`).join('');

    card.innerHTML = `
      <img src="${cat.image}" alt="${cat.title}" class="bento-bg-image" loading="lazy" />
      <div class="bento-gradient-overlay"></div>
      <div class="bento-content">
        <span class="bento-badge">${cat.badge} • ${cat.itemsCount}</span>
        <h3 class="bento-title">${cat.title}</h3>
        <p class="bento-tagline">${cat.tagline}</p>
        <p class="bento-desc">${cat.description}</p>
        <div class="bento-tags">${subTagsHtml}</div>
        <a href="${cat.link}" class="bento-action">
          <span>Explore ${cat.title}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

/* -----------------------------------------------------------------------------
   5. FEATURED PRODUCTS (FOR HOME PAGE)
   ----------------------------------------------------------------------------- */
function initFeaturedProducts() {
  const grid = document.getElementById('featured-products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn:not(.catalog-cat-tab)');
  if (!grid || !window.SMART_FIT_DATA) return;

  const products = window.SMART_FIT_DATA.featuredProducts || [];

  function render(category = 'all') {
    grid.innerHTML = '';
    const filtered = category === 'all' 
      ? products.slice(0, 8) 
      : products.filter(p => p.category.toLowerCase() === category.toLowerCase()).slice(0, 8);

    filtered.forEach((p, idx) => {
      grid.appendChild(createProductCard(p, idx));
    });

    reobserveElements();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      render(cat);
    });
  });

  render('all');
}

/* -----------------------------------------------------------------------------
   6. DYNAMIC HOMEPAGE OFFER BANNER & TESTIMONIALS (SYNCED FROM data.js)
   ----------------------------------------------------------------------------- */
function initHomeOfferBanner() {
  const container = document.getElementById('home-offer-container');
  if (!container || !window.SMART_FIT_DATA || !window.SMART_FIT_DATA.promoOffer) return;

  const p = window.SMART_FIT_DATA.promoOffer;
  const waUrl = window.getWhatsAppEnquiryUrl(null, null, p.waMessage);

  container.innerHTML = `
    <div class="offer-banner-card reveal">
      <div class="offer-shimmer-border" aria-hidden="true"></div>
      <div class="offer-content">
        <span class="offer-badge">${p.badge}</span>
        <h2 class="offer-title">
          ${p.title.replace('FLAT ₹1,799', 'FLAT <span class="text-accent">₹1,799</span>')}
        </h2>
        <p class="offer-sub">${p.subtitle}</p>

        <div class="offer-cta-group">
          <a id="promo-wa-btn" href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.05rem;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"/>
            </svg>
            <span>${p.ctaText || 'Claim Offer on WhatsApp'}</span>
          </a>

          <div class="offer-code-pill">
            <span>PROMO CODE:</span>
            <strong>${p.code}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initHomeTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid || !window.SMART_FIT_DATA || !window.SMART_FIT_DATA.testimonials) return;

  grid.innerHTML = '';
  window.SMART_FIT_DATA.testimonials.forEach((t, idx) => {
    const card = document.createElement('div');
    card.className = `testimonial-card reveal delay-${(idx % 4) + 1}`;
    card.innerHTML = `
      <div>
        <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p class="testimonial-quote">"${t.quote}"</p>
      </div>
      <div class="testimonial-user">
        <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" />
        <div>
          <p class="testimonial-name">${t.name}</p>
          <p class="testimonial-location">${t.location}</p>
          <span class="testimonial-item-tag">Bought: ${t.item}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* -----------------------------------------------------------------------------
   7. COLLECTIONS CATALOG PAGE (WITH SUBCATEGORY PILLS)
   ----------------------------------------------------------------------------- */
function initCollectionsCatalog() {
  const grid = document.getElementById('collections-products-grid');
  if (!grid || !window.SMART_FIT_DATA) return;

  const products = window.SMART_FIT_DATA.featuredProducts || [];
  const searchInput = document.getElementById('catalog-search');
  const sortSelect = document.getElementById('catalog-sort');
  const countPill = document.getElementById('catalog-count');
  const categoryTabs = document.querySelectorAll('.catalog-cat-tab');
  const subcatContainer = document.getElementById('subcategory-filter-container');

  const subcategoryMap = {
    men: ["Shirts", "Pants", "T-Shirts", "Active Wear"],
    women: ["Kurtis", "Leggings", "Jeans", "T-Shirts", "Active Wear"],
    kids: ["Daily Wear"]
  };

  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category') || 'all';
  let activeSubcategory = 'all';

  // Highlight initial active category tab
  categoryTabs.forEach(tab => {
    if (tab.getAttribute('data-category') === activeCategory) {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    }
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.getAttribute('data-category');
      activeSubcategory = 'all'; // Reset subcategory when switching parent category
      renderSubcategoryPills();
      applyFiltersAndSort();
    });
  });

  function renderSubcategoryPills() {
    if (!subcatContainer) return;
    subcatContainer.innerHTML = '';

    const list = subcategoryMap[activeCategory.toLowerCase()];
    if (!list || list.length === 0) {
      subcatContainer.style.display = 'none';
      return;
    }

    subcatContainer.style.display = 'flex';

    // "All" subcategory pill
    const allBtn = document.createElement('button');
    allBtn.className = `subcat-btn ${activeSubcategory === 'all' ? 'active' : ''}`;
    allBtn.textContent = `All ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`;
    allBtn.addEventListener('click', () => {
      activeSubcategory = 'all';
      subcatContainer.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
      allBtn.classList.add('active');
      applyFiltersAndSort();
    });
    subcatContainer.appendChild(allBtn);

    // Specific subcategory pills
    list.forEach(sub => {
      const btn = document.createElement('button');
      btn.className = `subcat-btn ${activeSubcategory === sub ? 'active' : ''}`;
      btn.textContent = sub;
      btn.addEventListener('click', () => {
        activeSubcategory = sub;
        subcatContainer.querySelectorAll('.subcat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFiltersAndSort();
      });
      subcatContainer.appendChild(btn);
    });
  }

  function applyFiltersAndSort() {
    let result = [...products];

    // Filter by Parent Category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Subcategory
    if (activeSubcategory !== 'all') {
      result = result.filter(p => p.subcategory && p.subcategory.toLowerCase() === activeSubcategory.toLowerCase());
    }

    // Filter by Search Query
    if (searchInput && searchInput.value.trim() !== '') {
      const q = searchInput.value.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        (p.subcategory && p.subcategory.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortSelect) {
      const val = sortSelect.value;
      if (val === 'price-low') {
        result.sort((a, b) => a.price - b.price);
      } else if (val === 'price-high') {
        result.sort((a, b) => b.price - a.price);
      } else if (val === 'discount') {
        result.sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
      }
    }

    // Update count pill
    if (countPill) {
      countPill.textContent = `Showing ${result.length} Styles`;
    }

    // Render cards
    grid.innerHTML = '';
    if (result.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">No items matched your filter</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Try choosing another subcategory or clearing your search.</p>
          <a href="https://wa.me/919360660051?text=Hello%20Smart%20Fit!%20I%20am%20looking%20for%20a%20specific%20item%20in%20your%20boutique." target="_blank" class="btn btn-whatsapp">
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      `;
    } else {
      result.forEach((p, idx) => {
        grid.appendChild(createProductCard(p, idx));
      });
    }

    reobserveElements();
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFiltersAndSort);
  }
  if (sortSelect) {
    sortSelect.addEventListener('change', applyFiltersAndSort);
  }

  renderSubcategoryPills();
  applyFiltersAndSort();
}

/* -----------------------------------------------------------------------------
   8. PRODUCT CARD BUILDER HELPER
   ----------------------------------------------------------------------------- */
function createProductCard(p, idx) {
  const card = document.createElement('div');
  card.className = `product-card reveal delay-${(idx % 4) + 1}`;
  
  const waUrl = window.getWhatsAppEnquiryUrl(p.title, p.price);
  const sizeTags = p.sizes ? p.sizes.join(', ') : 'All Sizes';

  card.innerHTML = `
    <div class="product-image-box">
      <img src="${p.image}" alt="${p.title}" class="product-image" loading="lazy" />
      <span class="product-badge-corner">${p.badge}</span>
      <span class="product-discount-pill">${p.discount}</span>
    </div>
    <div class="product-info">
      <span class="product-brand-tag">${p.brand}</span>
      <h4 class="product-title">${p.title}</h4>
      <div class="product-specs">
        <span>Sizes: ${sizeTags}</span>
        <span>•</span>
        <span>${p.color}</span>
      </div>
      <div class="product-price-row">
        <span class="product-price">₹${p.price}</span>
        <span class="product-retail-price">₹${p.retailPrice}</span>
      </div>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" title="Enquire on WhatsApp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z"/>
        </svg>
        <span>Enquire on WhatsApp</span>
      </a>
    </div>
  `;
  return card;
}

/* -----------------------------------------------------------------------------
   9. NEW ARRIVALS PAGE (new-arrivals.html)
   ----------------------------------------------------------------------------- */
function initNewArrivalsPage() {
  const grid = document.getElementById('new-arrivals-grid');
  if (!grid || !window.SMART_FIT_DATA) return;

  const arrivals = window.SMART_FIT_DATA.newArrivals || [];
  grid.innerHTML = '';

  arrivals.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = `product-card reveal delay-${(idx % 3) + 1}`;
    
    const waUrl = window.getWhatsAppEnquiryUrl(item.title, item.price, `Hello Smart Fit! I want to check availability for the New Drop item: ${item.title} (₹${item.price}).`);

    card.innerHTML = `
      <div class="product-image-box">
        <img src="${item.image}" alt="${item.title}" class="product-image" loading="lazy" />
        <span class="product-badge-corner" style="background: var(--gradient-primary); color: #fff;">${item.badge}</span>
        <span class="product-discount-pill">${item.discount}</span>
      </div>
      <div class="product-info">
        <span class="product-brand-tag">${item.brand}</span>
        <h4 class="product-title">${item.title}</h4>
        <div class="product-specs">
          <span>${item.tag}</span>
          <span>•</span>
          <span style="color: var(--accent-pink); font-weight: 700;">${item.dropDate}</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">₹${item.price}</span>
          <span class="product-retail-price">₹${item.retailPrice}</span>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  reobserveElements();
}

/* -----------------------------------------------------------------------------
   10. NEW ARRIVALS HORIZONTAL CAROUSEL (FOR HOME PAGE)
   ----------------------------------------------------------------------------- */
function initArrivalsCarousel() {
  const track = document.getElementById('arrivals-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const container = document.querySelector('.arrivals-carousel-container');
  if (!track || !window.SMART_FIT_DATA) return;

  const arrivals = window.SMART_FIT_DATA.newArrivals || [];
  track.innerHTML = '';

  arrivals.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'arrival-card';
    
    const waUrl = window.getWhatsAppEnquiryUrl(item.title, item.price);

    card.innerHTML = `
      <div class="arrival-image-box">
        <img src="${item.image}" alt="${item.title}" class="arrival-image" loading="lazy" />
        <span class="arrival-badge">${item.badge}</span>
        <span class="arrival-tag-pill">${item.tag}</span>
      </div>
      <div class="arrival-info">
        <span class="product-brand-tag">${item.brand}</span>
        <h4 class="product-title" style="font-size: 0.98rem; margin-bottom: 0.5rem;">${item.title}</h4>
        <div class="product-price-row" style="margin-bottom: 0.85rem;">
          <span class="product-price" style="font-size: 1.25rem;">₹${item.price}</span>
          <span class="product-retail-price">₹${item.retailPrice}</span>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.65rem 0.85rem; font-size: 0.82rem;">
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    `;
    track.appendChild(card);
  });

  if (prevBtn && nextBtn && container) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
}

/* -----------------------------------------------------------------------------
   11. OFFERS PAGE (offers.html)
   ----------------------------------------------------------------------------- */
function initOffersPage() {
  const grid = document.getElementById('offers-grid');
  if (!grid || !window.SMART_FIT_DATA) return;

  const offers = window.SMART_FIT_DATA.offers || [];
  grid.innerHTML = '';

  offers.forEach((o, idx) => {
    const card = document.createElement('div');
    card.className = `offer-card reveal delay-${(idx % 3) + 1}`;
    
    const waUrl = window.getWhatsAppEnquiryUrl(null, null, o.waMessage);

    card.innerHTML = `
      <div>
        <span class="offer-card-badge">${o.badge}</span>
        <h3 class="offer-card-title">${o.title}</h3>
        <p class="offer-card-desc">${o.description}</p>
        <span class="offer-card-savings">${o.savings}</span>
      </div>
      <div class="offer-card-footer">
        <div class="offer-code-pill" style="background: rgba(255, 27, 107, 0.08); color: var(--accent-pink); border-color: var(--accent-pink);">
          <span>COUPON CODE:</span>
          <strong>${o.code}</strong>
        </div>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
          <span>Claim on WhatsApp</span>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });

  reobserveElements();
}

/* -----------------------------------------------------------------------------
   12. INTERACTIVE CONTACT WHATSAPP BUILDER (contact.html)
   ----------------------------------------------------------------------------- */
function initContactWhatsAppForm() {
  const form = document.getElementById('contact-wa-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name')?.value.trim() || 'Visitor';
    const city = document.getElementById('user-city')?.value.trim() || 'South India';
    const dept = document.getElementById('user-dept')?.value || 'General';
    const msg = document.getElementById('user-msg')?.value.trim() || 'I am interested in your branded surplus collection.';

    const formattedMessage = `Hello Smart Fit! My name is ${name} from ${city}. I am interested in ${dept} surplus apparel: "${msg}". Please share current available items and photos!`;

    window.open(window.getWhatsAppEnquiryUrl(null, null, formattedMessage), '_blank');
  });
}

/* -----------------------------------------------------------------------------
   13. SCROLL ANIMATIONS (INTERSECTION OBSERVER)
   ----------------------------------------------------------------------------- */
let observer;

function initScrollAnimations() {
  const options = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  reobserveElements();
}

function reobserveElements() {
  if (!observer) return;
  const elements = document.querySelectorAll('.reveal:not(.active)');
  elements.forEach(el => observer.observe(el));
}

/* -----------------------------------------------------------------------------
   14. MICRO-INTERACTIONS (MAGNETIC & 3D TILT)
   ----------------------------------------------------------------------------- */
function initMagneticButtons() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 992) return;

  const magneticTargets = document.querySelectorAll('.btn-primary, .btn-whatsapp, .carousel-btn');

  magneticTargets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 992) return;

  const visualFrame = document.querySelector('.visual-frame');
  if (!visualFrame) return;

  visualFrame.addEventListener('mousemove', (e) => {
    const rect = visualFrame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    visualFrame.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  visualFrame.addEventListener('mouseleave', () => {
    visualFrame.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  });
}

/* -----------------------------------------------------------------------------
   15. DYNAMIC LINK BINDINGS
   ----------------------------------------------------------------------------- */
function updateDynamicLinks() {
  if (!window.SMART_FIT_DATA) return;
  const store = window.SMART_FIT_DATA.store;
  const promo = window.SMART_FIT_DATA.promoOffer;

  const heroWaBtn = document.getElementById('hero-wa-btn');
  if (heroWaBtn) {
    heroWaBtn.href = window.getWhatsAppEnquiryUrl(null, null, "Hello Smart Fit! I want to explore your latest branded surplus collections for Men, Women & Kids.");
  }

  const navWaBtn = document.getElementById('nav-wa-btn');
  if (navWaBtn) {
    navWaBtn.href = window.getWhatsAppEnquiryUrl(null, null, "Hello Smart Fit! I'm browsing your online boutique.");
  }

  const floatWaBtn = document.getElementById('floating-wa-btn');
  if (floatWaBtn) {
    floatWaBtn.href = window.getWhatsAppEnquiryUrl(null, null, "Hello Smart Fit! I have an enquiry about your surplus apparel.");
  }

  const promoWaBtn = document.getElementById('promo-wa-btn');
  if (promoWaBtn && promo) {
    promoWaBtn.href = window.getWhatsAppEnquiryUrl(null, null, promo.waMessage);
  }

  const storeCallBtn = document.getElementById('store-call-btn');
  if (storeCallBtn) storeCallBtn.href = `tel:${store.phone.replace(/\s+/g, '')}`;

  const storeWaBtn = document.getElementById('store-wa-btn');
  if (storeWaBtn) storeWaBtn.href = window.getWhatsAppEnquiryUrl(null, null, "Hello Smart Fit, I want to check store hours and directions to your Udumalpet shop.");

  const storeEmailBtn = document.getElementById('store-email-btn');
  if (storeEmailBtn) storeEmailBtn.href = `mailto:${store.email}`;
}
