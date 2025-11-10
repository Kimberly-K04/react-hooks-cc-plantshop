import React from "react";
import PlantItem from "./PlantItem";

function PlantList({ plants, onMarkSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantItem
          key={plant.id}
          plant={plant}
          onMarkSoldOut={onMarkSoldOut} // <-- pass the prop down
        />
      ))}
    </ul>
  );
}

export default PlantList;
