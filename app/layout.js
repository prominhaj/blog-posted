import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/Provider/theme-provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
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
  );
}
