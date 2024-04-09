import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IQ Test Academy | Unlock Your Intelligence: Premium Online IQ Tests",
  description:
    "Discover your cognitive potential with our premium online IQ tests. Gain insights into your strengths and areas for growth with detailed results. Take the first step towards self-discovery today!",
  openGraph: {
    images:
      "https://static.vecteezy.com/system/resources/previews/006/408/298/original/brain-icon-isolated-on-white-background-brain-icon-similar-design-illustration-brain-icon-symbol-for-logo-web-app-and-template-vector.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KFL7J0MRYT"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KFL7J0MRYT');`}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
