"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";

type Fields = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const topics = [
  { value: "general", label: "استفسار عام" },
  { value: "listing", label: "عرض عقار" },
  { value: "verify", label: "توثيق السجل التجاري" },
  { value: "problem", label: "مشكلة في الموقع" },
];

const emptyFields: Fields = {
  name: "",
  email: "",
  topic: "general",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (fields.name.trim().length < 2) errors.name = "اكتب اسمك.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = "اكتب بريداً إلكترونياً صحيحاً.";
  if (fields.message.trim().length < 10) errors.message = "اكتب رسالتك في عشر أحرف على الأقل.";
  return errors;
}

/** نموذج رسالة: يتحقق من الحقول ثم يعرض الرسالة كتأكيد على الصفحة. */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Fields | null>(null);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSent(fields);
  }

  if (sent) {
    const topic = topics.find((item) => item.value === sent.topic)?.label ?? sent.topic;
    return (
      <div className="message-success" role="status">
        <p className="section-kicker">تم تسجيل الرسالة</p>
        <h2 className="text-2xl">شكراً لك يا {sent.name.trim()}</h2>
        <p className="leading-8">هذه نسخة من رسالتك كما كتبتها على الصفحة.</p>
        <dl className="flex w-full flex-col gap-3 text-sm leading-7">
          <div>
            <dt className="font-semibold text-olive">البريد</dt>
            <dd>{sent.email.trim()}</dd>
          </div>
          <div>
            <dt className="font-semibold text-olive">الموضوع</dt>
            <dd>{topic}</dd>
          </div>
          <div>
            <dt className="font-semibold text-olive">الرسالة</dt>
            <dd className="whitespace-pre-wrap">{sent.message.trim()}</dd>
          </div>
        </dl>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setSent(null);
            setFields(emptyFields);
          }}
        >
          اكتب رسالة أخرى
        </Button>
      </div>
    );
  }

  return (
    <form className="card flex flex-col gap-4" onSubmit={onSubmit} noValidate>
      <Input
        label="الاسم"
        name="name"
        autoComplete="name"
        value={fields.name}
        aria-invalid={errors.name ? true : undefined}
        onChange={(event) => update("name", event.target.value)}
      />
      {errors.name ? <p className="field-error -mt-2">{errors.name}</p> : null}

      <Input
        label="البريد الإلكتروني"
        name="email"
        type="email"
        autoComplete="email"
        value={fields.email}
        aria-invalid={errors.email ? true : undefined}
        onChange={(event) => update("email", event.target.value)}
      />
      {errors.email ? <p className="field-error -mt-2">{errors.email}</p> : null}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-topic" className="text-sm font-medium text-ink">
          الموضوع
        </label>
        <select
          id="contact-topic"
          name="topic"
          className="input"
          value={fields.topic}
          onChange={(event) => update("topic", event.target.value)}
        >
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <Textarea
        label="الرسالة"
        name="message"
        rows={6}
        value={fields.message}
        aria-invalid={errors.message ? true : undefined}
        onChange={(event) => update("message", event.target.value)}
      />
      {errors.message ? <p className="field-error -mt-2">{errors.message}</p> : null}

      <Button type="submit" className="sm:self-start">
        إرسال الرسالة
      </Button>
    </form>
  );
}
