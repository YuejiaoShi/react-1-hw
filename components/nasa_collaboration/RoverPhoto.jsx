import styles from "./nasa_collaboration.module.css";
function RoverPhoto({ src, date, roverName }) {
  return (
    <div className={styles.roverPhotoItem}>
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={`Photo taken by Rover ${roverName} on ${date}`}
      />
    </div>
  );
}

export default RoverPhoto;
