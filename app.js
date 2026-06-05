// ============================================================
//  Selfie Store — Data & Logic
//  Edit products array below to add/remove/update devices
// ============================================================

const WHATSAPP_NUMBER = "201030300355";

const products = [
  // ── جديد زيرو ──────────────────────────────────────────────
  {
    id: 1,
    category: "new",
    name: "iPhone 15 Pro Max",
    storage: "256 GB",
    condition: "جديد زيرو",
    price: 62000,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
  },
  {
    id: 2,
    category: "new",
    name: "Samsung Galaxy S24 Ultra",
    storage: "512 GB",
    condition: "جديد زيرو",
    price: 55000,
    image: "https://images.unsplash.com/photo-1706721901477-60c06e1c1b62?w=400&q=80",
  },
  {
    id: 3,
    category: "new",
    name: "Xiaomi 14 Ultra",
    storage: "512 GB",
    condition: "جديد زيرو",
    price: 38000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
  },
  {
    id: 4,
    category: "new",
    name: "OPPO Find X7 Pro",
    storage: "256 GB",
    condition: "جديد زيرو",
    price: 32000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
  },

  // ── كسر زيرو ───────────────────────────────────────────────
  {
    id: 5,
    category: "used",
    name: "iPhone 14 Pro",
    storage: "128 GB",
    condition: "كسر زيرو",
    price: 38500,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80",
  },
  {
    id: 6,
    category: "used",
    name: "Samsung Galaxy S23",
    storage: "256 GB",
    condition: "كسر زيرو",
    price: 28000,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=80",
  },
  {
    id: 7,
    category: "used",
    name: "iPhone 13",
    storage: "128 GB",
    condition: "كسر زيرو",
    price: 24000,
    image: "https://images.unsplash.com/photo-1632633173522-47456de71b76?w=400&q=80",
  },
  {
    id: 8,
    category: "used",
    name: "Pixel 8 Pro",
    storage: "256 GB",
    condition: "كسر زيرو",
    price: 26000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
  },

  // ── إكسسوارات ──────────────────────────────────────────────
  {
    id: 9,
    category: "accessories",
    name: "AirPods Pro 2",
    storage: "—",
    condition: "إكسسوار",
    price: 8500,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 10,
    category: "accessories",
    name: "Samsung Galaxy Buds2 Pro",
    storage: "—",
    condition: "إكسسوار",
    price: 4200,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80",
  },
  {
    id: 11,
    category: "accessories",
    name: "Apple MagSafe Charger",
    storage: "—",
    condition: "إكسسوار",
    price: 1800,
    image: "https://images.unsplash.com/photo-1601999009162-2459b9d61b1c?w=400&q=80",
  },
  {
    id: 12,
    category: "accessories",
    name: "Anker 65W GaN Charger",
    storage: "—",
    condition: "إكسسوار",
    price: 950,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
  },
];

// ── Dark / Light Mode ──────────────────────────────────────
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
}

// ── Filter Logic ───────────────────────────────────────────
const filterButtons = document.querySelectorAll("[data-filter]");
const grid = document.getElementById("products-grid");

let activeFilter = "all";

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");
    renderProducts(activeFilter);
  });
});

// ── Render Products ────────────────────────────────────────
function renderProducts(filter = "all") {
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  grid.innerHTML = filtered
    .map(
      (p) => `
    <article class="product-card" data-id="${p.id}">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="condition-badge">${p.condition}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${p.name}</h3>
        <p class="card-storage">${p.storage}</p>
        <div class="card-footer">
          <span class="card-price">${p.price.toLocaleString("ar-EG")} جنيه</span>
          <a
            href="${buildWhatsAppLink(p)}"
            target="_blank"
            rel="noopener noreferrer"
            class="reserve-btn"
            aria-label="احجز ${p.name}"
          >احجز الآن</a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function buildWhatsAppLink(product) {
  const msg = encodeURIComponent(
    `مرحباً، أنا مهتم بـ ${product.name} — ${product.storage} — ${product.condition} بسعر ${product.price.toLocaleString("ar-EG")} جنيه.\nهل متاح؟`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

// ── Init ───────────────────────────────────────────────────
renderProducts();
