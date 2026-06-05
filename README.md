# Selfie Store v2 — Dark Luxury Edition

موقع ضخم لسيلفي ستور — تصميم Dark Luxury، ألوان نيون، أنيميشن كامل، 8 ماركات + إكسسوارات.

---

## الملفات

| الملف | الوصف |
|-------|-------|
| `index.html` | هيكل الموقع الكامل — 8 أقسام + hero + footer |
| `style.css` | كل التصميم والأنيميشن والألوان |
| `app.js` | داتا المنتجات + كل الـ logic |

---

## إضافة/تعديل منتج

افتح `app.js` وابحث عن id القسم المطلوب مثلاً `apple-grid` وأضف object جديد:

```js
{ name:"iPhone 17 Pro", spec:"256GB | Titanium", badge:"new", img:"رابط الصورة" },
```

### قيم `badge`

| القيمة | المعنى |
|--------|--------|
| `new` | جديد زيرو |
| `used` | كسر زيرو |
| `acc` | إكسسوار |

---

## رقم الواتساب

أول سطر في `app.js`:
```js
const WA = "201030300355";
```

---

## نشر على GitHub Pages

```bash
git init
git add .
git commit -m "init: selfie store v2"
git branch -M main
git remote add origin https://github.com/mido3657tiger-ux/selfie-store.git
git push -u origin main
```
ثم: **Settings → Pages → Branch: main → Save**
