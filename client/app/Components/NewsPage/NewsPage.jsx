"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function NewsPage() {
  return (
    <div className="">
      <div className="bg-white my-5 mx-10 lg:my-20 lg:mx-40 w-[80%] md:mx-20 h-full md:p-8 p-2">
        <div className="">
          <div className="container">
            <div className="flex p-[30px] border-box relative justify-start items-end">
              <Image width={1920} height={1080} alt=" " src="/images/1.png" />
              <div className=" block bg-red-600 absolute top-0 left-0 after:w-[7vw] after:h-[11px] after:bg-red-600 after:block after:content-[''] before:content-[''] after:absolute  before:w-[11px] before:h-[7vw] before:bg-red-600 before:block before:absolute "></div>
              <div className="block  bg-red-600 absolute bottom-0 right-0 rotate-180  after:w-[7vw] after:h-[11px] after:bg-red-600 after:block after:absolute after:content-[''] before:content-[''] before:w-[11px] before:h-[7vw] before:bg-red-600 before:block before:absolute "></div>
              <div className="absolute text-white mb-[5vw] ml-[20vw]  before:content-[''] before:block before:bg-red-600 before:w-[0.8vw] before:h-full before:absolute before:top-0 before:left-[-20px]">
                <h1 className="text-[2vw] uppercase font-bold ">
                  mary: o titulo
                </h1>
                <p className="opacity-50 text-[1.2vw]">Atualizado 22/22/22</p>
              </div>
            </div>
          </div>
          <p className=" md:my-5 md:mx-10 my-2 mx-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eos sequi laboriosam vel, odio quam expedita sapiente maiores ipsum
            quo cum asperiores modi sit ea sed totam quod facere distinctio.
            Voluptate rerum illo repellat. A architecto assumenda qui dolore
            facilis accusantium eveniet ipsam nemo alias itaque suscipit modi
            nisi natus veniam voluptas, minus quia explicabo deleniti molestias?
            Mollitia, similique nihil? Natus, modi! Impedit iusto aliquid ipsam
            reiciendis repudiandae, ex voluptatem modi ea voluptas sapiente,
            nostrum vero molestias nobis at cupiditate eos quidem? Facere
            facilis repellendus deleniti illum quae! Nobis, voluptas. Rerum
            totam explicabo error vel nam unde amet, odit autem eaque eveniet
            natus dolorem harum recusandae iusto quaerat at tempora commodi
            ducimus dignissimos! Dolore saepe maiores eos porro soluta impedit.
            Quaerat debitis incidunt fuga voluptates maiores unde laudantium
            amet cum. Voluptates aliquid maiores est praesentium magni. Id harum
            asperiores, molestias ab architecto illo aut consequuntur corrupti,
            suscipit perferendis mollitia inventore. Repellendus culpa animi
            cumque! Veritatis nobis beatae soluta eos excepturi, numquam alias
            quia fugiat iusto delectus, quas doloribus. Deserunt, alias iure
            quos dolorum sequi ratione totam sit accusamus illum impedit! Illum,
            eum aliquid? Iure tempore exercitationem ipsum ullam eius fuga iusto
            et dignissimos aliquid quae dolore numquam non, sunt facere
            repudiandae? Repellat maxime, tenetur debitis nobis sunt cum beatae
            fuga. Dolor aspernatur dicta recusandae, vero, eum sit dolorum
            obcaecati saepe necessitatibus non quod eos pariatur illo molestiae
            quam at odit dolores. Temporibus vitae harum, ad odio sint
            blanditiis quas suscipit. Temporibus odio quae cupiditate alias
            excepturi, eaque asperiores, odit, ut harum est obcaecati
            accusantium deleniti porro. Delectus ab error dolore laudantium
            quaerat, nesciunt quae voluptatem qui inventore, assumenda dicta ad!
            Vel atque, harum vitae voluptatum maxime accusamus voluptatem ab
            asperiores est omnis eaque placeat iure ea enim illum obcaecati
            corrupti laboriosam reprehenderit accusantium, animi corporis. Rerum
            sint aut consectetur nihil! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde laudantium quibusdam expedita quia possimus
            doloremque similique, distinctio autem facere aperiam itaque error
            sit ab. Sit culpa aperiam quod vitae alias! Similique voluptas id,
            nisi distinctio sed obcaecati dicta incidunt voluptate expedita aut,
            repellat tenetur assumenda, accusantium sequi officia blanditiis
            quaerat! Officia tenetur alias assumenda voluptatem odit ratione
            possimus minus commodi. Eligendi id quos laboriosam sint quae magni
            saepe facilis ex perspiciatis, corrupti perferendis. Itaque
            perferendis vitae animi vero assumenda dolor? Commodi cumque iure
            neque sint numquam ipsam sequi, aliquam cum. Deserunt odit amet, ad
            quaerat aliquid exercitationem, accusantium nulla voluptas,
            recusandae temporibus delectus rem fugit necessitatibus consequatur
            voluptates tempora nam autem? Aliquid quibusdam animi a qui
            voluptatem! Dolor, accusantium alias.
          </p>
          <button className="bg-red-600 rounded-lg text-white w-[97.3%] md:m-4 h-[50px]  m-1">
            <a href="/">See More</a>
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="lg:text-3xl text-2xl text-white bold my-5 ml-[10vw]">
          Ver Mais
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600  via-red-600 via-red-600 to-black"></div>
      </div>
    </div>
  );
}
