import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { FiScissors, FiMoreHorizontal } from "react-icons/fi";
import { DataProps } from "../interfaces";

export default function Video({ title, likes, youtubeURL }: DataProps) {
  return (
    <>
      <iframe
        src={`https://www.youtube.com/embed/${youtubeURL}`}
        title="YouTube video player"
        className="w-full md:h-full max-md:h-80"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 bg-white shadow-md rounded p-4">
        <p className="text-xl font-bold mb-2">{title}</p>

        <div className="md:flex justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full"
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
              alt="avatar"
            />

            <div>
              <p className="text-xl font-bold">Teste</p>
              <span className="text-sm text-gray-500">
                3,23 mi de inscritos
              </span>
            </div>

            <div>
              <button className="border border-gray-500 rounded-full px-2 py-2 bg-black text-white text-sm">
                Inscrever-se
              </button>
            </div>
          </div>

          <div className="md:items-center max-md:items-baseline gap-3 max-md:space-y-3 max-md:mt-2 flex">
            <button className="rounded-full px-4 bg-gray-100 text-black flex items-center h-12 hover:bg-gray-200">
              <BiLike size={20} className="mr-2" /> {likes}
              <span className="ml-3 mr-3 border-r border-gray-300 h-5" />
              <BiDislike size={20} className="mr-2" />
            </button>

            <button className="rounded-full px-4 bg-gray-100 text-black lg:flex hidden items-center h-12 hover:bg-gray-200">
              <PiShareFatLight size={20} className="mr-2" /> Compartilhar
            </button>

            <button className="rounded-full px-4 bg-gray-100 text-black lg:flex hidden items-center h-12 hover:bg-gray-200">
              <LiaDownloadSolid size={20} className="mr-2" /> Download
            </button>

            <button className="rounded-full px-4 bg-gray-100 text-black lg:flex hidden items-center h-12 hover:bg-gray-200">
              <FiScissors size={20} className="mr-2" /> Clipe
            </button>

            <button className="rounded-full px-4 bg-gray-100 text-black flex items-center h-12 hover:bg-gray-200">
              <FiMoreHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
