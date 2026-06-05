// ============================================================
//  SELFIE STORE — app.js
//  Edit any section's `models` array to add/remove phones
// ============================================================

const WA = "201030300355";

const buildWA = (name, spec) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(`مرحباً، أنا مهتم بـ ${name} — ${spec}\nهل متاح؟`)}`;

// ─────────────────────────────────────────────
//  BRANDS DATA
//  badge: "new" | "used" | "acc"
// ─────────────────────────────────────────────

const brands = [
  {
    id: "apple-grid",
    models: [
      { name:"iPhone 16 Pro Max", spec:"256GB | Titanium Black", badge:"new", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80" },
      { name:"iPhone 16 Pro", spec:"128GB | Desert Titanium", badge:"new", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80" },
      { name:"iPhone 16 Plus", spec:"256GB | Teal", badge:"new", img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80" },
      { name:"iPhone 16", spec:"128GB | Pink", badge:"new", img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80" },
      { name:"iPhone 15 Pro Max", spec:"512GB | Natural Titanium", badge:"new", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80" },
      { name:"iPhone 15 Pro", spec:"256GB | Blue Titanium", badge:"new", img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80" },
      { name:"iPhone 15", spec:"128GB | Yellow", badge:"new", img:"https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80" },
      { name:"iPhone 14 Pro Max", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80" },
      { name:"iPhone 14 Pro", spec:"128GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80" },
      { name:"iPhone 14", spec:"128GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80" },
      { name:"iPhone 13 Pro Max", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80" },
      { name:"iPhone 13", spec:"128GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80" },
    ]
  },
  {
    id: "samsung-grid",
    models: [
      { name:"Galaxy S25 Ultra", spec:"512GB | Titanium Silverblue", badge:"new", img:"https://images.unsplash.com/photo-1706721901477-60c06e1c1b62?w=400&q=80" },
      { name:"Galaxy S25+", spec:"256GB | Icy Blue", badge:"new", img:"https://images.unsplash.com/photo-1706721901477-60c06e1c1b62?w=400&q=80" },
      { name:"Galaxy S25", spec:"128GB | Navy", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy S24 Ultra", spec:"512GB | Titanium Gray", badge:"new", img:"https://images.unsplash.com/photo-1706721901477-60c06e1c1b62?w=400&q=80" },
      { name:"Galaxy S24+", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy S24 FE", spec:"256GB | Blue", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy Z Fold 6", spec:"256GB | Shadow", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Galaxy Z Flip 6", spec:"256GB | Crafted Black", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Galaxy A55", spec:"256GB | Awesome Iceblue", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy A35", spec:"128GB | Awesome Lilac", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy A25", spec:"128GB | Yellow", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
      { name:"Galaxy A15", spec:"128GB | Blue Black", badge:"new", img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80" },
    ]
  },
  {
    id: "xiaomi-grid",
    models: [
      { name:"Xiaomi 15 Ultra", spec:"512GB | Black", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Xiaomi 15 Pro", spec:"256GB | White", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Xiaomi 14 Ultra", spec:"512GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Xiaomi 14T Pro", spec:"256GB | Titanium Gray", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Redmi Note 14 Pro+", spec:"256GB | Midnight Black", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Redmi Note 14 Pro", spec:"128GB | Lavender Purple", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Redmi Note 13 Pro", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"POCO X7 Pro", spec:"256GB | Yellow", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"POCO F6 Pro", spec:"512GB | Black", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"POCO M6 Pro", spec:"256GB | Blue", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
    ]
  },
  {
    id: "oppo-grid",
    models: [
      { name:"OPPO Find X8 Pro", spec:"512GB | Space Black", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OPPO Find X8", spec:"256GB | Pearl White", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OPPO Find X7 Ultra", spec:"512GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OPPO Reno 13 Pro", spec:"256GB | Luminous Purple", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"OPPO Reno 13", spec:"128GB | Misty White", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"OPPO Reno 12 Pro", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"OPPO A3 Pro", spec:"128GB | Starlight White", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OPPO A60", spec:"128GB | Starry Black", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
    ]
  },
  {
    id: "vivo-grid",
    models: [
      { name:"Vivo X200 Ultra", spec:"512GB | Titanium Grey", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Vivo X200 Pro", spec:"256GB | Cosmos Black", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Vivo X200", spec:"256GB | Startrail Blue", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Vivo V40 Pro", spec:"256GB | Titanium Silver", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Vivo V40", spec:"128GB | Rose Gold", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Vivo Y200 GT", spec:"128GB | Cyber Orange", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Vivo Y100", spec:"128GB | Marble White", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
    ]
  },
  {
    id: "realme-grid",
    models: [
      { name:"Realme GT 7 Pro", spec:"512GB | Mars Red", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Realme GT 6T", spec:"256GB | Fluid Silver", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Realme 13 Pro+", spec:"256GB | Emerald Green", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Realme 13 Pro", spec:"128GB | Monet Purple", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Realme C67", spec:"128GB | Sunny Oasis", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"Realme C55", spec:"128GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
    ]
  },
  {
    id: "google-grid",
    models: [
      { name:"Google Pixel 9 Pro XL", spec:"256GB | Obsidian", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Google Pixel 9 Pro", spec:"128GB | Hazel", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Google Pixel 9", spec:"128GB | Wintergreen", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Google Pixel 9 Pro Fold", spec:"256GB | Obsidian", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Google Pixel 8 Pro", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
      { name:"Google Pixel 8a", spec:"128GB | Aloe", badge:"new", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80" },
    ]
  },
  {
    id: "oneplus-grid",
    models: [
      { name:"OnePlus 13", spec:"512GB | Midnight Ocean", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OnePlus 13R", spec:"256GB | Nebula Noir", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OnePlus 12", spec:"256GB | كسر زيرو", badge:"used", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OnePlus Nord 4", spec:"256GB | Mercurial Silver", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
      { name:"OnePlus Nord CE4", spec:"128GB | Celadon Marble", badge:"new", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80" },
    ]
  },
  {
    id: "acc-grid",
    models: [
      { name:"AirPods Pro 2", spec:"إكسسوار · USB-C", badge:"acc", img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80" },
      { name:"AirPods 4", spec:"إكسسوار · Active Noise Cancellation", badge:"acc", img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80" },
      { name:"Samsung Galaxy Buds3 Pro", spec:"إكسسوار · Silver", badge:"acc", img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
      { name:"Apple Watch Series 10", spec:"إكسسوار · 46mm GPS", badge:"acc", img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80" },
      { name:"Samsung Galaxy Watch 7", spec:"إكسسوار · 44mm", badge:"acc", img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80" },
      { name:"Xiaomi Watch S3", spec:"إكسسوار · AMOLED", badge:"acc", img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80" },
      { name:"Anker 140W GaN Charger", spec:"إكسسوار · PD 3.1", badge:"acc", img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80" },
      { name:"Baseus 65W Car Charger", spec:"إكسسوار · Dual Port", badge:"acc", img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80" },
      { name:"MagSafe Charger 25W", spec:"إكسسوار · iPhone 16 Ready", badge:"acc", img:"https://images.unsplash.com/photo-1601999009162-2459b9d61b1c?w=400&q=80" },
      { name:"Spigen Ultra Hybrid Case", spec:"إكسسوار · iPhone 16 Pro", badge:"acc", img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80" },
    ]
  }
];

// ─────────────────────────────────────────────
//  RENDER ALL GRIDS
// ─────────────────────────────────────────────
const badgeClass = { new:"badge-new", used:"badge-used", acc:"badge-acc" };
const badgeLabel = { new:"جديد زيرو", used:"كسر زيرو", acc:"إكسسوار" };

brands.forEach(({ id, models }) => {
  const container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = models.map((m, i) => `
    <div class="product-card reveal" style="animation-delay:${i * 0.06}s">
      <div class="card-img">
        <img src="${m.img}" alt="${m.name}" loading="lazy"/>
        <span class="card-badge ${badgeClass[m.badge]}">${badgeLabel[m.badge]}</span>
      </div>
      <div class="card-info">
        <h3 class="card-name">${m.name}</h3>
        <p class="card-spec">${m.spec}</p>
        <a href="${buildWA(m.name, m.spec)}" target="_blank" rel="noopener noreferrer" class="card-reserve">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.985l6.305-1.654A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.214-3.733.979.996-3.638-.234-.374A9.818 9.818 0 1112 21.818z"/></svg>
          احجز على واتساب
        </a>
      </div>
    </div>
  `).join("");

  // trigger reveal for newly created cards
  observeReveal(container.querySelectorAll(".product-card"));
});

// ─────────────────────────────────────────────
//  INTERSECTION OBSERVER — REVEAL
// ─────────────────────────────────────────────
function observeReveal(elements) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin:"0px 0px -40px 0px" });
  elements.forEach(el => io.observe(el));
}

observeReveal(document.querySelectorAll(".reveal:not(.product-card)"));

// ─────────────────────────────────────────────
//  NAVBAR SCROLL
// ─────────────────────────────────────────────
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", scrollY > 50);
});

// ─────────────────────────────────────────────
//  BURGER MENU
// ─────────────────────────────────────────────
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});

// ─────────────────────────────────────────────
//  CURSOR GLOW
// ─────────────────────────────────────────────
const glow = document.getElementById("cursorGlow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top  = e.clientY + "px";
});

// ─────────────────────────────────────────────
//  COUNT-UP STATS
// ─────────────────────────────────────────────
const statNums = document.querySelectorAll(".stat-num");
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count.toLocaleString("ar-EG");
      if (count >= target) clearInterval(timer);
    }, 24);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });

statNums.forEach(n => countIO.observe(n));

