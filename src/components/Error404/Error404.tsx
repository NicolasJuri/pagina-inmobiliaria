import Link from 'next/link';


export function Error404() {

  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Parece que has encontrado la puerta a la gran nada
              </h1>
              <p className="my-2 mb-7 text-secondary">
                ¡Lo siento! Por favor, visita nuestra página de inicio para llegar a donde necesitas ir.
              </p>
              <Link href="/"
                className="px-6 py-5 mt-7 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
              >
                Llévame allí
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="Grupo" />
      </div>
    </div>
  );
}
