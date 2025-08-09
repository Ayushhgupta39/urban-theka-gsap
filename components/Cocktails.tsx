"use client";

import { cocktailLists, mockTailLists } from "@/constants";
import Image from "next/image";
import React from "react";
import "@/lib/gsap";    
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true
            }
        })

        parallaxTimeline.from("#c-left-leaf", {
            x: -100, y: 100
        }).from("#c-right-leaf", {
            
        })
    })
  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        height={100}
        width={200}
        id="c-left-leaf"
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        height={100}
        width={200}
        id="c-right-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular Cocktails: </h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved Mocktails: </h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>{drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
