import type { Metadata } from "next";
import { Badge } from "@/components/Badge";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: "أرسل رسالة إلى فريق Local Stay حول الإقامة أو عرض عقار أو توثيق السجل التجاري.",
};

const notes = [
  { title: "اكتب بوضوح", text: "اذكر المدينة ونوع العقار ومدة الإقامة إن كان سؤالك عن البحث." },
  { title: "للمالكين", text: "إذا كنت تريد عرض عقار أو توثيق سجل تجاري، اختر الموضوع المناسب." },
  { title: "نسخة من رسالتك", text: "بعد الإرسال تظهر رسالتك على الصفحة كتأكيد لما كتبته." },
];

export default function ContactPage() {
  return (
    <div className="home">
      <Section>
        <div className="contact-layout">
          <div className="flex flex-col gap-5">
            <Badge className="reveal self-start">اتصل بنا</Badge>
            <h1 className="reveal reveal-1 text-3xl sm:text-4xl">أرسل رسالة</h1>
            <p className="reveal reveal-2 max-w-xl leading-8 sm:text-lg">
              اكتب استفسارك عن الإقامة، أو عن عرض عقار، أو عن توثيق السجل التجاري. النموذج يحفظ نص الرسالة أمامك بعد
              الإرسال.
            </p>
            <ul className="reveal reveal-3 flex flex-col gap-4">
              {notes.map((note) => (
                <li key={note.title} className="flex flex-col gap-1">
                  <h2 className="text-lg">{note.title}</h2>
                  <p className="leading-7 text-ink/80">{note.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-2">
            <ContactForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
