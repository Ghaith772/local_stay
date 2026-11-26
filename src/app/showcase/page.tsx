import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "عرض المكونات",
};

const swatches = [
  { name: "الزيتوني (olive)", className: "bg-olive" },
  { name: "التراكوتا (terracotta)", className: "bg-terracotta" },
  { name: "البيج (cream)", className: "bg-cream" },
  { name: "النص (ink)", className: "bg-ink" },
  { name: "السطح (surface)", className: "bg-surface" },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      {children}
    </div>
  );
}

/** صفحة تجريبية للمراجعة فقط — تعرض كل المكونات المعتمدة (القسم 3-هـ). */
export default function ShowcasePage() {
  return (
    <>
      <Section>
        <div className="flex flex-col gap-3">
          <Badge>المرحلة 1 — الأساس</Badge>
          <h1 className="text-3xl sm:text-4xl">عرض المكونات</h1>
          <p className="max-w-2xl leading-8">
            هذه الصفحة للمراجعة الداخلية فقط وتُحذف عند بدء المرحلة 2. تعرض الألوان والأزرار والبطاقات والحقول والشارات
            بالأصناف المعرّفة في ملف التنسيق الوحيد.
          </p>
        </div>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Block title="الألوان">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col gap-2">
                <div className={`swatch ${s.className}`} />
                <span className="text-sm">{s.name}</span>
              </div>
            ))}
          </div>
        </Block>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Block title="الأزرار">
          <div className="flex flex-wrap items-center gap-3">
            <Button>زر رئيسي</Button>
            <Button variant="accent">زر لفت انتباه</Button>
            <Button variant="outline">زر بإطار</Button>
            <Button disabled>زر معطّل</Button>
            <Button href="/showcase" variant="outline">
              زر كرابط
            </Button>
          </div>
        </Block>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Block title="الشارات">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>إيجار يومي</Badge>
            <Badge>إيجار شهري</Badge>
            <Badge>★ 4.8</Badge>
            <Badge>قيد المراجعة</Badge>
          </div>
        </Block>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Block title="البطاقات">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["شقة في المزة", "مزرعة في الغوطة", "شاليه في اللاذقية"].map((title) => (
              <Card key={title} className="flex flex-col gap-3">
                <div className="h-32 w-full rounded-lg bg-olive/10" />
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg">{title}</h3>
                  <Badge>★ 4.7</Badge>
                </div>
                <p className="text-sm leading-7">وصف مختصر تجريبي للعقار يظهر هنا ضمن البطاقة.</p>
                <Button variant="accent" className="w-full">
                  عرض التفاصيل
                </Button>
              </Card>
            ))}
          </div>
        </Block>
      </Section>

      <Section className="pt-0 sm:pt-0 lg:pt-0">
        <Block title="حقول الإدخال">
          <Card className="grid gap-4 sm:grid-cols-2">
            <Input label="الاسم" placeholder="اكتب اسمك" />
            <Input label="البريد الإلكتروني" type="email" placeholder="name@example.com" dir="ltr" />
            <Input label="حقل معطّل" placeholder="غير متاح" disabled />
            <Input label="رقم الهاتف" type="tel" placeholder="+963 ..." dir="ltr" />
          </Card>
        </Block>
      </Section>
    </>
  );
}
