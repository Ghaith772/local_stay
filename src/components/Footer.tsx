import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { accountLinks, categoryLinks, companyLinks } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="section-block grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="footer-logo" aria-label="Local Stay — الصفحة الرئيسية">
            <Image src="/images/logo.webp" alt="" width={737} height={596} className="footer-logo-image" />
          </Link>
          <p className="max-w-sm text-sm leading-7 text-cream/80">
            منصة متخصصة في تأجير العقارات السكنية والترفيهية داخل سوريا: إيجار يومي وأسبوعي وشهري وسنوي.
          </p>
        </div>

        <div>
          <p className="footer-heading">الأقسام</p>
          <ul className="flex flex-col gap-2">
            {categoryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">عن المنصة</p>
          <ul className="flex flex-col gap-2">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">حسابك</p>
          <ul className="flex flex-col gap-2">
            {accountLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="footer-bottom">
        <Container>© {new Date().getFullYear()} Local Stay. جميع الحقوق محفوظة.</Container>
      </div>
    </footer>
  );
}
