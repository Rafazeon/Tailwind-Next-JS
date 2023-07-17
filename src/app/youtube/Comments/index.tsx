import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiLike, BiDislike, BiMessageRoundedDetail } from "react-icons/bi";
import { DataProps } from "../interfaces";

export default function Comments({ comments }: DataProps) {
  return (
    <>
      <section className="py-4 flex gap-4 p-2">
        <p>{comments} comentários</p>
        <div className="flex items-center gap-2">
          <AiOutlineUnorderedList size={20} />
          <p>Ordenar por</p>
        </div>
      </section>

      <section className="pb-5 p-2">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Comments</h2>
          <div className="flex space-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/50"
              alt="User Avatar"
            />
            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Lekin da Silva</h3>
                <p className="text-gray-500 text-sm">1 hour ago</p>
              </div>
              <p>Muito boa a música!</p>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-500 text-sm">
                  <BiLike size={20} className="mr-2" /> 10
                </button>
                <button className="flex items-center text-gray-500 text-sm">
                  <BiDislike size={20} className="mr-2" /> 0
                </button>
                <button className="flex items-center text-gray-500 text-sm">
                  <BiMessageRoundedDetail size={20} className="mr-2" /> Reply
                </button>
              </div>
            </div>
          </div>
          {/* Add more comments as needed */}
        </div>
      </section>
    </>
  );
}
