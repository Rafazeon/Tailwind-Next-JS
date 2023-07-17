export default function One() {
  return (
    <>
      <div className="container bg-green-300 mx-auto p-4 my-4 text-red-900 border-red-600 border-2 md:bg-blue-400">
        <p>HOME</p>
      </div>
      {/* Borders */}
      <div className="container bg-green-300 bg-purple-700 border-2 border-purple-900 m-4 border-box p-10">
        <p>HOME</p>
      </div>

      <div className="container bg-green-300 bg-teal-400 border-2 border-teal-900 m-4 border-content p-10">
        <p>HOME</p>
      </div>
      {/* Display */}
      <div className="container">
        <span className="block">Elementos</span>
        <span className="block">Elementos</span>

        <div className="bg-blue-500 inline-block">Block</div>
        <div className="bg-blue-500 inline-block">Block</div>

        <div className="bg-blue-500 hidden">Apareceu</div>
      </div>
      {/* Exercício 2 */}
      <div className="container bg-red-200 m-6 p-6">
        <div className="bg-red-300 inline-block">Teste 1</div>
        <div className="bg-blue-300 inline-block">Teste 2</div>
        <div className="bg-green-300 inline-block">Teste 3</div>
      </div>

      <div className="bg-gray-500 float-right">Float right</div>
      <div className="bg-gray-500 float-left">Float left</div>
      <div className="clear-both" />
      <div className="bg-gray-500 float-right">Float right</div>
      <div className="bg-gray-500 float-left">Float left</div>
      <div className="clear-both" />

      <div className="overflow-y-auto h-16 m-6 bg-red-300">
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
        <p>Testando overflow</p>
      </div>

      <div className="overflow-x-auto h-16 m-6 bg-green-300">
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </div>

      {/* Positions */}
      <div className="relative bg-pink-300">
        teste
        <div className="absolute top-0 right-0 bg-pink-900">Absolute</div>
      </div>

      {/* Exercício 3 */}
      <div className="container h-16 bg-blue-500 relative">
        <div className="h-10 bg-green-400 absolute right-0 bottom-0">
          Rola
        </div>
      </div>

      {/* Visibility */}
      <div className="container bg-red-400 visible p-4">Estou oculto</div>

      {/* Z index */}
      <div className="container relative">
        <div className="bg-red-300 h-10 w-20 p-6 absolute z-10">
            Na frente
        </div>
        <div className="bg-red-600 h-10 w-20 p-6 absolute m-4">
            Atrás
        </div>
      </div>

      {/* Exercício 4 */}
      <div className="container relative">
        <div className="bg-red-600 h-10 w-20 p-6 m-4 absolute">
            Na frente
        </div>
        <div className="bg-blue-600 h-10 w-20 p-6 absolute m-6 z-16">
            Lado
        </div>

        <div className="bg-green-600 h-10 w-20 p-6 absolute m-8 z-20">
            Atrás
        </div>
      </div>
    </>
  );
}
