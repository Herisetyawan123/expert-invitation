import React from "react";

function LeftPartial() {
  return (
    <div className="w-full h-full bg-[url('/wallpaper.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center p-20 left-side relative">
      <div className="bg-[#423740] bg-opacity-80 rounded-xl p-14 w-full h-full relative">
        <div className="box-couple w-64 h-96 rounded-t-full bg-[#b08a40] mx-auto mb-10"></div>
        <div className="text-header font-['Tangerine'] font-bold text-3xl xl:text-6xl text-center text-[#b08a40]">
          <h1>Anhar Muchlis</h1>
          <h1>&</h1>
          <h1>Deana Nathania Damyanti</h1>
        </div>
        <img
          src="/border.png"
          className="absolute w-full h-full left-0 top-0 scale-95"
          alt=""
        />
      </div>
    </div>
  );
}

export default LeftPartial;
