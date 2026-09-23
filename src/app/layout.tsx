import type { Metadata, Viewport } from "next";
import { Geist, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/motion/MotionRoot";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-robotoSlab",
  weight: ["300", "400", "500", "700"], // choose what you need
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bayo Adegbite",
  description: "Music Minister",
  icons: {
    icon: "/fav.jpg",
    apple: "/fav.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top" suppressHydrationWarning>
      <head>
        {/* Lets CSS hide not-yet-revealed elements before first paint (see globals.css). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.classList.toggle('light',!d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${robotoSlab.className} ${robotoSlab.variable} ${geistSans.variable} grain antialiased`}
      >
        <Nav />
        {children}
        <Booking />
        <Footer />
        <MotionRoot />
      </body>
    </html>
  );
}
