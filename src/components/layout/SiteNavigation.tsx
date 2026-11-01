"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { uiIcons } from "@/lib/icons";

const navigationItems = [
  { label: "Home", href: "/", icon: uiIcons.home },
  { label: "Projekte", href: "/projects", icon: uiIcons.folder },
  { label: "Dev Tools", href: "/dev-tools", icon: uiIcons.code },
  { label: "Über mich", href: "/about", icon: uiIcons.info },
  { label: "Roadmap", href: "/roadmap", icon: uiIcons.file },
];

const linkClassName =
  "flex min-h-11 items-center gap-2 rounded-(--kat-radius-pill) px-3 transition-colors duration-140 motion-reduce:transition-none";

export default function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Hauptnavigation" className="min-w-0 max-w-full py-2">
      <ul className="flex flex-wrap items-center gap-1 text-sm font-bold text-(--kat-strong) sm:gap-2">
        {navigationItems.map(({ label, href, icon }) => {
          const isActive =
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`));

          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`${linkClassName} ${
                  isActive
                    ? "bg-(--kat-fresh) hover:bg-(--kat-fresh)/80 focus-visible:bg-(--kat-fresh)/80"
                    : "hover:bg-(--kat-fresh)/40 focus-visible:bg-(--kat-fresh)/40"
                }`}
              >
                <Image
                  src={icon}
                  alt=""
                  width={18}
                  height={18}
                  className="size-4.5 shrink-0"
                  unoptimized
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
