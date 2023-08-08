"use client";

import { NavContext } from "@/contexts/NavContext";
import * as M from "@mui/material";
import { useContext, useState } from "react";
import {
  BsFillPersonFill,
  BsFillShareFill,
  BsSpotify,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Tab() {
  const { selected, navUrl, handleSelected } = useContext(NavContext);
  const [open, setOpen] = useState(false);

  const origin = typeof window !== "undefined" && window.location.origin;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const arr = [
    {
      title: "Meu Portfólio",
      url: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
      slug: "",
      Icon: BsFillPersonFill,
      color: "purple",
    },

    {
      title: "Clone Spotify",
      url: "https://sm.ign.com/ign_br/tech/default/spotify-1280x720_rjk6.jpg",
      slug: "spotify",
      Icon: BsSpotify,
      color: "black",
    },

    {
      title: "Clone Youtube",
      url: "https://classic.exame.com/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg?quality=70&strip=info&w=840",
      slug: "youtube",
      Icon: BsYoutube,
      color: "red",
    },

    {
      title: "Clone Whatsapp",
      url: "https://tm.ibxk.com.br/2016/10/20/20144905885603.jpg?ims=352x208",
      slug: "whatsapp",
      Icon: BsWhatsapp,
      color: "green",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 w-full sm:block md:hidden">
        <div className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center space-x-3">
            <input
              className="w-60 px-2 py-1 mr-2 rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none"
              type="text"
              placeholder={`${origin}/${navUrl}`}
            />
            <BsFillShareFill size={18} />
            <p
              onClick={handleOpen}
              className="border border-gray-500 rounded-md px-1"
            >
              4
            </p>
            <FiMoreVertical className="text-gray-700" size={18} />
          </div>
        </div>
      </div>

      <M.Dialog fullScreen open={open} onClose={handleClose}>
        <div className="flex items-center justify-between p-4">
          <input
            className="w-60 px-2 py-1 mr-2 rounded-md text-sm text-gray-700 bg-gray-100 focus:outline-none"
            type="text"
            placeholder={`${origin}/${navUrl}`}
          />
          <IoMdClose onClick={handleClose} size={22} />
        </div>

        <div>
          <div className="grid gap-6 lg:grid-cols-3">
            {arr.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleSelected(index, item.slug);
                  handleClose();
                }}
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init
                data-te-ripple-color="dark"
              >
                <img
                  src={item.url}
                  className="w-full align-middle transition duration-300 ease-linear"
                  style={{ height: 200 }}
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div className="flex h-full items-end justify-start">
                      <h5 className="m-6 text-lg font-bold text-white">
                        {item.title}
                      </h5>
                    </div>
                  </div>
                  <div>
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </M.Dialog>

      <div className="bg-gray-100 w-full hidden md:flex">
        {arr.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              handleSelected(index, item.slug);
              handleClose();
            }}
            className={`${
              selected === index ? "bg-white" : "bg-gray-100"
            } w-52 p-2 rounded-md ml-2 flex items-center justify-between`}
          >
            <div className="flex items-center space-x-3">
              <item.Icon color={item.color} />
              <p>{item.title}</p>
            </div>
            <IoMdClose />
          </div>
        ))}
      </div>
    </>
  );
}
