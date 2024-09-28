import { WorkCard } from "../WorkCard/WorkCard";
import edu from "../../assets/workIcons/education.png";
import exp from "../../assets/workIcons/experience.png";

export const Work = () => {
  const education = [
    {
      title: "Bachelor in Computer Science",
      location: "FAST University",
      date: "08/2021 - Present",
      description: "GPA 3.22 / 4.0",
    },
    {
      title: "FSC (Pre-engineering)",
      location: "KIPS College",
      date: "2020-2021",
      description: null,
    },
    {
      title: "Matriculation",
      location: "KIPS School",
      date: "2018-2019",
      description: null,
    },
  ];

  const experience = [
    {
      title: "Associate Software Engineer",
      location: "Rhodium Tech",
      date: "08/2024 - Present",
      description: "",
    },
    {
      title: "Software Development (Internship)",
      location: "Rhodium Tech",
      date: "07/2024 - 08/2024",
      description: "",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="font-bigjohn-regular text-4xl mb-8">
        Education & Work Experience
      </h1>

      <div className="flex justify-evenly gap-1">
        <WorkCard title="Education" data={education} icon={edu} />
        <WorkCard title="Work Experience" data={experience} icon={exp} />
      </div>
    </div>
  );
};
