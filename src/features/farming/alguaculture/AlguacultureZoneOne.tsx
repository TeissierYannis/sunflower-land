import React from "react";

import { GRID_WIDTH_PX } from "features/game/lib/constants";

import { AlguacultureField } from "./AlguacultureField";

export const AlguacultureZoneOne: React.FC = () => {
  //const { selectedItem } = useContext(Context);

  return (
    <div
      className="absolute flex justify-center flex-col "
      style={{
        width: `${GRID_WIDTH_PX * 2.62}px`,
        height: `${GRID_WIDTH_PX * 2.93}px`,
        left: `${GRID_WIDTH_PX * 0.6}px`,
        top: `${GRID_WIDTH_PX * 0.34}px`,
      }}
    >
      {/* Top row */}
      <div className="flex justify-between">
        <AlguacultureField selectedItem={"Algerian Flag"} fieldIndex={22} />
        <AlguacultureField selectedItem={"Algerian Flag"} fieldIndex={23} />
      </div>
      {/* Bottom row */}
      <div className="flex justify-center">
        <AlguacultureField selectedItem={"Algerian Flag"} fieldIndex={24} />
      </div>
    </div>
  );
};
