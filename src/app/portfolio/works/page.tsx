"use client"
import Header from "@/components/Portfolio/Header";
import { NavContext } from "@/contexts/NavContext";
import Link from "next/link";
import { useContext } from "react";

export default function Works() {
  const { handleSelected } = useContext(NavContext)

  return (
    <>
      <Header />
      <div className="flex p-4 md:flex-row max-md:space-y-4 gap-4 flex-col md:justify-center md:items-center h-[100%] md:h-[100vh] bg-gray-300 max-md:pt-10">
        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] max-md:w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-36 w-full justify-center rounded-xl bg-cover">
            <img
              src="https://focalizando.com.br/sites/default/files/2022-07/como-fazer-o-cancelamento-spotify-premium.jpg"
              className="absolute flex h-36 w-full justify-center rounded-xl bg-cover"
            />
          </div>

          <div className="mt-5 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Spotify Clone
            </h4>
            <p
              onClick={() => handleSelected(1, "spotify")}
              className="text-blue-500 cursor-pointer"
            >
              Link
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] max-md:w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-36 w-full justify-center rounded-xl bg-cover">
            <img
              src="https://s2.static.brasilescola.uol.com.br/be/2023/01/logo-do-youtube.jpg"
              className="absolute flex h-36 w-full justify-center rounded-xl bg-cover"
            />
          </div>
          <div className="mt-5 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              Youtube Clone
            </h4>
            <p
              onClick={() => handleSelected(2, "youtube")}
              className="text-blue-500 cursor-pointer"
            >
              Link
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] max-md:w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-36 w-full justify-center rounded-xl bg-cover">
            <img
              src="https://www.ebookmaker.ai/img/logo.png"
              className="absolute flex h-36 w-full justify-center rounded-xl bg-cover"
            />
          </div>
          <div className="mt-5 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              EbookMaker
            </h4>
            <a
              target="_blank"
              href="https://ebookmaker.ai"
              className="text-blue-500 cursor-pointer"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
