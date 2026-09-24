import { DM_Sans, Instrument_Serif, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata = {
  title: "TruckIt - Find Your Perfect Truck",
  description: "Book trucks and logistics securely",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${dancingScript.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>

    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q1NWXF5F99"
        strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1NWXF5F99');
        `}
    </Script>

    <Toaster position="top-center" />
    {children}
</body>
    </html>
  );
}
