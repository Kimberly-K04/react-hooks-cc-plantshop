import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err));
  }, []);

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Mark plant as sold out
  function handleMarkSoldOut(id) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === id) {
        return { ...plant, inStock: false };
      }
      return plant;
    });
    setPlants(updatedPlants);
  }

  // Filter plants by search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          id="search"
          placeholder="Type a name to search..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <PlantList plants={filteredPlants} onMarkSoldOut={handleMarkSoldOut} />
    </main>
  );
}

export default PlantPage;
