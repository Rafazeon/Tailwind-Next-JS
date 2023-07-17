import { AiOutlineVideoCamera, AiOutlineBell } from "react-icons/ai";

export default function Icons() {
  return (
    <div className="flex flex-row">
      <a
        href="#"
        className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
      >
        <AiOutlineVideoCamera size={22} />
      </a>
      <a
        href="#"
        className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
      >
        <AiOutlineBell size={22} />
      </a>
      <a
        href="#"
        className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 md:mx-2"
      >
        <img
          className="inline-block h-6 w-6 rounded-full"
          src="https://gray-week-prod.cdn.arcpublishing.com/resizer/TE7IhQt_Q825GVgDDtkXGb75mkw=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/W5DRRSQN4RETPH7TKOZRHBHCRA.jpg"
          alt="Avatar"
        />
      </a>
    </div>
  );
}
