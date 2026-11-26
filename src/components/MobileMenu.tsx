"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";
import { categoryLinks, companyLinks, loginLink, registerLink } from "@/lib/nav";

/** قائمة الهاتف: زر فتح/إغلاق + لوحة الروابط. العنصر التفاعلي الوحيد في الترويسة. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-panel"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div id="mobile-panel" className="mobile-panel absolute inset-x-0 top-full">
          <nav className="container-page mobile-nav" aria-label="القائمة الرئيسية">
            {[...categoryLinks, ...companyLinks].map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={close}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Button href={loginLink.href} variant="outline" className="sm:flex-1" onClick={close}>
                {loginLink.label}
              </Button>
              <Button href={registerLink.href} className="sm:flex-1" onClick={close}>
                {registerLink.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
