import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "./logo";

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
];

const navItems = [
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contract",
    href: "/contract",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const Navbar = () => {
  return (
    <NavigationMenu aria-label="Main Navigation">
      <NavigationMenuList>
        {/* Components Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  description={component.description}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Static Navigation Links */}
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const MobileNav = () => {
  return (
    <Sheet aria-label="Mobile Navigation">
      <SheetTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          aria-label="Open Mobile Menu"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-3 w-[300px] font-roboto"
        aria-describedby="Mobile navigation links and components"
      >
        <SheetTitle>
          <Logo />
        </SheetTitle>
        <nav className="my-3 h-[calc(100vh-8rem)] pb-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="hover:no-underline text-base py-2 font-medium">
                Components
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <ul className="flex flex-col gap-0.5 pl-1.5 pb-2">
                  {components.map((component) => (
                    <li key={component.title}>
                      <Link
                        className="text-[15px] font-[450]"
                        href={component.href}
                      >
                        {component.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <ul className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link className="font-medium" href={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

// Reusable List Item Component
const ListItem = React.forwardRef(
  ({ title, href, description, className }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={href}
          >
            <h3 className="text-sm font-medium leading-none">{title}</h3>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
