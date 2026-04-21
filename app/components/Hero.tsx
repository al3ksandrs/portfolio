"use client";

import Image from "next/image";
import { useState } from "react";
import profilePic from "../../public/aleksandrs-pfp.png";
import Spinner from "./Spinner";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
      <div className="relative w-40 h-40 md:w-56 md:h-56">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-muted">
            <Spinner />
          </div>
        )}
        <Image
          src={profilePic}
          alt="Aleksandrs Soskolainens"
          width={224}
          height={224}
          className={`w-40 h-40 md:w-56 md:h-56 rounded-xl ring-2 ring-primary/15 object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          priority
          onLoad={() => setLoaded(true)}
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Aleksandrs Soskolainens</h1>
        <p className="text-lg text-primary">Software Engineer</p>
      </div>
      <p className="text-foreground/80 max-w-lg">
        Fourth-year Computer Science student at Amsterdam University of Applied Sciences. Passionate about building impactful software and learning new technologies.
      </p>
    </section>
  );
}
