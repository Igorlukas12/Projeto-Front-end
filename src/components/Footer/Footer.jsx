import Logo from "../Logo/Logo";
import FooterInformation from "../FooterInformation/FooterInformation";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import { footerInformations } from "../../data/navigation";
import styles from "./Footer.module.css";

const socialLinks = [
  { name: "Facebook", icon: facebookIcon, href: "https://facebook.com" },
  { name: "Instagram", icon: instagramIcon, href: "https://instagram.com" },
  { name: "Twitter", icon: twitterIcon, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.about}>
          <Logo variant="footer" />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className={styles.social}>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                  <img src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerInformations.map((block) => (
          <FooterInformation key={block.title} title={block.title} informations={block.informations} />
        ))}
      </div>

      <div className="container">
        <hr className={styles.divider} />
        <p className={styles.copyright}>© {new Date().getFullYear()} Digital College</p>
      </div>
    </footer>
  );
}
