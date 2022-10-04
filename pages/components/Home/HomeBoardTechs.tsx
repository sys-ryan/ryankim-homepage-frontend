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

const HomeBoardTechs = () => {
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
    <section className="h-screen grid grid-cols-1 grid-rows-2 lg:h-full lg:flex">
      <div className="bg-white row-span-1 p-3 flex flex-col lg:w-[50%] lg:items-start">
        <p className="text-sm lg:text-2xl lg:ml-[5%] lg:mt-[5%]">
          Take a look at my techniques and interests.
        </p>
        <div className="h-full grid grid-cols-4 grid-rows-3 items-center content-center lg:flex lg:flex-col lg:w-[90%] lg:m-auto ">
          <LogoContainer
            name="nestjs"
            techInfo={{
              title: "NestJS",
              proficiency: 4,
              experience: ["exp1", "exp2", "exp3"],
              selected: "nestjs",
              logo: <NestjsLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NestjsLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">NestJS</p>
          </LogoContainer>
          <LogoContainer
            name="typeorm"
            techInfo={{
              title: "TypeORM",
              proficiency: 4,
              experience: ["exp1", "exp2"],
              selected: "typeorm",
              logo: <TypeORMIcon className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <TypeORMIcon className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">TypeORM</p>
          </LogoContainer>
          <LogoContainer
            name="redis"
            techInfo={{
              title: "Redis",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "redis",
              logo: <RedisIcon className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <RedisIcon className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">Redis</p>
          </LogoContainer>
          <LogoContainer
            name="aws"
            techInfo={{
              title: "AWS",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "aws",
              logo: <AWSLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <AWSLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">AWS</p>
          </LogoContainer>
          <LogoContainer
            name="mysql"
            techInfo={{
              title: "MySQL",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "mysql",
              logo: <MysqlLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <MysqlLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">MySQL</p>
          </LogoContainer>

          <LogoContainer
            name="docker"
            techInfo={{
              title: "Docker",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "docker",
              logo: <DockerLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <DockerLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">Docker</p>
          </LogoContainer>

          <LogoContainer
            name="github"
            techInfo={{
              title: "Github Project Contribution",
              proficiency: 3,
              experience: ["exp1", "exp2"],
              selected: "github",
              logo: <GithubLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <GithubLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">Github Project Contribution</p>
          </LogoContainer>

          <LogoContainer
            name="nextjs"
            techInfo={{
              title: "NextJS",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "nextjs",
              logo: <NextjsLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NextjsLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">NextJS</p>
          </LogoContainer>

          <LogoContainer
            name="react"
            techInfo={{
              title: "React",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "react",
              logo: <ReactLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <ReactLogo className="tech-icon" />
            <p className="hidden lg:block lg:ml-[5%]">React</p>
          </LogoContainer>

          {/* And more 특별 처리 (icons) */}
          <LogoContainer
            name="etc"
            techInfo={{
              title: "And more",
              proficiency: 2,
              experience: ["exp1", "exp2"],
              selected: "etc",
              logo: <ThreeDotsLogo className="block-tech-icon" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <ThreeDotsLogo className="tech-icon" />
            <p className="hidden lg:block  lg:ml-[5%]">And More...</p>
          </LogoContainer>
        </div>
      </div>
      <div className="row-span-1 lg:row-span-2 lg:w-[50%] ">
        <div className="flex flex-col h-full lg:w-full lg:h-screen lg:sticky lg:top-0">
          <div className="flex flex-row">
            <div className="bg-primary-blue w-[50%] aspect-square">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div>{selectedTechnique.logo}</div>
                <p className="font-black text-xl text-center lg:text-2xl">
                  {selectedTechnique.title}
                </p>
              </div>
            </div>
            <div className="bg-primary-orange w-[50%] aspect-square">
              <div className="w-full h-full flex flex-col justify-center items-center space-y-7">
                <p className="font-bold text-lg lg:text-2xl">Proficiency</p>
                <p className="text-3xl lg:text-4xl">
                  {getProficiencyStart(selectedTechnique.proficiency)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary-yellow h-full">
            <div className="m-5 text-lg">
              <ul>
                {selectedTechnique.experience.map((e) => {
                  return <li key={e}>{e}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBoardTechs;
