import Header from "@/components/Portfolio/Header";

export default function Timeline() {
  return (
    <>
      <Header />
      <div className="container mx-auto w-full h-screen flex">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 pt-10">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Ago - 2015 - Nov - 2015
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Estagiário | Fisiogames
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Trainee Developer Back End - Laravel
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Nov - 2019 - Ago - 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Mensageiro Tecnologia
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvedor fullstack javascript
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvimento de chatbot para whatsapp
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Nov - 2021- Fev - 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Agência Novi
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              React / NextJS Developer
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvimento de plataforma EAD
            </p>
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Maio 2023 - Hoje
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              EbookMaker
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              React / NextJS Developer / NodeJS Developer
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Desenvolvimento de plataforma para criação de conteúdo e livros
              com IA
            </p>
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cursos
            </h3>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jan - 2019 - Abr - 2019
            </time>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Ecommerce real time com Node.js e Adonis Framework
            </p>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Abr - 2023 - Jul - 2023
            </time>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              NestJS do Zero com TypeORM, Mongoose, Prisma e Swagger
            </p>
          </li>

          <li className="mb-10 ml-4 pb-5">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Habilidades
            </h3>

            <ul>
              <li>
                MongoDB, Javascript, Typescript, NodeJS, Git, HTML e CSS, Mysql, NextJS,
                NestJS, ReactJS, ElectronJS
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </>
  );
}
