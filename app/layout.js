import "./globals.css";
import { Roboto, Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/Provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { dark } from "@clerk/themes";

// Font Family
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const roboto_condensed = Roboto_Condensed({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "Blog Posted - Technology and Workplace Insights",
  description:
    "Discover the latest insights about technology and its impact on the modern workplace.",
  keywords: "technology, workplace, digital transformation, innovation",
  author: "Md Rakibul Islam or Blog Posted",
  openGraph: {
    title: "Blog Posted - Technology and Workplace Insights",
    description:
      "Discover the latest insights about technology and its impact on the modern workplace.",
    url: "https://blogposted.vercel.app",
    siteName: "Blog Posted",
    images: [
      {
        url: "https://blogposted.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Posted Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posted - Technology and Workplace Insights",
    description:
      "Discover the latest insights about technology and its impact on the modern workplace.",
    images: ["https://blogposted.vercel.app/og-image.jpg"],
  },
};

export default async function RootLayout({ children }) {
  const theme = (await cookies()).get("theme")?.value;
  const clerkTheme = theme === "light" ? "" : dark;

  return (
    <ClerkProvider appearance={{ baseTheme: clerkTheme }}>
      <html
        lang="en"
        className={`${roboto.variable} ${roboto_condensed.variable}`}
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
