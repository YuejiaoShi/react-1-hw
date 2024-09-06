import styles from "./Footer.module.css";
function SocialMediaItem({ url, title, icon }) {
  return (
    <li className={styles.socialListItem}>
      <a href={url}>
        <img src={icon} alt={""} className={styles.socialIcon} />
        <span>{title}</span>
      </a>
    </li>
  );
}
export default SocialMediaItem;
