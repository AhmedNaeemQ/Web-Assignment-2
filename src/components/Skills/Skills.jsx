import react from "../../assets/skillsIcon/react.gif";
import cpp from "../../assets/skillsIcon/c++.png";
import css from "../../assets/skillsIcon/css.png";
import express from "../../assets/skillsIcon/express.png";
import github from "../../assets/skillsIcon/github.png";
import html from "../../assets/skillsIcon/html.png";
import java from "../../assets/skillsIcon/java.png";
import js from "../../assets/skillsIcon/js.png";
import linux from "../../assets/skillsIcon/linux.png";
import mysql from "../../assets/skillsIcon/mysql.png";
import netbeans from "../../assets/skillsIcon/netbeans.png";
import node from "../../assets/skillsIcon/node.png";
import postgresql from "../../assets/skillsIcon/postgresql.png";
import prisma from "../../assets/skillsIcon/prisma.png";
import python from "../../assets/skillsIcon/python.png";
import reactnative from "../../assets/skillsIcon/reactnative.png";
import redux from "../../assets/skillsIcon/redux.png";
import sqlserver from "../../assets/skillsIcon/sqlserver.png";
import sql from "../../assets/skillsIcon/sql.png";
import tailwindcss from "../../assets/skillsIcon/tailwindcss.png";
import typescript from "../../assets/skillsIcon/typescript.png";
import vscode from "../../assets/skillsIcon/vscode.png";
import windows from "../../assets/skillsIcon/windows.png";
import code from "../../assets/skillsIcon/code.gif";

export const Skills = () => {
  const programmingLanguages = [
    { name: "C++", icon: cpp },
    { name: "Java", icon: java },
    { name: "JavaScript", icon: js },
    { name: "Python", icon: python },
    { name: "TypeScript", icon: typescript },
    { name: "SQL", icon: sql },
  ];

  const frameworksLibraries = [
    { name: "React", icon: react },
    { name: "Express", icon: express },
    { name: "Node.js", icon: node },
    { name: "Redux", icon: redux },
    { name: "React Native", icon: reactnative },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Prisma", icon: prisma },
  ];

  const toolsPlatforms = [
    { name: "GitHub", icon: github },
    { name: "VS Code", icon: vscode },
    { name: "NetBeans", icon: netbeans },
    { name: "Linux", icon: linux },
    { name: "Windows", icon: windows },
  ];

  const databases = [
    { name: "MySQL", icon: mysql },
    { name: "PostgreSQL", icon: postgresql },
    { name: "SQL Server", icon: sqlserver },
  ];

  const sections = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Frameworks/Libraries", skills: frameworksLibraries },
    { title: "Tools/Platforms", skills: toolsPlatforms },
    { title: "Databases", skills: databases },
  ];

  return (
    <div className="p-4 my-8">
      <h1 className="font-bigjohn-regular text-4xl mb-4">Skills</h1>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8 text-center">
          <h2 className="font-bigjohn-regular text-xl mb-4">
            {section.title}
          </h2>
          <div className="flex align-middle items-center justify-center flex-wrap gap-4">
            {section.skills.map((skill, index) => (
              <div key={index} className="flex-col group w-20 m-2">
                <div className="flex justify-center font-bigjohn-regular translate-y-10 transition-all group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-700 text-center select-none">
                  {skill.name}
                </div>
                <img
                  className="h-22 hover:cursor-pointer"
                  src={skill.icon}
                  alt={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
