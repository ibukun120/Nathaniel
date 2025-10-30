import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
// import { Poppins } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
// import { Open_Sans } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-poppins",
// });

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"]
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bayo Adegbite",
  description: "Music Minister",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSlab.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
