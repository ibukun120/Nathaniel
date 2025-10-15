import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f0f] text-white">
      {/* Top Section */}
      <div className="px-6 sm:px-12 lg:px-24 py-12 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Bookings Section */}
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-2xl font-semibold">Bookings</h1>
          <p>Lagos, Nigeria</p>
          <p>bookings@bayoadegbite.com</p>
        </div>

        {/* Reach Us Section */}
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-2xl font-semibold">Reach us Online</h1>
          <div className="space-y-2">
            <Link href="#" className="block hover:text-pink-500">
              www.bayoadegbite.com
            </Link>
            <p>info@bayodegbite.com</p>
          </div>

          <div className="flex gap-5 pt-2">
            <Link href="#" className="text-gray-300 hover:text-white">
              <Instagram />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Twitter />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Facebook />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <Youtube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-6 text-center sm:text-left">
        <h1 className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-0">
          © 2025 Bayo Adegbite. All rights reserved.
        </h1>

        <ul className="flex gap-4 text-gray-500">
          <li>
            <Link href="#" className="hover:text-purple-400 transition">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-400 transition">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-400 transition font-bold text-lg">
              T
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-purple-400 transition">
              <Youtube />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
