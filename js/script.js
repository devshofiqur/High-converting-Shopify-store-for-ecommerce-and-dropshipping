/* ============================================
   LUXEDROP — script.js
============================================ */

/* ---- PRODUCTS DATA ---- */
const products = [
  {
    id: 1, category: "beauty",
    cat_label: "Beauty & Skincare",
    name: "Rose Gold Skincare Kit",
    price: "$54.99", old_price: "$89.99",
    rating: "4.9", reviews: "2.4k",
    tag: "hot", tag_label: "Hot",
    img: "https://m.media-amazon.com/images/I/71qzwxl35hL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 2, category: "electronics",
    cat_label: "Electronics",
    name: "Pro Wireless Earbuds",
    price: "$79.99", old_price: "$129.99",
    rating: "4.8", reviews: "1.8k",
    tag: "sale", tag_label: "Sale",
    img: "https://cdn.othoba.com/images/thumbs/0759508_m90-pro-tws-true-wireless-earbuds.jpeg"
  },
  {
    id: 3, category: "fashion",
    cat_label: "Fashion",
    name: "Minimalist Leather Bag",
    price: "$69.99", old_price: null,
    rating: "4.7", reviews: "987",
    tag: "new", tag_label: "New",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
  },
  {
    id: 4, category: "home",
    cat_label: "Home & Living",
    name: "Nordic Desk Lamp",
    price: "$44.99", old_price: "$64.99",
    rating: "4.6", reviews: "654",
    tag: "sale", tag_label: "Sale",
    img: "https://image.made-in-china.com/365f3j00ngshFWKaHQzY/Factory-Direct-Supplier-Nordic-Flexible-Wooden-Desk-Lighting-Iron-Table-Lamp-with-E27-Holder-EU-Us-UK-Plug-Options.webp"
  },
  {
    id: 5, category: "beauty",
    cat_label: "Beauty",
    name: "Vitamin C Serum Set",
    price: "$38.99", old_price: "$59.99",
    rating: "4.9", reviews: "3.1k",
    tag: "hot", tag_label: "Hot",
    img: "https://dorkaribd.com/public/uploads/all/Kk7QQBZJWpQR0gd17TSywriNWnoBIqUQmNS4HyU1.png"
  },
  {
    id: 6, category: "electronics",
    cat_label: "Electronics",
    name: "Smart Watch Series X",
    price: "$99.99", old_price: "$179.99",
    rating: "4.8", reviews: "2.2k",
    tag: "sale", tag_label: "Sale",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/1/480314891/YY/YB/IY/233467375/dt-watch-x-series-10-smartwatch-amoled-display.png"
  },
  {
    id: 7, category: "fashion",
    cat_label: "Fashion",
    name: "Oversized Linen Shirt",
    price: "$34.99", old_price: null,
    rating: "4.5", reviews: "445",
    tag: "new", tag_label: "New",
    img: "https://www.littlepeopleshop.eu/data/product/1114/3dpctj32qh.webp"
  },
  {
    id: 8, category: "home",
    cat_label: "Home & Living",
    name: "Aromatherapy Diffuser",
    price: "$29.99", old_price: "$49.99",
    rating: "4.7", reviews: "1.3k",
    tag: "sale", tag_label: "Sale",
    img: "https://us.neomwellbeing.com/cdn/shop/articles/benefits-of-diffusers.jpg?v=1715602521&width=1920"
  }
];

/* ---- RENDER PRODUCTS ---- */
function renderProducts(filter = "all") {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="product-card">
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          ${p.tag ? `<span class="product-tag tag-${p.tag}">${p.tag_label}</span>` : ""}
          <div class="product-actions">
            <button class="product-action-btn" title="Wishlist">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="wishlist" />
            </button>
            <button class="product-action-btn" title="Quick View">
              <img src="https://cdn-icons-png.flaticon.com/512/159/159604.png" alt="view" />
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${p.cat_label}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-rating">
            <span class="rating-stars">★★★★★</span>
            <span class="rating-count">${p.rating} (${p.reviews})</span>
          </div>
          <div class="product-footer">
            <div>
              <div class="product-price">${p.price}</div>
              ${p.old_price ? `<div class="product-price-old">${p.old_price}</div>` : ""}
            </div>
            <button class="product-cart-btn">+ Cart</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  /* Re-trigger AOS for new elements */
  observeAOS();
}

/* ---- FILTER TABS ---- */
document.querySelectorAll(".filter-tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.filter);
  });
});

/* ---- COUNTDOWN TIMER ---- */
function initCountdown() {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 8);
  endTime.setMinutes(endTime.getMinutes() + 34);
  endTime.setSeconds(endTime.getSeconds() + 21);

  function update() {
    const now = new Date();
    const diff = endTime - now;
    if (diff <= 0) {
      document.getElementById("cd-h").textContent = "00";
      document.getElementById("cd-m").textContent = "00";
      document.getElementById("cd-s").textContent = "00";
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const pad = n => String(n).padStart(2, "0");
    document.getElementById("cd-h").textContent = pad(h);
    document.getElementById("cd-m").textContent = pad(m);
    document.getElementById("cd-s").textContent = pad(s);
  }

  update();
  setInterval(update, 1000);
}

/* ---- SCROLL TO TOP ---- */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---- NAVBAR SCROLL EFFECT ---- */
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* ---- SMOOTH NAVBAR LINKS ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ---- SIMPLE AOS (Animate On Scroll) ---- */
function observeAOS() {
  const elements = document.querySelectorAll("[data-aos]:not(.aos-animate)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute("data-aos-delay") || 0);
        setTimeout(() => {
          el.classList.add("aos-animate");
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => observer.observe(el));
}

/* ---- CART BUTTON ANIMATION ---- */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-cart-btn") || e.target.classList.contains("deal-btn")) {
    const btn = e.target;
    const originalText = btn.textContent;
    btn.textContent = "Added!";
    btn.style.background = "#2E7D32";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "";
    }, 1200);

    /* Update cart badge */
    const badge = document.querySelector(".cart-badge");
    if (badge) {
      const current = parseInt(badge.textContent) || 0;
      badge.textContent = current + 1;
      badge.style.transform = "scale(1.4)";
      setTimeout(() => { badge.style.transform = ""; }, 300);
    }
  }
});

/* ---- NEWSLETTER SUBMIT ---- */
document.querySelector(".nl-btn")?.addEventListener("click", () => {
  const input = document.querySelector(".nl-input");
  if (!input) return;
  if (!input.value || !input.value.includes("@")) {
    input.style.borderColor = "#C62828";
    input.placeholder = "Please enter a valid email!";
    setTimeout(() => {
      input.style.borderColor = "";
      input.placeholder = "Enter your email address...";
    }, 2000);
    return;
  }
  const btn = document.querySelector(".nl-btn");
  btn.textContent = "Subscribed!";
  btn.style.background = "#2E7D32";
  input.value = "";
  setTimeout(() => {
    btn.textContent = "Subscribe";
    btn.style.background = "";
  }, 2500);
});

/* ---- INIT ---- */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initCountdown();
  observeAOS();

  /* Trigger hero content immediately */
  setTimeout(() => {
    document.querySelectorAll(".hero-content [data-aos], .hero-image-col [data-aos]").forEach(el => {
      el.classList.add("aos-animate");
    });
  }, 200);
});
