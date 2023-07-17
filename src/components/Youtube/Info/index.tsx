import { DataProps } from "../../../app/youtube/interfaces";

export default function Info({ info }: DataProps) {
  return (
    <section className="mt-5 bg-gray-100 rounded-lg p-2 space-y-2">
      <div dangerouslySetInnerHTML={{__html: info}} />
    </section>
  );
}
