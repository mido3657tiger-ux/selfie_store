// الرقم المعتمد لـ سيلفي ستور المنصورة
const STORE_WHATSAPP = "201030300355";

// قاعدة بيانات الماركات والبراندات المدعومة في الستور
const brands = [
    { id: "all", name: "كل الماركات", icon: "fa-border-all" },
    { id: "apple", name: "Apple", icon: "fa-apple" },
    { id: "samsung", name: "Samsung", icon: "fa-mobile-screen" },
    { id: "xiaomi", name: "Xiaomi / POCO", icon: "fa-robot" },
    { id: "realme", name: "Realme / Oppo", icon: "fa-bolt" }
];

// داتا الهواتف الذكية المعروضة حالياً داخل صالة عرض سيلفي ستور
const products = [
    {
        id: 1,
        brand: "apple",
        name: "iPhone 15 Pro Max",
        category: "جديد زيرو (كرتونة مقفولة)",
        specs: "مساحة 256 جيجا | متوفر تيتانيوم طبيعي وأسود | بطارية 100% ضمان محلي ودولي لمدة سنة",
        price: "58,500 EGP",
        oldPrice: "63,000 EGP",
        badge: "🔥 الأكثر مبيعاً في شارع العباسي",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        brand: "samsung",
        name: "Samsung Galaxy S24 Ultra",
        category: "كسر زيرو فئة أولى دولي",
        specs: "نسخة 512 جيجا | رمادي تيتانيوم | بدون أي خدوش أو علامات نهائياً بحالة الكرتونة الأصلية",
        price: "45,900 EGP",
        oldPrice: "",
        badge: "حالة المصنع ✨",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        brand: "xiaomi",
        name: "Xiaomi 14 Ultra 5G",
        category: "جديد زيرو متبرشم",
        specs: "نسخة 512 جيجا | 16 جيجا رام كاش | أقوى كاميرات احترافية في العالم بالتعاون مع Leica",
        price: "41,000 EGP",
        oldPrice: "44,000 EGP",
        badge: "ملك التصوير الفخم 📸",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        brand: "apple",
        name: "iPhone 13 Pro Max",
        category: "كسر زيرو كسر زيرو",
        specs: "مساحة 256 جيجا | أزرق سييرا جذاب | نسبة صحة البطارية 88% فرز أول بدون أي فك أو تصليح سابق",
        price: "34,000 EGP",
        oldPrice: "36,500 EGP",
        badge: "سعر لقطة للمبدعين 💎",
        image: "https://images.unsplash.com/photo-1639249413143-bf8096373b32?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        brand: "realme",
        name: "Realme GT 5 Pro",
        category: "جديد زيرو علبة كاملة",
        specs: "مساحة 512 جيجا | 16 جيجا رام | معالج Snapdragon 8 Gen 3 الخارق وشاحن 100 وات طلقة",
        price: "28,500 EGP",
        oldPrice: "30,000 EGP",
        badge: "وحش الجيمنج والألعاب 🎮",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        brand: "samsung",
        name: "Samsung Galaxy A55 5G",
        category: "جديد زيرو ضمان محلي",
        specs: "مساحة 256 جيجا | 8 جيجا رام | لون كحلي مميز - الفئة المتوسطة الأكثر فخامة وحماية ضد المياه",
        price: "17,200 EGP",
        oldPrice: "18,500 EGP",
        badge: "قيمة ممتازة مقابل السعر",
        image: "https://images.unsplash.com/photo-1565630916779-e303be97b6f5?auto=format&fit=crop&w=600&q=80"
    }
];

// دالة بناء فلاتر البراندات بالأعلى
function renderBrandFilters() {
    const container = document.getElementById('brands-filter-container');
    if (!container) return;

    container.innerHTML = brands.map((brand, index) => `
        <button onclick="filterByBrand('${brand.id}', this)" class="brand-btn px-6 py-3.5 bg-[#0b0f19] border border-white/5 hover:border-amber-500/30 text-sm font-black rounded-2xl flex items-center gap-2.5 transition-all duration-300 transform active:scale-95 ${index === 0 ? 'border-amber-500 bg-amber-500/10 text-amber-400' : 'text-gray-400'}">
            <i class="fas ${brand.icon} text-amber-500 text-base"></i>
            <span>${brand.name}</span>
        </button>
    `).join('');
}

// دالة رندر وعرض كروت الأجهزة في الـ Grid
function renderStoreProducts(filteredProducts = products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="col-span-1 md:col-span-3 text-center py-12 text-gray-500 font-bold">
                <i class="fas fa-box-open text-5xl mb-4 block text-amber-500/30"></i>
                عفواً، لا توجد أجهزة متوفرة حالياً لهذا البراند في فرع العباسي. تابعنا لاحقاً!
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredProducts.map(product => {
        const orderMessage = `أهلاً سيلفي ستور المنصورة، حابب أحجز جهاز [ ${product.name} ] المعروض على موقع الستور بسعر ${product.price}. يرجى تأكيد توافر الجهاز في فرع شارع العباسي لحين الحضور للمحل.`;
        const whatsappUrl = `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(orderMessage)}`;

        return `
            <div class="bg-[#0b0f19] rounded-[30px] shadow-2xl overflow-hidden hover:shadow-amber-500/10 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group flex flex-col justify-between transform hover:-translate-y-1.5 animate__animated animate__fadeIn">
                <div>
                    <div class="overflow-hidden bg-[#030712] h-64 md:h-72 flex items-center justify-center relative">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100">
                        ${product.badge ? `<span class="absolute top-4 right-4 text-[10px] font-black bg-gradient-to-r from-amber-500 to-yellow-400 text-black px-3.5 py-1.5 rounded-full shadow-lg tracking-wide">${product.badge}</span>` : ''}
                    </div>
                    <div class="p-6">
                        <span class="text-[11px] font-black text-amber-400 uppercase bg-amber-500/5 px-3 py-1 rounded-lg border border-amber-500/10">${product.category}</span>
                        <h4 class="text-2xl font-black text-white mt-4 group-hover:text-amber-400 transition-colors tracking-tight">${product.name}</h4>
                        <p class="text-gray-400 text-xs md:text-sm mt-2.5 leading-relaxed h-12 overflow-hidden text-ellipsis">${product.specs}</p>
                    </div>
                </div>
                <div class="p-6 pt-0">
                    <div class="flex justify-between items-center pt-5 border-t border-white/5 mt-3">
                        <div>
                            ${product.oldPrice ? `<p class="text-xs text-gray-500 line-through font-bold mb-0.5">${product.oldPrice}</p>` : ''}
                            <p class="text-xl md:text-2xl font-black text-amber-400 tracking-tight">${product.price}</p>
                        </div>
                        <a href="${whatsappUrl}" target="_blank" class="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-3.5 rounded-2xl font-black transition-all duration-300 flex items-center gap-2 shadow-xl shadow-green-600/10 active:scale-95 text-sm">
                            <i class="fab fa-whatsapp text-xl"></i> احجز فوراً
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// دالة تشغيل فلتر الماركات
function filterByBrand(brandId, buttonElement) {
    // إعادة تعيين كلاسات الأزرار
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.classList.remove('border-amber-500', 'bg-amber-500/10', 'text-amber-400');
        btn.classList.add('text-gray-400');
    });
    // تفعيل الزر النشط
    buttonElement.classList.remove('text-gray-400');
    buttonElement.classList.add('border-amber-500', 'bg-amber-500/10', 'text-amber-400');

    if (brandId === "all") {
        renderStoreProducts(products);
    } else {
        const filtered = products.filter(p => p.brand === brandId);
        renderStoreProducts(filtered);
    }
}

// معالج فورم نظام البدل والاستبدال الفوري
function sendTradeInRequest(event) {
    event.preventDefault();
    const oldPhone = document.getElementById('oldPhoneName').value;
    const condition = document.getElementById('phoneCondition').value;
    const targetPhone = document.getElementById('targetPhoneName').value;

    const message = `أهلاً أبو عبد الله (سيلفي ستور المنصورة)، حابب أعمل طلب استبدال وبدل لتليفوني عبر موقع الستور.\n\n📱 جهازي الحالي: ${oldPhone}\n🛠 حالته الفنية: ${condition}\n🎯 الجهاز المطلوب بدلاً منه: ${targetPhone}\n\nيرجى إعطائي التقييم المبدئي للسعر والفرق الحضور للمحل فورا!`;
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
}

// معالج فورم حجز ميعاد الصيانة الفنية الفورية
function sendMaintenanceRequest(event) {
    event.preventDefault();
    const phoneModel = document.getElementById('repairPhone').value;
    const problem = document.getElementById('repairProblem').value;

    const message = `أهلاً سيلفي ستور (قسم الصيانة)، حابب أحجز دور صيانة لجهازي عبر الموقع الإلكتروني:\n\n📱 موديل الجهاز: ${phoneModel}\n💥 تفاصيل العطل: ${problem}\n\nيرجى تحديد ميعاد فوري وتأكيد التكلفة المبدئية لحين الحضور لفرع شارع العباسي.`;
    window.open(`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
}

// تفعيل الدوال فور جهوزية الصفحة كاملة
document.addEventListener('DOMContentLoaded', () => {
    renderBrandFilters();
    renderStoreProducts();
});
