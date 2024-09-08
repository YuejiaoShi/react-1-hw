"use client";

import { useEffect, useState } from "react";

import PlanetCard from "../../components/destination/PlanetCard";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";

const planets = [
  {
    planetName: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    planetName: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    planetName: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    planetName: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const [wishList, setWishList] = useState([]);

  const numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((preSelectedList) => {
      if (preSelectedList.includes(name)) {
        return preSelectedList.filter((planet) => planet !== name);
      } else {
        return [...preSelectedList, name];
      }
    });
  };

  function handleAddWishlistItem(name, thumbnail) {
    const isInWithList = wishList.some((wish) => wish.name === name);
    if (isInWithList) {
      console.error("Item already in wishlist");
      return;
    } else {
      setWishList((prevWishList) => {
        return [...prevWishList, { name, thumbnail }];
      });
    }
  }
  // check wishList items when wishList change
  useEffect(() => {
    console.log(wishList);
  }, [wishList]);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} in your wishlist</p>
          )}
          <b>List coming soon after lesson 3!</b>

          <AddWishlistItem onAddWishlistItem={handleAddWishlistItem} />
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet, index) => (
            <PlanetCard
              onAddOrRemovePlanet={onAddOrRemovePlanet}
              isSelected={selectedPlanets.includes(planet.planetName)}
              planetName={planet.planetName}
              description={planet.description}
              thumbnail={planet.thumbnail}
              key={`planets-${index}`}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
