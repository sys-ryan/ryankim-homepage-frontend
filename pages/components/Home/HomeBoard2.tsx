import { useEffect, useState } from "react";
import LogoContainer from "../Container/LogoContainer";
import AWSLogo from "../icons/AWSLogo";
import DockerLogo from "../icons/DockerLogo";
import GithubLogo from "../icons/GithubLogo";
import MysqlLogo from "../icons/MysqlLogo";
import NestjsLogo from "../icons/NestjsLogo";
import NextjsLogo from "../icons/NextjsLogo";
import ReactLogo from "../icons/ReactLogo";
import RedisIcon from "../icons/RedisIcon";
import ThreeDotsLogo from "../icons/ThreeDotsLogo";
import TypeORMIcon from "../icons/TypeORMIcon";

export interface SelectedTechinque {
  title: string;

  proficiency: number;

  experience: string[];

  selected: string;

  logo: JSX.Element;
}

const defaultSelectedTechnique: SelectedTechinque = {
  title: "NestJS",

  proficiency: 4,

  experience: ["exp1", "exp2", "exp3"],

  selected: "nestjs",

  logo: <NestjsLogo className="tech-icon" />,
};

// TODO: backend 에서 technique info fetch
const techInfo: SelectedTechinque[] = [];

const HomeBoard2 = () => {
  const [selectedTechnique, setSelectedTechnique] =
    useState<SelectedTechinque>(defaultSelectedTechnique);

  const getProficiencyStart = (count: number): string => {
    let result = "";

    for (let i = 0; i < count; i++) {
      result += "★";
    }

    for (let i = 0; i < 5 - count; i++) {
      result += "☆";
    }

    return result;
  };

  const iconSelectHandler = (techInfo: SelectedTechinque) => {
    setSelectedTechnique(techInfo);
  };

  return (
    <section className="h-screen grid grid-cols-1 grid-rows-4">
      <div className="bg-white row-span-2 p-3 flex flex-col">
        <p className="text-sm">Take a look at my techniques and interests.</p>
        <div className="h-full grid grid-cols-4 grid-rows-3 items-center content-center">
          <LogoContainer
            name="nestjs"
            techInfo={{
              title: "NestJS",
              proficiency: 4,
              experience: ["exp1", "exp2", "exp3"],
              selected: "nestjs",
              logo: <NestjsLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NestjsLogo className="tech-icon" />
          </LogoContainer>
          <LogoContainer
            name="typeorm"
            techInfo={{
              title: "TypeORM",
              proficiency: 4,
              experience: ["exp1", "exp2"],
              selected: "typeorm",
              logo: <TypeORMIcon className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <TypeORMIcon className="tech-icon" />
          </LogoContainer>
          <LogoContainer
            name="redis"
            techInfo={{
              title: "Redis",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "redis",
              logo: <RedisIcon className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <RedisIcon className="tech-icon" />
          </LogoContainer>
          <LogoContainer
            name="aws"
            techInfo={{
              title: "AWS",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "aws",
              logo: <AWSLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <AWSLogo className="tech-icon" />
          </LogoContainer>
          <LogoContainer
            name="mysql"
            techInfo={{
              title: "MySQL",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "mysql",
              logo: <MysqlLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <MysqlLogo className="tech-icon" />
          </LogoContainer>

          <LogoContainer
            name="docker"
            techInfo={{
              title: "Docker",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "docker",
              logo: <DockerLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <DockerLogo className="tech-icon" />
          </LogoContainer>

          <LogoContainer
            name="github"
            techInfo={{
              title: "Github Project Contribution",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "github",
              logo: <GithubLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <GithubLogo className="tech-icon" />
          </LogoContainer>

          <LogoContainer
            name="nextjs"
            techInfo={{
              title: "NextJS",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "nextjs",
              logo: <NextjsLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NextjsLogo className="tech-icon" />
          </LogoContainer>

          <LogoContainer
            name="react"
            techInfo={{
              title: "React",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "react",
              logo: <ReactLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <ReactLogo className="tech-icon" />
          </LogoContainer>

          {/* And more 특별 처리 (icons) */}
          <LogoContainer
            name="etc"
            techInfo={{
              title: "And more",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "etc",
              logo: <ThreeDotsLogo className="tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <ThreeDotsLogo className="tech-icon" />
          </LogoContainer>

          {/* <div
            className={`${selectedTechnique.selected === "aws" ? "tech-selected" : ""}`}
            onClick={iconSelectHandler.bind(null, "aws")}
          >
            <AWSLogo className="tech-icon" />
          </div> */}
          {/* <div>
            <MysqlLogo className="tech-icon" />
          </div> */}

          {/* <div>
            <DockerLogo className="tech-icon" />
          </div> */}
          {/* <div>
            <GithubLogo className="tech-icon" />
          </div> */}
          {/* <div>
            <NextjsLogo className="tech-icon" />
          </div>
          <div>
            <ReactLogo className="tech-icon" />
          </div> */}
          {/* <div>
            <ThreeDotsLogo className="tech-icon" />
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="bg-primary-blue">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div>{selectedTechnique.logo}</div>
            <p className="font-black text-xl text-center">{selectedTechnique.title}</p>
          </div>
        </div>
        <div className="bg-primary-orange">
          <div className="w-full h-full flex flex-col justify-center items-center space-y-7">
            <p className="font-bold text-lg">Proficiency</p>
            <p className="text-3xl">{getProficiencyStart(selectedTechnique.proficiency)}</p>
          </div>
        </div>
      </div>
      <div className="bg-primary-yellow">
        <div className="m-5 text-lg">
          <ul>
            {selectedTechnique.experience.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default HomeBoard2;
