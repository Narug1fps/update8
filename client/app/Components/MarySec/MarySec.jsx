"use client";
import { motion } from "framer-motion";

export default function MarySec() {
  return (
    <>
      <section className="hidden md:block w-full py-12 md:py-24 lg:py-32 overflow-x-hidden bg-black">
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            {" "}
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/lgipOfqR410?si=dFkxaqcVrMMIYIkk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </motion.div>
          <div className="flex flex-col items-start justify-center space-y-4">
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
            >
              {" "}
              <h1 className="text-white text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Olá detetive!
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
            >
              <p className="text-muted-foreground md:text-xl lg:text-lg text-white">
                Nesse jogo, ao invés de seguir o detetive, VOCÊ É O DETETIVE!
                Investigue tudo tirando suas próprias decisões sobre o caso do
                massacre cometido no BallRoom, descubra a motivação do assassino
                e ache uma solução pra esse caso!
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
      </section>

      <section className="block  md:hidden w-full py-12 md:py-24 lg:py-32">
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
          >
            {" "}
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/lgipOfqR410?si=dFkxaqcVrMMIYIkk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </motion.div>
          <div className="flex flex-col items-start justify-center space-y-4">
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
            >
              {" "}
              <h1 className="text-white text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                Olá detetive!
              </h1>{" "}
            </motion.div>
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2, delay: 0.5 }}
            >
              <p className="text-muted-foreground md:text-xl lg:text-lg text-white">
                Nesse jogo, ao invés de seguir o detetive, VOCÊ É O DETETIVE!
                Investigue tudo tirando suas próprias decisões sobre o caso do
                massacre cometido no BallRoom, descubra a motivação do assassino
                e ache uma solução pra esse caso!
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
      </section>
    </>
  );
}
