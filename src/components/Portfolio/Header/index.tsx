"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="bg-white text-gray-100 shadow w-full">
      <div className="px-6 py-3 flex justify-end">
        <div className="flex gap-4 items-end">
          <div className="relative mt-4 md:mt-0 w-100">
            <div className="flex flex-row justify-end">
              <Link
                href="/portfolio/timeline"
                className={`px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2 ${
                  pathname === "/portfolio/timeline" ? "bg-gray-200" : ""
                }`}
              >
                Linha do Tempo
              </Link>
              <Link
                href="/portfolio/works"
                className={`px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2 ${
                  pathname === "/portfolio/works" ? "bg-gray-200" : ""
                }`}
              >
                Meus Trabalhos
              </Link>
              <Link
                href="/portfolio"
                className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
              >
                <img
                  className="inline-block h-6 w-6 rounded-full"
                  src="/img/portfolio/profile.jpg"
                  alt="Avatar"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
