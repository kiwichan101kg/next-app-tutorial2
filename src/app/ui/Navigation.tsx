"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LinkList } from "./page";

export function Navigation({ navLinks }: { navLinks: LinkList[] }) {
  // 現在のpsthnameを文字列で取得する
  const pathname = usePathname();

  return (
    <>
      {pathname}
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-blue" : "text-black"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
