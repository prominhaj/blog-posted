import SearchModal from "./search";
import ProfileMenu from "./profile";
import ThemeToggle from "../Theme/Toggle";
import Logo from "./logo";
import { MobileNav, Navbar } from "./nav";

const Header = () => (
  <header className="border-b sticky top-0 right-0 left-0 bg-background/50 z-50 border-gray-200/50 dark:border-gray-800">
    <nav className="container flex items-center justify-between py-2 gap-3">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5">
        <Logo />
        <Navbar />
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <MobileNav />
      </div>

      {/* Right Section */}
      <div className="flex items-center w-full md:w-auto gap-3">
        <SearchModal className="w-full" />
        <ThemeToggle />
        <ProfileMenu />
      </div>
    </nav>
  </header>
);

export default Header;
