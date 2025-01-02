import Link from "next/link";
import Navbar from "./nav";
import SearchModal from "./search";
import ProfileMenu from "./profile";
import ThemeToggle from "../Theme/Toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold">
          <Link href="/" className="flex items-center">
            Blog Posted
          </Link>
        </h1>
        <Navbar />
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <SearchModal />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
