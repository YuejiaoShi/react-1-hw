import OurCrew from "../../components/about_us/OurCrew";
import OurPartners from "../../components/about_us/OurPartners";
import OurValues from "../../components/about_us/OurValues";
import styles from "./page.module.css";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className={`card ${styles.sectionContainer}`}>
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className={`card ${styles.sectionContainer}`}>
          <h2>Our Crew</h2>
          <OurCrew />
        </section>
        <section className={`card ${styles.sectionContainer}`}>
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
