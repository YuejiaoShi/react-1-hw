"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";

const socialMedias = [
  {
    url: "https://facebook.com",
    title: "Facebook",
    icon: "/socialmedia/facebook-icon.png",
  },
  {
    url: "https://instagram.com",
    title: "Instagram",
    icon: "/socialmedia/instagram-icon.png",
  },
  {
    url: "https://tiktok.com",
    title: "Tiktok",
    icon: "/socialmedia/tiktok-icon.png",
  },
  {
    url: "https://linkedin.com",
    title: "LinkedIn",
    icon: "/socialmedia/linkedin-icon.png",
  },
  {
    url: "https://google.com",
    title: "Google",
    icon: "/socialmedia/google-icon.png",
  },
];

export const Footer = () => {
  const path = usePathname().split("?")[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.footerListPages}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerListMedia}>
          {socialMedias.map((media, index) => (
            <SocialMediaItem
              url={media.url}
              title={media.title}
              icon={media.icon}
              key={`social-media-${index}`}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
