import React from "react";

import { GRID_WIDTH_PX } from "features/game/lib/constants";

import alguacultureArea from "assets/alguaculture/alguaculture_area.png";
import { Section } from "lib/utils/hooks/useScrollIntoView";
import { AlguacultureZoneOne } from "features/farming/alguaculture/AlguacultureZoneOne";

export const Alguaculture: React.FC = () => {
  return (
    <>
      {/* Main Crop Fields */}
      <div
        style={{
          width: `${GRID_WIDTH_PX * 3.7}px`,
          position: "absolute",
          right: `${GRID_WIDTH_PX * 50}px`,
          top: `${GRID_WIDTH_PX * 44.8}px`,
        }}
        className="absolute"
      >
        {/* Navigation Center Point */}
        <span
          id={Section.Crops}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <img src={alguacultureArea} alt="house" className="w-full" />
        <AlguacultureZoneOne />
      </div>
    </>
  );
};
