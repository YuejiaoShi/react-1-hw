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

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();
    fetchDailyImg();
  }, []);

  useEffect(() => {
    console.log(roverPhoto);
  }, [roverPhoto]);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <img src={dailyImg.url} />
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* TASK - React 1 week 3 */}
          {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}
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
