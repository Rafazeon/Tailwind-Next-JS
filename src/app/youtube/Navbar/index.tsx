"use client";
import { useState } from "react";

import {
  AiOutlineClose,
  AiOutlineVideoCamera,
  AiOutlineBell,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi";
import Link from "next/link";
import Sidebar from "../Sidebar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-100 shadow w-full">
      <div className="px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-7">
            <label htmlFor="my-drawer">
              <FaBars
                className="text-black cursor-pointer drawer-button"
                size={18}
              />
            </label>
            <Link href="#">
              <span className="cursor-pointer text-2xl font-bold text-black lg:text-3xl hover:text-gray-300">
                <img src="/img/youtube/logo.svg" width={90} height={90} />
              </span>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-200 max-md:hidden hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <AiOutlineClose className="text-black" />
              ) : (
                <FaBars className="text-black" />
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-4 max-md:items-end">
          <div className="relative mt-4 md:mt-0 w-100">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-10 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Pesquisar"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-9.5 m-0.5 bg-gray-100 border-gray-100 rounded-r-full">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>

          <button className="bg-gray-100 border-gray-100 rounded-full w-10 h-10 flex items-center justify-center max-md:p-3">
            <HiMicrophone className="text-black" size={22} />
          </button>
        </div>

        <div className={`${isOpen ? "" : "hidden"} md:flex md:items-center`}>
          <div className="flex flex-col md:flex-row md:py-0">
            <a
              href="#"
              className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
            >
              <AiOutlineVideoCamera className="max-md:hidden" size={22} />
            </a>
            <a
              href="#"
              className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
            >
              <AiOutlineBell size={22} />
            </a>
            <a
              href="#"
              className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
            >
              <img
                className="inline-block h-6 w-6 rounded-full"
                src="https://gray-week-prod.cdn.arcpublishing.com/resizer/TE7IhQt_Q825GVgDDtkXGb75mkw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/W5DRRSQN4RETPH7TKOZRHBHCRA.jpg"
                alt="Avatar"
              />
            </a>
          </div>
        </div>
      </div>

      <Sidebar />
    </nav>
  );
}
