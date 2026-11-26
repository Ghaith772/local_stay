import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CategoryCard } from "@/components/CategoryCard";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { categories } from "@/lib/categories";
import { aboutLink, verifyLink } from "@/lib/nav";

const stayLengths = ["يومي", "أسبوعي", "شهري", "سنوي"];

const heroTiles = [
  { className: "hero-tile-1", title: "شقق ومنازل", text: "داخل المدن" },
  { className: "hero-tile-2", title: "مزارع", text: "بعيداً عن الزحام" },
  { className: "hero-tile-3", title: "شاليهات", text: "لعطلة هادئة" },
];

const verificationSteps = [
  {
    number: "١",
    title: "ارفع صورة السجل التجاري",
    text: "أرسل نسخة واضحة من سجلك التجاري من حسابك على المنصة.",
  },
  {
    number: "٢",
    title: "مراجعة الإدارة",
    text: "يراجع فريق المنصة المستند ويتأكد من صحته.",
  },
  {
    number: "٣",
    title: "احصل على شارة موثّق",
    text: "تظهر الشارة على عقاراتك لتزيد ثقة المستأجرين بك.",
  },
];

export default function HomePage() {
  return (
    <div className="home">
      <Section>
        <div className="hero">
          <div className="hero-orb hero-orb-a" aria-hidden="true" />
          <div className="hero-orb hero-orb-b" aria-hidden="true" />

          <div className="hero-copy">
            <Badge className="reveal">منصة تأجير العقارات داخل سوريا</Badge>
            <h1 className="reveal reveal-1 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
              اعثر على مكان إقامتك في سوريا بسهولة وثقة
            </h1>
            <p className="reveal reveal-2 max-w-2xl leading-8 sm:text-lg">
              شقق ومنازل ومزارع وشاليهات للإيجار اليومي والأسبوعي والشهري والسنوي، للمقيمين والمغتربين والسياح.
            </p>
            <ul className="hero-pills reveal reveal-3">
              {stayLengths.map((length) => (
                <li key={length} className="hero-pill">
                  {length}
                </li>
              ))}
            </ul>
            <div className="reveal reveal-4 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="#categories">تصفّح الأقسام</Button>
              <Button href={aboutLink.href} variant="outline">
                تعرّف على المنصة
              </Button>
            </div>
          </div>

          <div className="hero-stage" aria-hidden="true">
            {heroTiles.map((tile) => (
              <div key={tile.title} className={`hero-tile ${tile.className}`}>
                <span className="hero-tile-icon">
                  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />
                  </svg>
                </span>
                <span className="hero-tile-copy">
                  <strong>{tile.title}</strong>
                  <span>{tile.text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="categories" className="scroll-mt-28 pt-0 sm:pt-0 lg:pt-0">
        <div className="mb-8 flex flex-col gap-2">
          <p className="section-kicker reveal">ثلاثة أقسام</p>
          <h2 className="reveal reveal-1 text-2xl sm:text-3xl">تصفّح حسب القسم</h2>
          <p className="reveal reveal-2 max-w-2xl leading-8">اختر نوع العقار الذي يناسبك وابدأ البحث.</p>
        </div>
        <div className="reveal-stagger grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div key={category.id} className="reveal">
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="feature-panel">
          <div className="flex flex-col items-start gap-4">
            <Badge className="reveal">للمالكين والمكاتب العقارية</Badge>
            <h2 className="reveal reveal-1 text-2xl sm:text-3xl">وثّق سجلك التجاري واكسب ثقة المستأجرين</h2>
            <p className="reveal reveal-2 leading-8">
              إذا كنت صاحب عقار أو مكتباً عقارياً، فتوثيق سجلك التجاري يمنح عقاراتك شارة «موثّق» ويجعلها أكثر مصداقية أمام
              الباحثين عن إقامة.
            </p>
            <div className="reveal reveal-3">
              <Button href={verifyLink.href} variant="accent">
                {verifyLink.label}
              </Button>
            </div>
          </div>

          <ol className="step-list reveal-stagger">
            {verificationSteps.map((step) => (
              <li key={step.number} className="step-item">
                <span className="step-number" aria-hidden="true">
                  {step.number}
                </span>
                <Card className="step-card flex flex-col gap-1">
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="leading-7 text-ink/80">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </div>
  );
}
