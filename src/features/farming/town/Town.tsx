import React from "react";

import { GRID_WIDTH_PX } from "features/game/lib/constants";
import { Bakery } from "features/farming/bakery/Bakery";
import { Blacksmith } from "features/farming/blacksmith/Blacksmith";
import { Market } from "features/farming/crops/components/Market";
import { Mail } from "features/farming/mail/Mail";
import { Section } from "lib/utils/hooks/useScrollIntoView";

import goblinCarry from "assets/npcs/goblin_carry.gif";
import { GoblinVillageEntry } from "./components/GoblinVillageEntry";

export const Town: React.FC = () => {
  return (
    <div
      id={Section.Town}
      className="z-10 absolute"
      // TODO some sort of coordinate system
      style={{
        width: `${GRID_WIDTH_PX * 34.3}px`,
        height: `${GRID_WIDTH_PX * 9}px`,
        right: 0,
        top: `calc(50% - ${GRID_WIDTH_PX * 18}px)`,
      }}
    >
      <Market />
      <Bakery />
      <Blacksmith />
      <Mail />

      <GoblinVillageEntry />
    </div>
  );
};
