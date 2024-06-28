import React from "react";
import "./RightPartial.css";
function RightPartial() {
  return (
    <div className="w-full">
      <div className="h-[100vh] w-full bg-[#423740] relative pt-16">
        <div className="relative h-56 w-[400px] mx-auto">
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

        <div className="mt-16 relative">
          <div className="absolute left-[25%] h-48 w-48 bg-slate-500 rounded-full shadow-lg shadow-yellow-300"></div>
          <div className="absolute left-[45%] top-10 h-48 w-48 bg-slate-300 rounded-full shadow-lg shadow-yellow-300"></div>
        </div>
      </div>
    </div>
  );
}

export default RightPartial;
