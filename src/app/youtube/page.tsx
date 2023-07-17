"use client"
import { useState } from "react";
import Videos from "./Videos";
import Comments from "./Comments";
import Info from "./Info";
import Video from "./Video";
import NavBar from "./Navbar";
import { DataProps } from "./interfaces";
import { videos } from "../actions/videos";

export default function Youtube() {
  const [data, setData] = useState(videos[0])

  const handleData = (value: DataProps) => {
    setData(value)
  }

  return (
    <>
      <NavBar />
      <div
        style={{ maxWidth: "90%" }}
        className="container box-content mx-auto mt-10"
      >
        <div className="md:grid min-md:grid-cols-6 2xl:grid-cols-8 gap-6">
          <div className="aspect-w-16 aspect-h-9 w-full h-100 col-span-6">
            <Video {...data} />
            <Info {...data} />
            <Comments {...data} />
            <div className="2xl:hidden">
              <Videos handleData={handleData} />
            </div>
          </div>
          <div className="2xl:block hidden">
            <Videos handleData={handleData} />
          </div>
        </div>
      </div>
    </>
  );
}
