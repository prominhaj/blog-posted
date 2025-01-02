import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Post - Technology and Workplace Insights",
  description:
    "Discover the latest insights about technology and its impact on the modern workplace.",
  keywords: "technology, workplace, digital transformation, innovation",
  author: "Md Rakibul Islam or Blog Post",
  openGraph: {
    title: "Blog Post - Technology and Workplace Insights",
    description:
      "Discover the latest insights about technology and its impact on the modern workplace.",
    url: "https://yourblogsite.com", // Replace with your blog's actual URL
    siteName: "Blog Post",
    images: [
      {
        url: "https://yourblogsite.com/og-image.jpg", // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Blog Post Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Post - Technology and Workplace Insights",
    description:
      "Discover the latest insights about technology and its impact on the modern workplace.",
    images: ["https://yourblogsite.com/og-image.jpg"], // Replace with your Open Graph image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
