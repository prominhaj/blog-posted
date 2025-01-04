import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import NavLink from "./navLink";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
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
    <nav className="text-muted-foreground hover:[&_a]:text-foreground items-center gap-6 text-base font-medium flex [&_a]:transition-colors">
      {navItems.map((item) => (
        <NavLink key={item.title} item={item} />
      ))}
    </nav>
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
          className="size-7"
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
          <div className="flex flex-col space-y-1.5 my-3 h-[calc(100vh-8rem)] pb-10">
            {navItems.map((item) => (
              <NavLink key={item.title} item={item} isMobile={true} />
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
