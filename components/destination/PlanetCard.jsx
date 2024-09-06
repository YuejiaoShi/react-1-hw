import styles from "@/components/destination/destination.module.css";
import { useState } from "react";
function PlanetCard({
  onAddOrRemovePlanet,
  isSelected,
  planetName,
  description,
  thumbnail,
}) {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={`Thumbnail of ${planetName}`}
      />
      <div className={styles.planetDescription}>
        <h2>
          {planetName} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => {
          onAddOrRemovePlanet(planetName);
        }}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
}

export default PlanetCard;
