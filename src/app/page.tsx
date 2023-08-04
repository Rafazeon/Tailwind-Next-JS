import Spotify from "../components/Spotify";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clone Spotify",
  description: "Clone do site spotify",
};

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 p-4">
      <Link href="/spotify">
        <button className="btn btn-primary text-white">Spotify Clone</button>
      </Link>
      <Link href="/youtube">
        <button className="btn btn-secondary text-white">Youtube Clone</button>{" "}
      </Link>
      <Link href="/whatsapp">
        <button className="btn bg-green-500 text-white">Whatsapp Clone</button>{" "}
      </Link>
      <Link href="/portfolio">
        <button className="btn btn-accent text-white">Meu Portfólio</button>{" "}
      </Link>
    </div>
  );
}
