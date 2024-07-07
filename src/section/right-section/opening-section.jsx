import React from "react";

function OpenSection() {
  return (
    <div className="h-[100vh] w-full bg-[#423740] relative pt-16 bg-[url('/texture.png')]">
      <div className="relative h-56 w-[400px] mx-auto" data-aos="fade-in">
        <img
          src="/name.png"
          width={400}
          alt=""
          className="absolute -z-0 h-full"
        />
        <div className="z-20 relative top-[50%] -translate-y-[50%]">
          <h1 className="text-6xl font-['Tangerine'] text-center text-[#d7c1a0] font-bold">
            Wedding
          </h1>
        </div>
      </div>

      <div className="mt-16 relative h-56">
        <div className="absolute left-[20%] h-48 w-48 bg-slate-500 bg-[url('/pria.jpeg')] bg-cover bg-center rounded-full shadow-lg shadow-yellow-300"></div>
        <div className="absolute left-[45%] top-10 h-48 w-48 bg-slate-300 bg-[url('/wanita.jpeg')] bg-cover bg-center rounded-full shadow-lg shadow-yellow-300"></div>
      </div>

      <div className="mt-14 rounded-md w-[80%] text-center bg-[#3c4250] mx-auto p-5">
        <p className="text-white italic text-sm">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eum
          harum ducimus minima, excepturi suscipit dolore nemo animi eveniet
          magni dolorum nulla quae repellendus molestias! Dolor iure quas ut
          labore?"
        </p>
      </div>
    </div>
  );
}

export default OpenSection;
