"use client";

import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: "nav",
      start: "bottom top",
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <nav>
      <div>
        <Link href={"#home"} className="flex items-center gap-2">
          <p>Urban <span className="font-yatra">ठेका</span></p>
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={100}
            width={100}
            className="object-cover size-9"
          />
        </Link>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
