import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { contactLink } from "@/lib/nav";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على Local Stay، منصة تأجير العقارات السكنية والترفيهية داخل سوريا.",
};

const offers = [
  {
    title: "بحث واضح",
    text: "شقق ومنازل ومزارع وشاليهات، بإيجار يومي أو أسبوعي أو شهري أو سنوي.",
  },
  {
    title: "ثقة أوضح",
    text: "يمكن للمالكين والمكاتب توثيق السجل التجاري والحصول على شارة «موثّق».",
  },
  {
    title: "تجربة عربية",
    text: "واجهة عربية بسيطة للمقيمين والمغتربين والسياح الباحثين عن إقامة داخل سوريا.",
  },
];

const audiences = [
  { title: "المقيمون", text: "لإيجاد سكن يناسب مدة الإقامة والمدينة." },
  { title: "المغتربون", text: "للعودة في زيارة والعثور على مكان جاهز قبل الوصول." },
  { title: "السياح", text: "لقضاء أيام أو عطلة في شقة أو مزرعة أو شاليه." },
  { title: "المالكون والمكاتب", text: "لعرض العقار وكسب ثقة المستأجرين عبر التوثيق." },
];

export default function AboutPage() {
  return (
    <div className="home">
      <Section>
        <div className="page-banner">
          <Badge className="reveal">من نحن</Badge>
          <h1 className="reveal reveal-1 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            مكان إقامة أوضح داخل سوريا
          </h1>
          <p className="reveal reveal-2 max-w-2xl leading-8 sm:text-lg">
            Local Stay منصة متخصصة في تأجير العقارات السكنية والترفيهية داخل سوريا. نجمع الشقق والمنازل والمزارع
            والشاليهات في مكان واحد، حتى يجد الباحث إقامة تناسبه ويقدّم المالك عقاره بوضوح.
          </p>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mb-8 flex flex-col gap-2">
          <p className="section-kicker reveal">ماذا نقدّم</p>
          <h2 className="reveal reveal-1 text-2xl sm:text-3xl">منصة للإقامة وللعرض</h2>
        </div>
        <div className="reveal-stagger grid gap-6 md:grid-cols-3">
          {offers.map((item) => (
            <div key={item.title} className="reveal">
              <Card className="info-card flex flex-col gap-2">
                <h3 className="text-xl">{item.title}</h3>
                <p className="leading-7 text-ink/80">{item.text}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="mb-8 flex flex-col gap-2">
          <p className="section-kicker reveal">لمن هذه المنصة</p>
          <h2 className="reveal reveal-1 text-2xl sm:text-3xl">أربعة أنواع من الزوار</h2>
        </div>
        <div className="reveal-stagger grid gap-6 sm:grid-cols-2">
          {audiences.map((item) => (
            <div key={item.title} className="reveal">
              <Card className="info-card flex flex-col gap-2">
                <h3 className="text-xl">{item.title}</h3>
                <p className="leading-7 text-ink/80">{item.text}</p>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <div className="feature-panel">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl sm:text-3xl">لديك سؤال أو تريد عرض عقارك؟</h2>
            <p className="leading-8">ابدأ من الأقسام، أو أرسل رسالة إلى فريق المنصة من صفحة اتصل بنا.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/#categories">تصفّح الأقسام</Button>
              <Button href={contactLink.href} variant="outline">
                {contactLink.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
