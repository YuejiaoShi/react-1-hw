"use client";

import React, { useState, useEffect } from "react";
import RoverPhoto from "@/components/nasa_collaboration/RoverPhoto";
import styles from "../../components/nasa_collaboration/nasa_collaboration.module.css";
const API_KEY = "jZ3XQ22AOCq4X1D1Qz2XWfE4I82l1C6uZETbQWn8";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      try {
        const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto);
        if (!roverPhotoResponse.ok)
          throw new Error("Error fetching rover photos");
        const roverPhotoData = await roverPhotoResponse.json();
        setRoverPhoto(roverPhotoData);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchDailyImg = async () => {
      try {
        const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
        if (!dailyImgResponse.ok)
          throw new Error("Error fetching astronomy picture");
        const dailyImgData = await dailyImgResponse.json();
        setDailyImg(dailyImgData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRoverPhotos();
    fetchDailyImg();
  }, []);

  useEffect(() => {
    console.log(dailyImg);
    console.log(roverPhoto);
  }, [roverPhoto, dailyImg]);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>
            Astronomy Picture of the day
          </h2>
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <div className={styles.astronomyPicContainer}>
              <img
                src={dailyImg.url}
                alt={dailyImg.title}
                className={styles.astronomyPicOfTheDayImg}
              />
            </div>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.roverPhotoContainer}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
