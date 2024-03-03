import React from "react";
import style from "./card.module.scss";
import Image from "next/image";

// import { FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
const levelDiscription = [
  "I haven't used yet.",
  "I used in some lecture, or finished tutorial.",
  "I can use with some references, or teachers.",
  "I can make apps with this.",
  "I know this in detail.",
];

interface CardProps {
  src?: string;
  level: number;
  children: string;
}

export const LanguageCard: React.FC<CardProps> = ({ src, level, children }) => (
  <div className={style.card}>
    <div className={style.card_ring}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100"
        width="100"
        viewBox="0 0 100 100"
        data-value="20"
      > */}
        {/* <path
          className="bg"
          stroke="#ccc"
          d="M41 149.5a77 77 0 1 1 117.93 0"
          fill="none"
        /> */}
        {/* <path
          className="meter"
          stroke="#09c"
          d="M41 149.5a77 77 0 1 1 117.93 0"
          fill="none"
          strokeDasharray="350"
          strokeDashoffset={(350 / 4) * (4 - level)}
        /> */}
      {/* </svg> */}
      {src ? (
        <Image src={src} width={100} height={100} alt={`icon of ${children}`} />
      ) : (
        <span>{children}</span>
      )}
    </div>
    {/* <div className={style.card_hover}>
      <h4>{level}</h4>
      <div>{levelDiscription[Math.floor(level)]}</div>
    </div> */}
  </div>
);
