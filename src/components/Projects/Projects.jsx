import { useState, useEffect } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import axios from "axios";
import { Card } from "../Card/Card";

import hotel from "../../assets/projects/hotel.png";
import candycrush from "../../assets/projects/candycrush.png";
import food from "../../assets/projects/food.png";
import spaceshooter from "../../assets/projects/spaceshooter.png";
import tictactoe from "../../assets/projects/tictactoe.png";
import catchscore from "../../assets/projects/catchscore.png";

const projectImages = {
  "Hotel Management System": hotel,
  "Tic-Tac-Toe": tictactoe,
  "Food Ordering System": food,
  "Candy Crush": candycrush,
  "Catch Score Game": catchscore,
  "Space Shooter": spaceshooter,
};

const SortableItem = SortableElement(({ project }) => (
  <div style={{ marginBottom: "16px" }}>
    <Card
      title={project.name}
      description={project.description}
      image={project.image}
      link={project.html_url}
    />
  </div>
));

const SortableList = SortableContainer(({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center gap-14">
      {projects.map((project, index) => (
        <SortableItem key={`item-${project.id}`} index={index} project={project} />
      ))}
    </div>
  );
});

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/AhmedNaeemQ/repos"
        );
        const projectsData = response.data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          image: projectImages[repo.name] || projectImages[Object.keys(projectImages)[Math.floor(Math.random() * Object.keys(projectImages).length)]],
        }));
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setProjects((prevProjects) =>
      arrayMoveImmutable(prevProjects, oldIndex, newIndex)
    );
  };

  return (
    <div className="mb-16">
      <h1 className="font-bigjohn-regular text-4xl mb-10">Projects</h1>
      <SortableList projects={projects} onSortEnd={onSortEnd} axis="xy" />
    </div>
  );
};