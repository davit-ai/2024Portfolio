import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/davitkhanal/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/davitkhanal-ai",
      label: "GITHUB",
      Icon: SiGithub,
    },
  ];

  return (
    <nav>
      <h1>Davit・khanal • アイ</h1>
    </nav>
  );
}
