<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,20&height=200&section=header&text=Selfie%20Store&fontSize=60&fontColor=fff&fontAlignY=38&desc=سيلفي%20ستور%20·%20المنصورة&descAlignY=58&descSize=20&animation=fadeIn" width="100%"/>

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](.)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](.)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](.)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/201030300355)

<br/>

> **Dark Luxury** mobile store website — 8 brands · 80+ models · Full animations · WhatsApp booking

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-a855f7?style=for-the-badge)](https://mido3657tiger-ux.github.io/selfie-store)

</div>

---

## ✨ Features

```
🎨  Dark Luxury design  —  neon purple / blue / cyan palette
🌊  Scroll reveal animations on every element
🖱️  Cursor glow that follows the mouse
📺  Auto-scrolling ticker with all device names
🔢  Count-up stats section (500+ devices · 1200+ customers)
📱  Fully responsive — mobile-first hamburger menu
💬  One-click WhatsApp booking with pre-filled message
🏷️  Badge system  —  جديد زيرو / كسر زيرو / إكسسوار
```

---

## 📁 File Structure

```
selfie-store/
│
├── index.html      ← Full site structure (8 sections + hero + footer)
├── style.css       ← All design, animations, colors, responsive
├── app.js          ← Product data array + all JS logic
└── README.md
```

---

## 📦 Brands & Sections

| # | Brand | Models |
|---|-------|--------|
| 1 | 🍎 Apple iPhone | 16 Pro Max · 16 Pro · 16 Plus · 15 series · 14 series · 13 series |
| 2 | 📱 Samsung Galaxy | S25 Ultra · Z Fold 6 · Z Flip 6 · A series |
| 3 | ⚡ Xiaomi / Redmi / POCO | 15 Ultra · 14T Pro · Note 14 Pro+ · POCO F6 |
| 4 | 🔵 OPPO | Find X8 Pro · Reno 13 Pro · A series |
| 5 | 🟡 Vivo | X200 Ultra · V40 Pro · Y series |
| 6 | 🟠 Realme | GT 7 Pro · GT 6T · 13 Pro+ · C series |
| 7 | 🌈 Google Pixel | 9 Pro XL · 9 Pro Fold · 8 Pro · 8a |
| 8 | 🔴 OnePlus | 13 · 13R · Nord 4 · Nord CE4 |
| + | 🎧 Accessories | AirPods · Galaxy Buds · Apple Watch · Chargers |

---

## ⚙️ Edit Products

Open `app.js` → find the brand array → add your device:

```js
{ 
  name:  "iPhone 17 Pro",
  spec:  "256GB | Titanium White",
  badge: "new",          // "new" | "used" | "acc"
  img:   "https://..."   // direct image URL
},
```

### Badge values

| Value | Label |
|-------|-------|
| `new` | جديد زيرو |
| `used` | كسر زيرو |
| `acc` | إكسسوار |

---

## 📲 WhatsApp Number

Top of `app.js`:

```js
const WA = "201030300355";   // ← change here only
```

---

## 🚀 Deploy to GitHub Pages

```bash
# 1. Init repo
git init
git add .
git commit -m "🚀 init: selfie store"

# 2. Push
git branch -M main
git remote add origin https://github.com/mido3657tiger-ux/selfie-store.git
git push -u origin main
```

Then on GitHub:
> **Settings → Pages → Branch: `main` → `/root` → Save**

Your site will be live at:
```
https://mido3657tiger-ux.github.io/selfie-store
```

---

## 📍 Store Info

```
🏪  Selfie Store — سيلفي ستور
👤  إدارة أبو عبد الله
📍  شارع العباسي · المنصورة · مصر
📞  01030300355
💬  https://wa.me/201030300355
```

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,12,20&height=100&section=footer&animation=fadeIn" width="100%"/>

**Built with ❤️ for Selfie Store · المنصورة**

</div>
