"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect } from "react";

export default function CardNews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "mary",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/1.png",
      link: "news",
    },
    {
      title: "mary2",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/3.png",
      link: "news",
    },
    {
      title: "mary3",
      atualizado: "Atualizado em 19/18/17",
      content:
        "      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur molestiae officiis nemo ratione ea illum, temporibus ducimus, fugit sit sapiente explicabo libero aspernatur rem dolores animi dolorum porro hic.",
      image: "/images/2.png",
      link: "news",
    },
  ];

 

  const nextSlide = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
 

      return (
        <>
          
          {/*pc*/}
          <div className=" hidden lg:block">
          < Swiper 
      spaceBetween={50}
      grabCursor={true}
      slidesPerView={1}
      breakpoints={{768: {slidesPerView: 3,}}}
      centeredSlides={true}
      loop={true}
      className="m-[5vw]  "
    >
     
      <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/1.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry</h1>
          
       
        </div>
        </Link>
      </SwiperSlide> <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/2.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry2</h1>
          
       
        </div>
        </Link>
      </SwiperSlide> <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/3.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry3</h1>
          
       
        </div>
        </Link>
      </SwiperSlide> <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/4.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry4</h1>
          
       
        </div>
        </Link>
      </SwiperSlide> <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/5.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry5</h1>
          
       
        </div>
        </Link>
      </SwiperSlide> <SwiperSlide className=" flex border-box text-white border-2 rounded-lg ">
        <Link href="/news">
        <Image
          className="rounded-lg inline "
          alt=""
          width={1920}
          height={1080}
          src="/images/6.png"
        />{" "}
       
        <div className="">
        <h1 className="text-md inline absolute bottom-2 uppercase left-2 block md:text-2xl ">MAry6</h1>
          
       
        </div>
        </Link>
      </SwiperSlide>
  
    </Swiper>
  
          </div>
          {/* mobile */}
          <div className=" block lg:hidden">
            <div className="flex items-center justify-center m-10   ">
              <div className="relative flex items-center">
                <button
                  onClick={prevSlide}
                  className="absolute left-[-45px] p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeftIcon className="w-6 h-6 text-primary" />
                </button>
                <div className="w-[300px] h-full overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      width: `${cards.length * 300}px`,
                      transform: `translateX(-${currentIndex * 300}px)`,
                    }}
                  >
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        className="h-full w-[300px] bg-black border-2 rounded-lg"
                      >
                        <Image
                          width={1920}
                          height={1080}
                          className="rounded-lg "
                          alt=" "
                          src={card.image}
                        />
                        <h1 className="text-red-600 text-xl font-bold mt-4 ml-4">
                          {card.title}
                        </h1>
                        <h2 className="ml-3 text-white opacity-50">
                          {card.atualizado}
                        </h2>
                        <p className="text-white m-4 text-sm">{card.content}</p>
                        <Link
                          href="/news"
                          class="group  btn undefined"
                        >
                          <span className="h-10 m-1 bg-red-600 w-72 rounded-lg text-white  relative inline-flex overflow-hidden items-center justify-center">
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-20  group-hover:skew-y-12">
                              See More
                            </div>
                            <div className="absolute  translate-y-20 skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                              See More
                            </div>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={nextSlide}
                  className="absolute right-[-45px]  p-2 text-white hover:animate-bounce transition-colors duration-75 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentIndex === cards.length - 1}
                >
                  <ChevronRightIcon className="w-6 h-6 text-primary" />
                </button>
              </div>
            </div>
          </div>
        
        </>
    
 );
}
