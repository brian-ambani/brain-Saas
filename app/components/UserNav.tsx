import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, HomeIcon, Settings } from "lucide-react";
import Link from "next/link";

export const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
];

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>Bra</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Brian Ambani</p>
            <p className="text-xl leading-none text-muted-foreground">
              brian@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator>
          <DropdownMenuGroup>
            {navItems.map((item, index) => (
              <DropdownMenuItem asChild key={index}>
                <Link
                  href={item.href}
                  className="w-full flex justify-center items-center"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuSeparator>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
