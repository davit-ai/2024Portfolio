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
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-sm font-bold underline underline-offset-8 decoration-green-500 -rotate-6 hover:scale-150 transition-all">
        <a href="/">Davit・khanal • アイ</a>
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
