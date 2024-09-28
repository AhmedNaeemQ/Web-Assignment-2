import deans from "../../assets/certificationsIcons/deans.png";
import imagineai from "../../assets/certificationsIcons/imagineai.png";
import mlsa from "../../assets/certificationsIcons/mlsa.png";
import sololearn from "../../assets/certificationsIcons/sololearn.png";
import { Card } from "./Card/Card";

export const Achivements = () => {
  const data = [
    {
      logo: deans,
      title: "Dean's List",
      description:
        "Achieved the Dean's List distinction at FAST University for outstanding academic performance in the BS Computer Science program, demonstrating a strong commitment to excellence and consistent high achievement throughout my studies.",
    },
    {
      logo: mlsa,
      title: "Natural Language Processing by MLSA",
      description:
        "Attended and completed a workshop on Natural Language Processing, hosted by Microsoft Learn Student Ambassadors.",
    },
    {
      logo: sololearn,
      title: "Java Programming by Sololearn",
      description:
        "Completed a course on Introduction to Java, demonstrating both theoretical and practical understanding of Java programming.",
    },
    {
      logo: imagineai,
      title: "Python Bootcamp by Imagine AI",
      description:
        "Learnt the basics of Python syntax, data types, and functions, as well as advanced topics such as data analysis and machine learning with scikit-learn.",
    },
  ];

  return (
    <div className="my-12 font-bigjohn-regular">
      <h1 className="text-4xl">Awards & Certifications</h1>

      <div className="flex flex-wrap justify-around mt-8">
        {data.map((data, index) => (
          <Card
            key={index}
            logo={data.logo}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};
