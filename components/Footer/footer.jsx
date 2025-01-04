import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Logo from "../Header/logo";

export default function Footer() {
  return (
    <footer className="w-full pt-8 lg:pt-12 pb-5 lg:pb-8" role="contentinfo">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-5 md:mb-8">
          {/* About Section */}
          <section
            className="col-span-12 lg:col-span-4 flex lg:flex-none flex-col items-center lg:items-start"
            aria-labelledby="about-heading"
          >
            <h2 id="about-heading" className="text-base font-semibold">
              About
            </h2>
            <p className="mt-3 lg:text-start text-center md:mt-4 text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <dl className="mt-3 md:mt-4 space-y-2">
              <div>
                <dt className="inline text-sm font-medium">Email: </dt>
                <dd className="inline text-sm text-muted-foreground">
                  <Link
                    href="mailto:info@jstemplate.net"
                    className="hover:text-foreground"
                  >
                    info@jstemplate.net
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="inline text-sm font-medium">Phone: </dt>
                <dd className="inline text-sm text-muted-foreground">
                  <Link
                    href="tel:880123456789"
                    className="hover:text-foreground"
                  >
                    880 123 456 789
                  </Link>
                </dd>
              </div>
            </dl>
          </section>

          {/* Quick Link Section */}
          <nav
            className="flex flex-col items-center col-span-12 md:col-span-6 lg:col-span-2"
            aria-labelledby="quick-links-heading"
          >
            <div className="flex lg:flex-none items-center lg:items-start flex-col">
              <h2
                id="quick-links-heading"
                className="text-base font-semibold mb-3 md:mb-4"
              >
                Quick Link
              </h2>
              <ul
                className="flex lg:flex-none lg:items-start items-center gap-2 flex-col"
                role="list"
              >
                {["Home", "About", "Blog", "Archived", "Author", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>

          {/* Category Section */}
          <nav
            className="flex flex-col items-center col-span-12 md:col-span-6 lg:col-span-2"
            aria-labelledby="categories-heading"
          >
            <div className="flex lg:flex-none items-center lg:items-start flex-col">
              <h2
                id="categories-heading"
                className="text-base font-semibold mb-3 md:mb-4"
              >
                Category
              </h2>
              <ul
                className="flex lg:flex-none lg:items-start items-center gap-2 flex-col"
                role="list"
              >
                {[
                  "Lifestyle",
                  "Technology",
                  "Travel",
                  "Business",
                  "Economy",
                  "Sports",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="block text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Weekly Newsletter Section */}
          <section
            className="lg:col-span-4 col-span-12"
            aria-labelledby="newsletter-heading"
          >
            <div className="flex items-center lg:flex-none lg:items-start flex-col">
              <h2
                id="newsletter-heading"
                className="text-base font-semibold mb-2"
              >
                Weekly Newsletter
              </h2>
              <p className="text-sm text-muted-foreground mb-3 md:mb-4">
                Get blog articles and offers via email
              </p>
            </div>
            <form className="space-y-3">
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your Email"
                  aria-label="Email address for newsletter"
                  className="w-full"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-[#4B6BFB] dark:text-white hover:bg-[#4B6BFB]/90"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 lg:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center justify-center flex-wrap gap-2">
              <Logo />
              <span className="text-sm text-muted-foreground">
                © JS Template 2023. All Rights Reserved.
              </span>
            </div>
            <nav className="flex items-center space-x-6">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
