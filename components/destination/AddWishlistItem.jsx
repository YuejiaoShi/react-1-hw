"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [thumbnail, onThumbnailChange] = useState(
    "/destination/image-europa.png"
  );
  const [customWishlist, setCustomWishlist] = useState("");

  const onAddItemPressed = () => {
    if (!customWishlist) {
      alert("Please enter a name for the wishlist item");
      return;
    }
    onAddWishlistItem(customWishlist, thumbnail);
    setCustomWishlist("");
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={customWishlist}
        onChange={(e) => setCustomWishlist(e.target.value)}
      />

      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={(e) => onThumbnailChange(e.target.value)}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
