import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";

const stats = [
  { value: "+25", label: "مشروعاً تم إطلاقه باحتراف" },
  { value: "+12", label: "تطبيقاً صُمم لهوية قوية" },
  { value: "99%", label: "تركيز على الجودة والانطباع" }
];

const highlights = [
  {
    icon: "◉",
    title: "تطبيقات موبايل بمستوى فاخر",
    text: "نبني تطبيقات أنيقة وسريعة وواضحة، مع تجربة استخدام تترك انطباعاً قوياً وتخدم نمو المشروع فعلياً."
  },
  {
    icon: "▣",
    title: "مواقع ومنصات تعكس الثقة",
    text: "من صفحات الشركات إلى المنصات ولوحات التحكم، نصمم واجهات مرتبة ومدروسة تعطي حضوراً أقوى على الإنترنت."
  },
  {
    icon: "✦",
    title: "تنفيذ متكامل أونلاين",
    text: "نعمل بالكامل عبر الإنترنت مع مرونة عالية في التواصل، وتسليم منظم يجعل التعاون أسهل وأسرع."
  }
];

const spotlight = [
  "واجهة وهوية رقمية متقنة",
  "تركيز واضح على تجربة التطبيق",
  "تعديل الأعمال يدوياً من الكود",
  "مظهر احترافي يرفع قيمة العلامة"
];

export default function HomePage() {
  const appProjects = portfolioItems.filter((item) => item.category === "app");
  const webProjects = portfolioItems.filter((item) => item.category === "web");

  return (
    <main className="site-shell">
      <section className="top-bar">
        <div className="brand-block">
          <span className="brand-mark">NT</span>
          <div>
            <strong>Napol Tg</strong>
            <p>شركة متخصصة بتطوير التطبيقات والمواقع</p>
          </div>
        </div>

        <nav className="top-nav">
          <a href="#services">الخدمات</a>
          <a href="#apps">التطبيقات</a>
          <a href="#web-projects">الويب</a>
          <a href="#contact">التواصل</a>
        </nav>
      </section>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-badge-row">
            <span className="mini-chip solid">تصميم وتنفيذ بهوية احترافية</span>
            <span className="mini-chip">تركيزنا الأكبر على التطبيقات</span>
          </div>

          <span className="eyebrow">Napol Tg</span>
          <h1>نصمم تطبيقات ومواقع تعطي مشروعك حضوراً أقوى وانطباعاً أكثر احترافية.</h1>
          <p>
            Napol Tg تبني حلولاً رقمية راقية للشركات التي تريد أن تظهر بصورة
            قوية وواضحة على الإنترنت. كل الأعمال الآن تُدار يدوياً من الكود
            حتى يبقى المشروع خفيفاً وسهل التخصيص.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#apps">
              استعرض أعمالنا
            </a>
            <a className="secondary-button" href="#contact">
              ابدأ مشروعك
            </a>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-device">
            <div className="hero-device-screen">
              <div className="screen-orb" />
              <span className="mini-chip">تجربة رقمية حديثة</span>
              <h2>نوازن بين الفخامة، الوضوح، وسهولة الاستخدام.</h2>
              <p>
                كل مشروع يُبنى بهدف واضح: واجهة جميلة، تجربة مريحة، وانطباع
                شركة واثقة وحديثة.
              </p>

              <div className="signal-stack">
                <span>واجهات تطبيقات</span>
                <span>أنظمة إدارة</span>
                <span>مواقع عالية الأداء</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-card floating-top">
            <strong>Mobile-first</strong>
            <span>تصميم يبرز التطبيقات أولاً</span>
          </div>

          <div className="hero-floating-card floating-bottom">
            <strong>Premium UI</strong>
            <span>تفاصيل مصقولة وانطباع أقوى</span>
          </div>
        </div>
      </section>

      <section className="section-block spotlight-strip">
        <div className="spotlight-grid">
          {spotlight.map((item) => (
            <div className="spotlight-item" key={item}>
              <span className="spotlight-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block" id="services">
        <div className="section-heading">
          <span className="eyebrow">ماذا نقدم</span>
          <h2>نصنع واجهات مرتبة وقوية مدعومة بتنفيذ تقني نظيف</h2>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <div className="feature-icon" aria-hidden="true">
                <span>{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="apps">
        <div className="section-heading">
          <span className="eyebrow">مشاريع التطبيقات</span>
          <h2>قسم مستقل لأعمال التطبيقات  </h2>
        </div>

        <PortfolioGrid
          items={appProjects}
          emptyTitle="لا توجد تطبيقات مضافة حالياً"
          emptyText="أضف مشروع تطبيق يدوياً داخل ملف البيانات وسيظهر هنا."
        />
      </section>

      <section className="section-block luxe-strip" id="web-projects">
        <div className="section-heading">
          <span className="eyebrow">مشاريع الويب</span>
          <h2>قسم مستقل لأعمال المواقع والمنصات ولوحات التحكم</h2>
        </div>

        <PortfolioGrid
          items={webProjects}
          emptyTitle="لا توجد مشاريع ويب مضافة حالياً"
          emptyText="أضف مشروع ويب يدوياً داخل ملف البيانات وسيظهر هنا."
        />
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <span className="eyebrow">تواصل معنا</span>
          <h2>إذا تريد موقعاً أو تطبيقاً يبان بمستوى احترافي فعلاً، نكدر نبدأ من هنا</h2>
          <p>
            نعمل عبر الإنترنت ونساعد الشركات وأصحاب المشاريع على إطلاق منتجات
            رقمية أنيقة وعملية، مع تصميم يلفت وتنفيذ مرتب يسهل تطويره لاحقاً.
          </p>

          <div className="contact-list">
            <a href="tel:+9647712442505">الهاتف: 9647712442505</a>
            <span>الموقع: نعمل أونلاين في كل مكان</span>
          </div>
        </div>
      </section>
    </main>
  );
}

