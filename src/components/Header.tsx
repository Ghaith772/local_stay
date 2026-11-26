import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MobileMenu } from "@/components/MobileMenu";
import { categoryLinks, companyLinks, loginLink, registerLink } from "@/lib/nav";

/** الترويسة: الشعار + الأقسام الثلاثة بالترتيب + من نحن واتصل بنا + تسجيل الدخول وإنشاء حساب + قائمة الهاتف. */
export function Header() {
  return (
    <header className="site-header">
      <Container className="relative">
        <div className="site-header-row">
          <Link href="/" className="site-logo" aria-label="Local Stay — الصفحة الرئيسية">
            <Image src="/images/logo.webp" alt="" width={737} height={596} priority className="site-logo-image" />
          </Link>

          <nav className="nav-desktop" aria-label="القائمة الرئيسية">
            {[...categoryLinks, ...companyLinks].map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <Button href={loginLink.href} variant="outline">
                {loginLink.label}
              </Button>
              <Button href={registerLink.href}>{registerLink.label}</Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
