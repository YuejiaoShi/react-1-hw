import styles from "./OurCrew.module.css";

const crew = [
  {
    name: "Sarah Vega",
    title: "Captain",
    duties:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    image: "/crew/Sarah-Vega.png",
  },
  {
    name: "Leo Redding",
    title: "Dr.",
    duties:
      "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    image: "/crew/Leo-Redding.png",
  },
  {
    name: "Hana Lee",
    title: "Chief Engineer",
    duties:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    image: "/crew/Hana-Lee.png",
  },
  {
    name: "Alex Santos",
    title: "Mission Specialist",
    duties:
      "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    image: "/crew/Alex-Santos.png",
  },
  {
    name: "Maya Patel",
    title: "Crew Member",
    duties:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    image: "/crew/Maya-Patel.png",
  },
];

const CrewMember = ({ name, image, title, duties }) => {
  return (
    <li className={styles.listItem}>
      <img src={image} alt={`Image of ${name}`} className={styles.image} />
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.duties}>{duties}</p>
    </li>
  );
};

const OurCrew = () => {
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <ul className={styles.ulContainer}>
        {crew.map((member, index) => (
          <CrewMember
            key={index}
            name={member.name}
            image={member.image}
            title={member.title}
            duties={member.duties}
          />
        ))}
      </ul>
    </>
  );
};
export default OurCrew;
