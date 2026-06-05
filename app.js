// الرقم الرسمي لـ سيلفي ستور - المنصورة (مربوط بكود مصر)
const WHATSAPP_NUMBER = "201030300355"; 

// قاعدة بيانات الهواتف المعروضة حالياً في محل سيلفي ستور
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "جديد زيرو",
        specs: "مساحة 256 جيجا | متوفر جميع الألوان | بطارية 100% ضمان محلي ودولي",
        price: "58,500 EGP",
        oldPrice: "63,000 EGP",
        badge: "🔥 الأعلى طلباً",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "كسر زيرو فئة أولى",
        specs: "نسخة 512 جيجا | رمادي تيتانيوم | بدون أي خدوش نهائياً بحالة الكرتونة",
        price: "45,900 EGP",
        oldPrice: "",
        badge: "حالة المصنع ✨",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Xiaomi 14 Ultra",
        category: "جديد زيرو",
        specs: "نسخة 512 جيجا | 16 جيجا رام | أقوى كاميرات في العالم براند لايكا",
        price: "41,000 EGP",
        oldPrice: "44,000 EGP",
        badge: "عشاق التصوير 📸",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "iPhone 13 Pro Max",
        category: "كسر زيرو",
        specs: "مساحة 256 جيجا | أزرق سييرا | نسبة البطارية 88% فرز أول بدون فتح",
        price: "34,000 EGP",
        oldPrice: "36,500 EGP",
        badge: "سعر لقطة 💎",
        image: "https://images.unsplash.com/photo-1639249413143-bf8096373b32?auto=format&fit=crop&w=600&q=80"
    }
];

// دالة بناء وعرض الكروت داخل الستور
function loadStoreProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = products.map(product => {
        // تجهيز نص الرسالة الاحترافية الموجهة لأبو عبد الله على الواتساب
        const messageText = `أهلاً سيلفي ستور المنصورة، حابب بعد إذنك أحجز جهاز [ ${product.name} ] المعروض على الموقع بسعر ${product.price}. يرجى تأكيد توافر الجهاز في فرع العباسي لحين الحضور.`;
        const encodedMessage = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        return `
            <div class="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden hover:shadow-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1">
                <div>
                    <div class="overflow-hidden bg-slate-950 h-64 md:h-72 flex items-center justify-center relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100">
                        ${product.badge ? `<span class="absolute top-4 right-4 text-[11px] font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-3 py-1 rounded-full shadow-lg border border-amber-400/20">${product.badge}</span>` : ''}
                    </div>
                    <div class="p-6">
                        <span class="text-xs font-black text-amber-500 tracking-wider uppercase bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">${product.category}</span>
                        <h4 class="text-xl md:text-2xl font-black text-white mt-4 group-hover:text-amber-400 transition-colors">${product.name}</h4>
                        <p class="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed h-12 overflow-hidden">${product.specs}</p>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <div class="flex justify-between items-center pt-4 border-t border-white/5 mt-2">
                        <div>
                            ${product.oldPrice ? `<p class="text-xs text-gray-500 line-through font-bold">${product.oldPrice}</p>` : ''}
                            <p class="text-xl md:text-2xl font-black text-amber-400 tracking-tight">${product.price}</p>
                        </div>
                        <a href="${whatsappUrl}" target="_blank" class="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-5 py-3 rounded-2xl font-black transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/20 active:scale-95 text-sm">
                            <i class="fab fa-whatsapp text-lg"></i> احجز الآن
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// رندر للمنتجات أول ما الصفحة تحمل
document.addEventListener('DOMContentLoaded', loadStoreProducts);
