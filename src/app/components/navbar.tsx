import Link from "next/link";
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
    <nav className="py-10 flex justify-between">
      <h1 className="text-sm font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Davit・khanal • アイ
      </h1>
      <div>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
