export default function Videos() {
  return (
    <aside className="space-y-5 col-span-2">
      <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
      <div className="grid grid-cols-1 gap-4 cursor-pointer">
        <div className="bg-white rounded-lg p-2 flex gap-3 w-80 h-32">
          <div className="relative group">
            <img
              src="/img/youtube/thumb-rocketman.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
          </div>
          <div>
            <h3 className="text-md font-medium mt-2 w-40">
              Mix de Elton John - Rocket Man (Official Music Video)
            </h3>
            <p className="text-sm text-gray-500 w-40">
              Elton John, Billy Joel, Toto e outros
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-2 flex gap-3 w-80 h-32">
          <div className="relative group">
            <img
              src="/img/youtube/thumb-kodaline.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-lg"></div>
          </div>
          <div>
            <h3 className="text-md font-medium mt-2 w-40">
              Kodaline - All I Want (Part 1)
            </h3>
            <p className="text-sm text-gray-500 w-40">Kodaline</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
