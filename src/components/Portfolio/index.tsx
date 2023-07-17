"use client";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Portfolio() {
  return (
    <div className="h-screen flex justify-center items-center bg-portfolio-theme bg-cover relative before:absolute before:inset-0 before:bg-black before:opacity-30">
      <div className="relative bg-white p-4 shadow-lg rounded-lg w-80">
        <div className="absolute -top-16 w-24 h-24 mx-auto left-28">
          <img
            src="/img/portfolio/profile.jpg"
            alt="avatar"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <p className=" text-gray-800 text-justify p-4">
          Sou um desenvolvedor com experiência desde 2015, especializado em
          <b> React JS.</b> Atualmente, estou focado em oportunidades de backend
          utilizando <b>NestJS.</b> Possuo ampla expertise nessas tecnologias e
          estou sempre buscando aprimorar minhas habilidades para oferecer
          soluções de alta qualidade.
        </p>

        <div className="flex flex-row gap-3 p-4">
          <Link href="/portfolio/timeline">
            <button className="btn btn-primary text-white">
              Linha do tempo
            </button>
          </Link>
          <Link href="/portfolio/works">
            <button className="btn btn-secondary text-white">
              Meus trabalhos
            </button>{" "}
          </Link>
        </div>

        <div className="flex items-center justify-center gap-3">
          <AiFillGithub
            className="cursor-pointer"
            onClick={() => {
              window.open(`https://github.com/Rafazeon`, "_blank");
            }}
            size={30}
          />
          <AiFillLinkedin
            onClick={() => {
              window.open(
                `https://www.linkedin.com/in/rafael-caldeira-921a2610a/`,
                "_blank"
              );
            }}
            size={30}
            className="cursor-pointer text-blue-700"
          />
        </div>
      </div>
    </div>
  );
}
