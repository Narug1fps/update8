"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

//" rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
export default function CardsGames() {
  return (
    <>
      <main className=" bg-black z-10 p-12 ">
        <div className="md:mb-4 w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
        <div className=" flex min-h-screen items-center justify-center  ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1.5 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
            >
              {" "}
              <div className="border-2 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72 ">
                  <Image width={288} height={384} src="/Block.png" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className=" absolute inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="  mb-32 font-dmserif text-3xl font-bold text-white">
                    Lançamento Futuro
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Não Disponivel
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black active:shadow-[0px_0px_20px_10px_#fff]">
                    See More{" "}
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
            >
              {" "}
              <div className="border-2 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <Image width={288} height={384} src="/Mary card.png" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Mary
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Coloque Mary na sua wish list da Steam para ficar atento
                    para pegar o jogo no lançamento
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black">
                    <Link href="/games/mary">See More </Link>
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
            >
              <div className="border-2 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <Image width={288} height={384} src="/Block.png" alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="mb-32 font-dmserif text-3xl font-bold text-white">
                    Lançamento Futuro
                  </h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Não Disponivel
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black active:shadow-[0px_0px_20px_10px_#fff]">
                    See More{" "}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
       
        
      </main>
    </>
  );
}
