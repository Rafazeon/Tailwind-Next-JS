import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="drawer w-full rounded">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu p-6 overflow-y-auto w-80 bg-base-100 text-base-content h-screen">
          <div className="flex items-center gap-7">
            <label htmlFor="my-drawer">
              <FaBars
                className="text-black cursor-pointer drawer-button"
                size={18}
              />
            </label>

            <img src="/img/youtube/logo.svg" width={90} height={90} />
          </div>

          <div className="text-black space-y-4 mt-10 border-b border-gray-300 pb-5 cursor-pointer">
            <p>Início</p>
            <p>Shorts</p>
            <p>Inscrições</p>
          </div>

          <div className="text-black space-y-4 mt-5 border-b border-gray-300 pb-5 cursor-pointer">
            <p>Biblioteca</p>
            <p>Histórico</p>
            <p>Seus vídeos</p>
            <p>Assistir mais tarde</p>
            <p>Vídeos marcados</p>
            <p>Mostrar mais</p>
          </div>
        </div>
      </div>
    </div>
  );
}
