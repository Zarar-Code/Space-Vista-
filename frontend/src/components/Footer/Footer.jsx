import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div className="">
       
        <footer className="w-full py-8 bg-gray-50/90 md:py-12 xl:py-16 dark:bg-gray-950/90">
        <div className="container grid gap-4 px-4 text-center items-center justify-center md:gap-6 lg:gap-8 xl:gap-10">
            <div className="flex items-center space-x-2 center-f">
            <img
                src="./images/logo1.png"
                width="40"
                height="40"
                alt="Space Vista"
                // style="aspect-ratio: 40 / 40; object-fit: cover;"
            />
            <span className="font-semibold tracking-wide">Space Vista</span>
            </div>
            <nav className="flex items-center justify-center space-x-4 text-sm font-medium md:space-x-6">
            <Link className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400" href="#">
                All Spaces
            </Link>
            <Link className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                Services
            </Link>
            <Link to="/contact" className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400" href="#">
                Contact Us
            </Link>
            </nav>
            <div className="flex items-center justify-center space-x-4 text-sm font-medium md:space-x-6">
            <Link
                className="rounded-full border border-gray-200 border-gray-200 bg-white w-7 h-7 flex items-center justify-center shadow-sm text-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
            >
                <span className="sr-only">Facebook</span>
                {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 fill-current"
                >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg> */}
            </Link>
            <Link
                className="rounded-full border border-gray-200 border-gray-200 bg-white w-7 h-7 flex items-center justify-center shadow-sm text-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
            >
                <span className="sr-only">Instagram</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 fill-current"
                >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
            </Link>
            <Link
                className="rounded-full border border-gray-200 border-gray-200 bg-white w-7 h-7 flex items-center justify-center shadow-sm text-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800"
                href="#"
            >
                <span className="sr-only">Twitter</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-4 h-4 fill-current"
                >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
            </Link>
            </div>
            <div className="flex flex-col gap-1 text-xs tracking-wide items-center justify-center md:flex-row md:gap-2">
            <div className="text-gray-500 dark:text-gray-400">`© Copyright Space Vista {new Date().getFullYear()} | All Rights Reserved`</div>
            {/* <div className="text-gray-500 dark:text-gray-400">Made with ❤️ in Berlin</div> */}
            </div>
        </div>
        </footer>
    </div>
    </>
  );
}
