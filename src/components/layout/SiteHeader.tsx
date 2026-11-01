import Image from "next/image";
import Link from "next/link";
import wordmark from "../../../design-system/CUTE_COZY/branding/wordmark-light.svg";
import SiteNavigation from "./SiteNavigation";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--kat-art-border) bg-linear-120/srgb from-(--kat-cream) via-(--kat-soft) to-(--kat-lavender) backdrop-blur-md">
      <div className="mx-auto flex min-w-0 max-w-360 flex-col gap-2 px-5 pt-4 pb-2 sm:px-8 lg:min-h-20 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-3">
        <Link
          href="/"
          aria-label="KATCODED – zur Startseite"
          className="w-fit shrink-0 rounded-(--kat-radius-control)"
        >
          <Image
            src={wordmark}
            alt="katc()ded"
            width={790}
            height={190}
            className="h-auto w-44 lg:w-52"
            unoptimized
          />
        </Link>
        <SiteNavigation />
      </div>
    </header>
  );
}
