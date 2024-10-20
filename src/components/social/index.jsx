import { Instagram, Github } from "lucide-react";
import classes from "./social.module.css";

export default function Social() {
  return (
    <div className={`${classes.social__container}`}>
      <p className={`${classes.social__text}`}>Socials-</p>
      <a href="https://www.instagram.com/harshtheatomicpotato/">
        <Instagram
          size={"40px"}
          strokeWidth={1.5}
          className={`${classes.social__icon}`}
        />
      </a>
      <a href="https://github.com/Uncannypotato69">
        <Github
          size={"40px"}
          strokeWidth={1.5}
          className={`${classes.social__icon}`}
        />
      </a>
    </div>
  );
}
