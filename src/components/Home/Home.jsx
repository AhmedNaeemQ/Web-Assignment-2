import { useState, useEffect } from "react";

import image from "../../assets/img.png";
import { useUserDetails } from "../../context/UserDetails";
// import coding from "../../assets/coding.gif";

export const Home = () => {
  const [rotation, setRotation] = useState(0);
  const {userDetails} = useUserDetails();

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
        {userDetails.name || "Ahmed Naeem"}
      </h1>
      <h2
        style={{ transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)` }}
        className="font-bigjohn-regular uppercase text-6xl mt-8 leading-[4.5rem] lg:leading-none"
      >
        {" "}
        <span className="font-bigjohn-bold text-white text-outline text-shadow">
          {userDetails.role.split(" ")[0] || "Full-Stack"}
        </span>{" "}
        {userDetails.role.split(" ")[1] || "Web Developer"}
      </h2>
      {/* <img className="absolute left-0 bottom-0 -z-10 h-64" src={coding}/> */}
      <img
        className="absolute right-0 bottom-0 h-80 w-60 image-animation"
        src={image}
      />
    </div>
  );
};
