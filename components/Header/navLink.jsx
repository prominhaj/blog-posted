"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function NavLink({ item, isMobile }) {
  const pathname = usePathname();
  const isActive = item.href === pathname;

  const commonProps = {
    "aria-current": isActive ? "page" : undefined,
    className: cn(
      isMobile
        ? [
            "justify-start",
            isActive ? "text-black dark:text-white bg-accent" : "variant-ghost",
          ]
        : [
            "transition-colors",
            isActive ? "text-primary" : "text-muted-foreground",
          ]
    ),
  };

  return isMobile ? (
    <Button variant="ghost" {...commonProps}>
      <Link href={item.href} className="w-full text-base text-start">
        {item.title}
      </Link>
    </Button>
  ) : (
    <Link href={item.href} {...commonProps}>
      {item.title}
    </Link>
  );
}
