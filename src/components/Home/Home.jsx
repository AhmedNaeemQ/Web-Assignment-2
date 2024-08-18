import { useState, useEffect } from "react";

import image from "../../assets/img.png";

export const Home = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rotationAngle = window.scrollY / 10;
      if (rotationAngle <= 25) setRotation(rotationAngle);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-8 pb-60 xl:h-screen relative">
      <h1
        style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)` }}
        className="font-bigjohn-bold uppercase text-7xl mb-8 mt-32 text-outline text-shadow text-white"
      >
        Ahmed Naeem
      </h1>
      <h2
        style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)` }}
        className="font-bigjohn-regular uppercase text-6xl mt-8 leading-[4.5rem] lg:leading-none"
      >
        {" "}
        <span className="font-bigjohn-bold text-white text-outline text-shadow">
          Full-Stack
        </span>{" "}
        Web Developer
      </h2>
      <img className="absolute right-0 bottom-0 h-80 w-60 image-animation" src={image} />
    </div>
  );
};
