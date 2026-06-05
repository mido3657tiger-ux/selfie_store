# Selfie Store — سيلفي ستور

موقع احترافي لمحل موبايلات بتصميم Minimalist أبيض/أسود مع دعم Light & Dark mode.

---

## الملفات

| الملف | الوصف |
|-------|-------|
| `index.html` | الهيكل الكامل للموقع |
| `style.css` | كل الأنماط + متغيرات Light/Dark |
| `app.js` | داتا المنتجات + منطق الفلترة + تبديل الثيم |

---

## إضافة أو تعديل منتج

افتح `app.js` وعدّل على مصفوفة `products`:

```js
{
  id: 13,                          // رقم فريد
  category: "new",                 // new | used | accessories
  name: "iPhone 16 Pro",
  storage: "256 GB",
  condition: "جديد زيرو",          // نص الـ badge
  price: 68000,                    // بالجنيه بدون فواصل
  image: "https://...",            // رابط صورة مباشر
},
```

### قيم `category`

| القيمة | الفلتر |
|--------|--------|
| `new` | جديد زيرو |
| `used` | كسر زيرو |
| `accessories` | إكسسوارات |

---

## رقم الواتساب

في أعلى `app.js`:

```js
const WHATSAPP_NUMBER = "201030300355";
```

غيّره مباشرةً إذا تغيّر الرقم.

---

## النشر على GitHub Pages

```bash
git init
git add .
git commit -m "init: selfie store"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

ثم من إعدادات الـ repo:
**Settings → Pages → Branch: main → / (root) → Save**

---

## التقنيات

- HTML5 / CSS3 (CSS Variables)
- Tailwind CSS v3 (CDN)
- Vanilla JavaScript (ES6+)
- Google Fonts: DM Sans + Noto Kufi Arabic
- WhatsApp API (`wa.me`)
