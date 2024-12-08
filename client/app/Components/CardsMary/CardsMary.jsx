"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

//TypeIt
export default function Cards() {
  return (
    <>
      <div className="bg-black">
        <section className=" grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-6">
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            {" "}
            <div className=" bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg  shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/1.png"
                alt="Product 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">Pistas</h3>
                <p className="text-lg text-muted-foreground">
                  {" "}
                  Encontre todas as pistas e use-as para descobrir mais sobre o
                  caso
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            <div className="bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/2.png"
                alt="Product 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">Itens</h3>
                <p className="text-lg text-muted-foreground">
                  Use sua Luz negra, para descobrir detalhes escondido...E use
                  sua câmera para ver pistas menores.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            <div className="bg-white border-4 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <Image
                src="/3.png"
                alt="Product 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
              <div className="p-4 bg-background">
                <h3 className="text-3xl font-bold">Prancheta</h3>
                <p className="text-lg text-muted-foreground">
                  Responda todas perguntas feitas em sua prancheta para
                  progredir.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
 
    </>
  );
}
