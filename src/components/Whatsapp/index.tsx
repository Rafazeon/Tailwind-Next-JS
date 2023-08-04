"use client"
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaRegSmile } from "react-icons/fa";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

export default function Whatsapp() {
  const innerHeight = window.innerHeight

  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-green-600 h-28 flex pr-10 pb-10">
        <aside className="w-476 bg-whatsapp-gray relative top-5 left-5">
          <nav className="flex flex-row items-center justify-between h-14 border-r border-gray-300">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              class="w-10 h-10 rounded-full ml-2"
              alt="Avatar"
            />

            <div className="flex space-x-5 pr-5">
              <HiOutlineSpeakerphone />
              <HiOutlineSpeakerphone />
              <HiOutlineSpeakerphone />
              <FiMoreVertical />
            </div>
          </nav>
          <div
            style={{ paddingRight: 36 }}
            className="p-2 pl-3 relative bg-white border-b border-r border-gray-200"
          >
            <input
              type="text"
              style={{ paddingLeft: 52 }}
              className="w-full text-xs text-gray-700 bg-gray-200 border border-transparent rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Pesquisar ou começar uma nova conversa"
            />
            <button className="absolute bottom-3.5 left-2 flex items-center justify-center w-12 h-9.5 m-0.5">
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

          <div style={{height: innerHeight - 148}} id="scrollChat" className="overflow-auto">
            {arr.map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white flex justify-between pr-2 pt-3 border-b border-gray-200 pb-2 overflow-x-auto"
              >
                <div className="flex">
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    class="w-10 h-10 rounded-full ml-2"
                    alt="Avatar"
                  />
                  <div className="pl-3 ">
                    <h2>Tato</h2>
                    <p className="text-sm">Esse ficou bom</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">10:08</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="bg-whatsapp-gray relative top-5 left-5 w-full">
          <nav className="flex flex-row items-center justify-between h-14 border-r border-gray-300">
            <div className="flex items-center space-x-3">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                class="w-10 h-10 rounded-full ml-2"
                alt="Avatar"
              />
              <p>Tato</p>
            </div>

            <div className="flex space-x-5 pr-5 items-center">
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

              <FiMoreVertical />
            </div>
          </nav>

          

          <div className="flex flex-col justify-between">
            <div style={{height: innerHeight - 152}} className="bg-orange-100"></div>
            <div
              style={{ paddingRight: 36, paddingLeft: 20 }}
              className="p-2 relative bg-gray-100 border-b border-gray-200 flex items-center space-x-5"
            >
              <FaRegSmile size={22} />
              <AiOutlinePlus size={22} />
              <input
                type="text"
                className="w-full text-sm text-gray-700 bg-white border border-transparent rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                placeholder="Mensagem"
              />
              <BiSolidMicrophone size={22} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
