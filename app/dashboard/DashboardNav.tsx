"use client";

import { cn } from "@/lib/utils";
import { CreditCard, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

export const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function DashboardNav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item, index) => (
        <Link key={index} href={item.href}>
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href
                ? "bg-accent text-accent-foreground"
                : "bg-transparent text-accent-foreground group-hover:bg-accent group-hover:text-accent-foreground"
            )}
          >
            <item.icon size={24} className="mr-2 h-4 w-4 text-primary" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </nav>
  );
}
