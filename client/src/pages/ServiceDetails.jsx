import { useState } from "react";
import { Link, useParams } from "wouter";
import { CustomSelect } from "../components/ui/CustomSelect";
export default function ServiceDetails() {
    const { id } = useParams();
    const serviceData = {
      1: {
        id: 1,
        type: "VENUE",
        name: "قاعة الماسة الملكية",
        category: "قاعة مميزة",
        location: "مدينة نصر، القاهرة (بجوار الاستاد)",
        rating: "4.9",
        reviewsCount: 120,
        description: "قاعة الماسة بتوفرلك تجربة فرح ملوكي، مساحة واسعة تسع حتى 500 فرد، ديكورات مودرن بأحدث صيحات 2026. عندنا فريق كامل لتنظيم الإضاءة والصوت عشان نضمن ليكي ليلة متتنسيش.",
        features: [
          "تكييف مركزي", "جراج خاص (Parking)", "غرفة للعروسة", "بوفيه مفتوح", "دي جي وساوند سيستم", "تصوير فيديو HD"
        ],
        price: "25,000 ج.م",
        manager: "إدارة القاعة",
        managerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=800&q=80"
        ]
      },
      3: {
        id: 3,
        type: "MAKEUP_ARTIST",
        name: "سارة أحمد",
        category: "ميك أب آرتيست",
        location: "المهندسين، الجيزة",
        rating: "5.0",
        reviewsCount: 85,
        description: "متخصصة في ميك أب العرايس والخطوبة بلمسة ناعمة تبرز جمالك الطبيعي. بستخدم أرقى البراندات العالمية عشان أضمن لك ثبات الميك أب طول اليوم.",
        features: [
          "ميك أب زفاف كامل", "تركيب رموش 3D", "تغطية كاملة للعيوب", "تجهيز البشرة قبل الميك أب", "تجربة بروفة قبل الفرح"
        ],
        makeupDetails: {
          packagePrice: 5000,
          brandsUsed: "MAC, Huda Beauty, NARS",
          hijabFriendly: true,
          yearsOfExperience: 5,
          instagramPortfolio: "https://instagram.com/sara_makeup"
        },
        price: "5,000 ج.م",
        manager: "سارة أحمد",
        managerImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1512496015851-a1fbbfc6f46c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1596462502278-27bf85033c5a?auto=format&fit=crop&w=800&q=80"
        ]
      },
      4: {
        id: 4,
        type: "MAKEUP_ARTIST",
        name: "منى محمد",
        category: "ميك أب آرتيست",
        location: "مدينة نصر، القاهرة",
        rating: "4.8",
        reviewsCount: 62,
        description: "خبرة طويلة في الميك أب السواريه والزفاف. بركز على إبراز ملامح الوجه بشكل ساحر ومناسب لكل مناسبة.",
        features: [
          "ميك أب سواريه", "تجهيز العروسة", "تركيب رموش", "تحديد ملامح (Contour)"
        ],
        makeupDetails: {
          packagePrice: 4000,
          brandsUsed: "Kryolan, Sephora, MAC",
          hijabFriendly: true,
          yearsOfExperience: 4,
          instagramPortfolio: "https://instagram.com/mona_makeup"
        },
        price: "4,000 ج.م",
        manager: "منى محمد",
        managerImage: "https://images.unsplash.com/photo-1512496015851-a1fbbfc6f46c?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1512496015851-a1fbbfc6f46c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
        ]
      },
      5: {
        id: 5,
        type: "MAKEUP_ARTIST",
        name: "أنس الخولي",
        category: "ميك أب آرتيست",
        location: "مصر الجديدة",
        rating: "4.9",
        reviewsCount: 110,
        description: "ميك أب آرتيست بخبرة سينمائية، بقدم لك طلة نجوم السينما في يوم فرحك باحترافية عالية.",
        features: [
          "ميك أب سينمائي", "ميك أب زفاف", "تغطية كاملة", "عناية بالبشرة"
        ],
        makeupDetails: {
          packagePrice: 6500,
          brandsUsed: "Estee Lauder, Dior, Chanel",
          hijabFriendly: false,
          yearsOfExperience: 8,
          instagramPortfolio: "https://instagram.com/anas_kholy"
        },
        price: "6,500 ج.م",
        manager: "أنس الخولي",
        managerImage: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1596462502278-27bf85033c5a?auto=format&fit=crop&w=800&q=80"
        ]
      },
      6: {
        id: 6,
        type: "MAKEUP_ARTIST",
        name: "فارس الدرملي",
        category: "ميك أب آرتيست",
        location: "المعادي، القاهرة",
        rating: "4.7",
        reviewsCount: 45,
        description: "متخصص في الميك أب الخفيف (No Makeup Look) والميك أب السينمائي للعروسة اللي بتدور على الاختلاف.",
        features: [
          "ميك أب خفيف", "تجهيز العروسة", "ستايلينج"
        ],
        makeupDetails: {
          packagePrice: 7000,
          brandsUsed: "Charlotte Tilbury, NARS",
          hijabFriendly: false,
          yearsOfExperience: 6,
          instagramPortfolio: "https://instagram.com/fares_makeup"
        },
        price: "7,000 ج.م",
        manager: "فارس الدرملي",
        managerImage: "https://images.unsplash.com/photo-1596462502278-27bf85033c5a?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1596462502278-27bf85033c5a?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
        ]
      },
      7: {
        id: 7,
        type: "MAKEUP_ARTIST",
        name: "هنا محمود",
        category: "ميك أب آرتيست",
        location: "التجمع الخامس",
        rating: "5.0",
        reviewsCount: 95,
        description: "أفضل ميك أب آرتيست للعرايس المحجبات. بنسق لك لفة طرحتك مع الميك أب عشان تكوني ملكة في ليلتك.",
        features: [
          "ميك أب محجبات", "لف طرح", "ميك أب زفاف", "تجهيز كامل"
        ],
        makeupDetails: {
          packagePrice: 8500,
          brandsUsed: "Huda Beauty, MAC, Fenty",
          hijabFriendly: true,
          yearsOfExperience: 7,
          instagramPortfolio: "https://instagram.com/hana_makeup"
        },
        price: "8,500 ج.م",
        manager: "هنا محمود",
        managerImage: "https://images.unsplash.com/photo-1512496015851-a1fbbfc6f46c?auto=format&fit=crop&w=150&q=60",
        images: [
          "https://images.unsplash.com/photo-1512496015851-a1fbbfc6f46c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80"
        ]
      }
    };

    // Default to a venue if not found, or id 3 for testing makeup artist
    const service = serviceData[id] || serviceData[1];
    const images = service.images;

    const [mainImage, setMainImage] = useState(images[0]);
    const [animateImage, setAnimateImage] = useState(false);
    const handleImageChange = (img) => {
        setAnimateImage(true);
        setTimeout(() => {
            setMainImage(img);
            setAnimateImage(false);
        }, 150);
    };
    return (<>
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#8c71af] transition">الرئيسية</Link> <span>/</span>
          <Link href="/services" className="hover:text-[#8c71af] transition">الخدمات</Link> <span>/</span>
          <span className="text-gray-800 font-bold">{service.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Details Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="h-[400px] overflow-hidden rounded-xl mb-4 relative group">
                <img src={mainImage} className={`w-full h-full object-cover transition-opacity duration-300 ${animateImage ? 'opacity-50' : 'opacity-100'}`} alt={service.name}/>
                <span className="absolute top-4 right-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">{service.category}</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {images.map((img, idx) => (<img key={idx} onClick={() => handleImageChange(img)} src={img} className={`w-24 h-24 rounded-lg object-cover cursor-pointer border-2 transition-all duration-200 ${mainImage === img ? ' opacity-100' : 'border-transparent opacity-70 hover:opacity-100 hover:'}`} alt="Thumbnail"/>))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{service.name}</h1>
                  <p className="text-gray-500 flex items-center gap-2">📍 {service.location}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex text-yellow-500 text-lg mb-1">★★★★★</div>
                  <span className="text-sm text-gray-400 font-bold">{service.rating} ({service.reviewsCount} تقييم)</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-6"></div>

              {service.type === 'MAKEUP_ARTIST' && service.makeupDetails && (
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex flex-col items-center text-center">
                    <span className="text-2xl mb-2">💄</span>
                    <span className="text-sm text-gray-500 mb-1">البراندات المتاحة</span>
                    <span className="font-bold text-gray-800 text-sm truncate w-full" title={service.makeupDetails.brandsUsed}>{service.makeupDetails.brandsUsed}</span>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex flex-col items-center text-center">
                    <span className="text-2xl mb-2">⭐</span>
                    <span className="text-sm text-gray-500 mb-1">سنوات الخبرة</span>
                    <span className="font-bold text-gray-800">{service.makeupDetails.yearsOfExperience}+ سنوات</span>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex flex-col items-center text-center">
                    <span className="text-2xl mb-2">🧕</span>
                    <span className="text-sm text-gray-500 mb-1">للمحجبات</span>
                    <span className="font-bold text-gray-800">{service.makeupDetails.hijabFriendly ? 'متاح حجاب فري' : 'غير متاح'}</span>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 flex flex-col items-center text-center justify-center">
                    <a href={service.makeupDetails.instagramPortfolio} target="_blank" rel="noreferrer" className="flex flex-col items-center text-[#8c71af] hover:opacity-80 transition">
                      <span className="text-2xl mb-2">📸</span>
                      <span className="font-bold text-sm">أعمال سابقة</span>
                    </a>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 mb-4">عن المُقدم</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">الخدمات والمميزات</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-600">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">✅ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">آراء العرايس (3)</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-pink-50 rounded-full flex items-center justify-center font-bold text-[#8c71af]">س</div>
                  <div>
                    <h4 className="font-bold text-gray-800">سارة أحمد</h4>
                    <div className="text-yellow-500 text-xs mb-1">★★★★★</div>
                    <p className="text-gray-600 text-sm">القاعة تحفة والتعامل قمة في الذوق، بجد شكراً ليكم.</p>
                  </div>
                </div>
                <hr className="border-gray-100"/>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">م</div>
                  <div>
                    <h4 className="font-bold text-gray-800">منى زكي</h4>
                    <div className="text-yellow-500 text-xs mb-1">★★★★☆</div>
                    <p className="text-gray-600 text-sm">المكان جميل بس التكييف كان عالي شوية، غير كده كل حاجة تمام.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/20 sticky top-24">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-gray-400 text-sm block">سعر الباقة يبدأ من</span>
                  <span className="text-3xl font-black text-gradient-primary">{service.price}</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">تاريخ الفرح</label>
                  <CustomSelect 
                    defaultValue="خطوبة"
                    options={["خطوبة", "عقد قران", "زفاف"]}
                    className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8c71af] text-gray-700 font-bold hover:border-[#8c71af] transition"
                  />
                </div>
                
                {service.type !== 'MAKEUP_ARTIST' && (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">عدد المدعوين</label>
                    <CustomSelect 
                      defaultValue="أقل من 100"
                      options={["أقل من 100", "100 - 300 شخص", "300 - 500 شخص", "أكثر من 500 شخص"]}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8c71af] text-gray-700 font-bold hover:border-[#8c71af] transition"
                    />
                  </div>
                )}

                <Link href="/checkout">
                  <button type="button" className="mt-4 w-full bg-gradient-primary text-white py-4 rounded-xl font-bold shadow-md hover:opacity-90 hover:shadow-lg transition transform hover:-translate-y-1 flex justify-center items-center gap-2 text-lg">
                    <span>📅</span> احجز الميعاد
                  </button>
                </Link>

                <button type="button" className="w-full bg-white border-2 border-border/30 text-[#8c71af] py-3 rounded-xl font-bold hover:bg-[#8c71af]/5 transition flex justify-center items-center gap-2">
                  <span>💬</span> شات مع المورد
                </button>
              </form>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-xs text-gray-400 mb-2">هذا المورد موثوق وتم التحقق منه ✅</p>
                <div className="flex items-center justify-center gap-3">
                  <img src={service.managerImage} className="w-10 h-10 rounded-full object-cover" alt="Manager"/>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">{service.manager}</p>
                    <p className="text-xs text-gray-500">متواجد للرد السريع</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar items */}
        {service.type !== 'MAKEUP_ARTIST' && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">ممكن يعجبك كمان</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services/10" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition block">
                <img src="https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=500&q=60" className="h-40 w-full object-cover" alt="Room"/>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">قاعة اللؤلؤة</h3>
                  <p className="text-gradient-primary font-bold text-sm">18,000 ج.م</p>
                </div>
              </Link>
              <Link href="/services/11" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition block">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=60" className="h-40 w-full object-cover" alt="Open Air"/>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">فيلا الأفراح (Open Air)</h3>
                  <p className="text-gradient-primary font-bold text-sm">30,000 ج.م</p>
                </div>
              </Link>
              <Link href="/services/12" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition block">
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=500&q=60" className="h-40 w-full object-cover" alt="Hall"/>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">قاعة الفيروز</h3>
                  <p className="text-gradient-primary font-bold text-sm">15,000 ج.م</p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>);
}
