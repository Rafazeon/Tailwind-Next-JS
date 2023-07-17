import { DataProps } from "../interfaces";
import { videos } from "../../actions/videos";

interface VideosProps {
  handleData: (value: DataProps) => void;
}

export default function Videos({ handleData }: VideosProps) {
  return (
    <aside className="space-y-5 col-span-2">
      <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
      <div className="grid grid-cols-1 gap-4 cursor-pointer">
        {videos.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 flex gap-3 w-80 h-32"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              handleData(item);
            }}
          >
            <div className="relative group">
              <img
                src={item.youtubeThumb}
                alt="Video Thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
            </div>
            <div>
              <h3 className="text-md font-medium mt-2 w-40">{item.title}</h3>
              <p className="text-sm text-gray-500 w-40">
                {item.youtubeChannel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
