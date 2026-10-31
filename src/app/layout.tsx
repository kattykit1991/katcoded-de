import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../design-system/CUTE_COZY/icons/home.svg";
import folderIcon from "../../design-system/CUTE_COZY/icons/folder.svg";
import codeIcon from "../../design-system/CUTE_COZY/icons/code.svg";
import aboutIcon from "../../design-system/CUTE_COZY/icons/info.svg";
import roadmapIcon from "../../design-system/CUTE_COZY/icons/file.svg";
import wordmark from "../../design-system/CUTE_COZY/branding/wordmark-light.svg";
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
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:rounded-(--kat-radius-control) focus:bg-(--kat-surface) focus:px-4 focus:py-3">
          Zum Inhalt
        </a>
        <header className="sticky top-0 z-40 border-b border-(--kat-art-border) bg-(--kat-bg)/90 backdrop-blur-md">
          <div className="mx-auto flex min-w-0 max-w-360 flex-col gap-2 px-5 pt-4 pb-2 sm:px-8 lg:min-h-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-3">
            <Link href="/" aria-label="KATCODED – zur Startseite" className="w-fit shrink-0 rounded-(--kat-radius-control)">
              <Image src={wordmark} alt="katc()ded" width={790} height={190} className="h-auto w-44 lg:w-52" unoptimized />
            </Link>
            <nav aria-label="Hauptnavigation" className="min-w-0 max-w-full py-2">
              <ul className="flex flex-wrap items-center gap-1 text-sm font-bold text-(--kat-strong) sm:gap-2">
                <li><a href="#home" aria-current="page" className="bg-(--kat-soft) flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 hover:bg-(--kat-soft) motion-reduce:transition-none"><Image src={homeIcon} alt="" width={18} height={18} className="size-4.5 shrink-0" unoptimized />Home</a></li>
                <li><a href="#projekte" className="flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 hover:bg-(--kat-soft) motion-reduce:transition-none"><Image src={folderIcon} alt="" width={18} height={18} className="size-4.5 shrink-0" unoptimized />Projekte</a></li>
                <li><a href="#dev-tools" className="flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 hover:bg-(--kat-soft) motion-reduce:transition-none"><Image src={codeIcon} alt="" width={18} height={18} className="size-4.5 shrink-0" unoptimized />Dev Tools</a></li>
                <li><a href="#ueber-mich" className="flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 hover:bg-(--kat-soft) motion-reduce:transition-none"><Image src={aboutIcon} alt="" width={18} height={18} className="size-4.5 shrink-0" unoptimized />Über mich</a></li>
                <li><a href="#roadmap" className="flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 hover:bg-(--kat-soft) motion-reduce:transition-none"><Image src={roadmapIcon} alt="" width={18} height={18} className="size-4.5 shrink-0" unoptimized />Roadmap</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main id="inhalt" tabIndex={-1} className="flex-1">
          {children}
        </main>

        <footer className="px-5 py-6 text-center text-sm text-(--kat-text-muted)">
          Hier kommt der Footer hin
        </footer>
      </body>
    </html>
  );
}
