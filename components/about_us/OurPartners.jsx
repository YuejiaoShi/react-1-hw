import styles from "./OurPartners.module.css";

const partners = [
  { partner: "alphabet", logo: "/business_partners/alphabet-logo.png" },
  { partner: "amazon", logo: "/business_partners/amazon_logo.png" },
  { partner: "CBC", logo: "/business_partners/CBC_Logo_White.png" },
  { partner: "Microsoft", logo: "/business_partners/Microsoft-Logo-white.png" },
  { partner: "nyu", logo: "/business_partners/nyu-logo.png" },
  { partner: "Queens", logo: "/business_partners/QueensLogo_white.png" },
  { partner: "samsung", logo: "/business_partners/samsung-logo.png" },
  { partner: "sodexo", logo: "/business_partners/sodexo-logo.png" },
];

const OurPartners = () => {
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul className={styles.ulContainer}>
        {partners.map((image, index) => (
          <li key={index} className={styles.listItem}>
            <img
              src={image.logo}
              alt={`Logo of ${image.partner}`}
              className={styles.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default OurPartners;
