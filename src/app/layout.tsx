import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "../../design-system/CUTE_COZY/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "KATCODED",
  description: "KATCODED – My little world of code, creativity and chaos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full">
      <body
        data-kat-theme="cozy"
        className="kat-ui flex min-h-full flex-col bg-(--kat-bg) text-(--kat-text) [font-family:var(--kat-font-body)]"
      >
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:rounded-(--kat-radius-control) focus:bg-(--kat-surface) focus:px-4 focus:py-3"
        >
          Zum Inhalt
        </a>
        <SiteHeader />

        <main id="inhalt" tabIndex={-1} className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
