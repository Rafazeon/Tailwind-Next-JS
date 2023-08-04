export default function Google() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="mx-auto mb-8"
          alt="Logo Google"
        />

        <div className="flex gap-4 max-md:items-end">
          <div className="relative mt-4 md:mt-0 max-md:w-full md:w-100">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-10 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Pesquisar"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-9.5 m-0.5 bg-gray-100 border-gray-100 rounded-r-full">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:grid-cols-2 mt-8">
          <button className="md:col-span-1 w-44 bg-graygoogle border-transparent border-2 hover:border-gray-200 text-google py-2 px-4 rounded">
            Pesquisa Google
          </button>
          <button className="md:col-span-1 w-44 bg-graygoogle border-transparent border-2 hover:border-gray-200 text-google py-2 px-4 rounded">
            Estou com Sorte
          </button>
        </div>
      </div>
    </div>
  );
}
