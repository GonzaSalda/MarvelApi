import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Banner = () => {
  return (
    <>
      <div className=" container h-screen mx-auto mb-20 relative flex  ">
        <div className="flex-1 max-h-[300px] max-w-[420px] my-auto mx-8 md:mx-16 relative z-10">
          <h1 className="text-3xl uppercase font-semibold  mb-4">
            Explora todos los{" "}
            <span className="text-[#AC3433] text-4xl">personajes de Marvel</span>
          </h1>
          <div className="flex flex-col justify-center gap-y-2">
          <p className="text-sm font-semibold">
            Mira ahora la nueva temporada de Loki, desde disney plus!
          </p>
          <a href="https://www.disneyplus.com/es-ar/series/loki/6pARMvILBGzF" className="inline-flex self-center md:self-start cursor-pointer rounded-2xl bg-[#AC3433] text-white p-2 text-sm" target="_blank" >Mirar ahora</a>
          </div>
          
        </div>
        <div className="flex-1 absolute w-full h-full rounded-full bg-bgLoki bg-no-repeat bg-contain bg-start mix-blend-darken opacity-30"></div>
        <div className="flex-1 hidden md:block">
          <div className="container-img"></div>
          <Link to={`/character/1009407`}>
            <img
              className="loki"
              src="https://css-layout-seven.vercel.app/assets/img/avengers.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
