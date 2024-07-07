import React from "react";
import "./RightPartial.css";
import OpenSection from "../section/right-section/opening-section";
import PengantinSection from "../section/right-section/pengantin-section";
import DateSection from "../section/right-section/date-section";
import GallerySection from "../section/right-section/galery-section";

function RightPartial() {
  return (
    <div className="w-full">
      <OpenSection />
      <PengantinSection />
      <DateSection />
      <GallerySection />
    </div>
  );
}

export default RightPartial;
