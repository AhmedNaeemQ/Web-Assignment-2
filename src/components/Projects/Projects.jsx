import { Card } from "../Card/Card";

import hotel from "../../assets/projects/hotel.png";
import candycrush from "../../assets/projects/candycrush.png";
import food from "../../assets/projects/food.png";
import spaceshooter from "../../assets/projects/spaceshooter.png";
import tictactoe from "../../assets/projects/tictactoe.png";
import catchscore from "../../assets/projects/catchscore.png";

export const Projects = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description:
        "Explore the Hotel Management System, a project developed with HTML, CSS, JavaScript, and SQL Server for seamless management of various aspects.",
      image: hotel,
      link: "https://github.com/AhmedNaeemQ/Hotel-Management-System",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Enjoy interactive gameplay against a friend. Simple, elegant UI. Clone, ...",
      image: tictactoe,
      link: "https://github.com/AhmedNaeemQ/Tic-Tac-Toe",
    },
    {
      title: "Food Ordering System",
      description:
        "Savor the convenience of my Food Ordering System, a Java JDK desktop application crafted with Apache NetBeans. Seamlessly navigate through a user-friendly interface, explore a diverse …",
      image: food,
      link: "https://github.com/AhmedNaeemQ/Food-Ordering-System",
    },
    {
      title: "Candy Crush",
      description:
        "Indulge in the classic match-three fun with Candy Crush in the console! Developed in C++, swap candies to match three colors and score points. Achieve a score of 100 to win.",
      image: candycrush,
      link: "https://github.com/AhmedNaeemQ/Candy-Crush",
    },
    {
      title: "Catch Score Game",
      description:
        "Dive into retro gaming! Catch points, avoid bombs in this x8086 Assembly game. Race against a 2-minute timer, compete for high scores. Nostalgic and timeless fun! #Assembly #ClassicGaming",
      image: catchscore,
      link: "https://github.com/AhmedNaeemQ/Catch-Score-Game",
    },
    {
      title: "Space Shooter",
      description:
        "Experience classic space shooter action in this C++ console game. Destroy aliens for points, with bigger ones offering more. Use 'A' and 'D' to move, 'S' to shoot. Manage high scores and compete for the top spot in this thrilling cosmic adventure! 🚀💥",
      image: spaceshooter,
      link: "https://github.com/AhmedNaeemQ/Space-Shooter",
    },
  ];

  return (
    <div className="mb-16">
      <h1 className="font-bigjohn-regular text-4xl mb-10">Projects</h1>
      <div className="flex flex-wrap justify-center gap-14">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};
