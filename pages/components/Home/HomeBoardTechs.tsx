import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
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
import TechDesciptionListItem from "./items/TechDesciptionListItem";

export interface SelectedTechinque {
  title: string;

  proficiency: number;

  experience: string[] | ReactNode[];

  selected: string;

  logo: JSX.Element;
}

const defaultSelectedTechnique: SelectedTechinque = {
  title: "NestJS",

  proficiency: 4,

  experience: [
    "Testing(Unit / e2e)",
    "OpenAPI(Swagger)",
    "Authentication/Authorization",
    "Websockets",
    "CRUD",
    "Guards",
    "Interceptors",
    "Lifecycle Events",
  ],

  selected: "nestjs",

  logo: <NestjsLogo className="first-nestjs-logo block-tech-icon animate-flip" />,
};

const HomeBoardTechs = () => {
  const startingDomRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // console.log(`entry: ${entry}`);
      // console.log(`entry.isIntersecting: ${entry.isIntersecting}`);
      setStartingElementVisible(entry.isIntersecting);
    });

    observer.observe(startingDomRef.current as Element);
  }, []);

  const [startingElementVisible, setStartingElementVisible] = useState(false);

  // const [selectedTechnique, setSelectedTechnique] =
  //   useState<SelectedTechinque>(defaultSelectedTechnique);

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

  const animationClasses = "animate-flipInX animate-duration-[0.5s]";

  return (
    <section id="tech-board" className="h-screen grid grid-cols-1 grid-rows-2 lg:h-full lg:flex">
      <div className="bg-white row-span-1 p-4 flex flex-col lg:w-[50%] lg:items-start">
        <p className="text-sm lg:text-2xl lg:mt-[3%] lg:ml-[5%]">
          Take a look at my techniques and interests.
        </p>
        <div className="h-full grid grid-cols-4 grid-rows-3 items-center content-center lg:flex lg:flex-col lg:w-[90%] lg:m-auto ">
          <LogoContainer
            name="nestjs"
            techInfo={{
              title: "NestJS",
              proficiency: 4,
              experience: [
                "Testing(Unit / e2e)",
                "CI/CD(Github Actions)",
                "OpenAPI(Swagger)",
                "Authentication/Authorization",
                "CRUD",
                "Guards",
                "Interceptors",
                "Lifecycle Events",
              ],
              selected: "nestjs",
              logo: <NestjsLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NestjsLogo className="tech-icon" />
            <p
              ref={startingDomRef}
              id="tech-board-animation-start"
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              }`}
            >
              NestJS
            </p>
          </LogoContainer>
          <LogoContainer
            name="typeorm"
            techInfo={{
              title: "TypeORM",
              proficiency: 4,
              experience: ["Database Modeling(Entity, Relations)", "Migrations", "DB Lock"],
              selected: "typeorm",
              logo: <TypeORMIcon className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <TypeORMIcon className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[0.5s]`}
            >
              TypeORM
            </p>
          </LogoContainer>
          <LogoContainer
            name="redis"
            techInfo={{
              title: "Redis",
              proficiency: 3,
              experience: ["Ranking Information Caching", "Static Data Caching"],
              selected: "redis",
              logo: <RedisIcon className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <RedisIcon className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[1.0s]`}
            >
              Redis
            </p>
          </LogoContainer>
          <LogoContainer
            name="aws"
            techInfo={{
              title: "AWS",
              proficiency: 3,
              experience: ["RDS", "EC2", "Lambda", "API Gateway", "DynamoDB", "Cognito"],
              selected: "aws",
              logo: <AWSLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <AWSLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[1.5s]`}
            >
              AWS
            </p>
          </LogoContainer>
          <LogoContainer
            name="mysql"
            techInfo={{
              title: "MySQL",
              proficiency: 3,
              experience: ["Databse Modeling", "DB Lock"],
              // TODO: DB 다중화 추가 (하면)
              selected: "mysql",
              logo: <MysqlLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <MysqlLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[1.7s]`}
            >
              MySQL
            </p>
          </LogoContainer>

          <LogoContainer
            name="docker"
            techInfo={{
              title: "Docker",
              proficiency: 3,
              experience: [
                "Deploy Redis Cluster with Docker-Compose",
                "Images & Containers",
                "Volumes",
                "Networking: (Cross-)Container Communication",
                "Multi-Container Applications",
              ],
              selected: "docker",
              logo: <DockerLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <DockerLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[1.9s]`}
            >
              Docker
            </p>
          </LogoContainer>

          <LogoContainer
            name="github"
            techInfo={{
              title: "Github Project Contribution",
              proficiency: 3,
              experience: [
                "Contribution to 'React-Typescript Cheatsheet' Project which is one of the recommended document suggested by Official Typescript document. (Translation)",
                // eslint-disable-next-line react/jsx-key
                <a
                  href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet-kr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="hover:cursor-pointer">
                    <span className="text-[#1100ff] ">(Link) </span>React TypeScript Cheatsheet 🇰🇷
                  </p>
                </a>,
              ],
              selected: "github",
              logo: <GithubLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <GithubLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[2.1s]`}
            >
              Github Project Contribution
            </p>
          </LogoContainer>

          <LogoContainer
            name="nextjs"
            techInfo={{
              title: "NextJS(React)",
              proficiency: 2,
              experience: [
                "SSR",
                "SPA",
                "SEO",
                "API Routes",
                "React Context",
                "Redux",
                "Deployment",
              ],
              selected: "nextjs",
              logo: <NextjsLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <NextjsLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[2.2s]`}
            >
              NextJS (React)
            </p>
          </LogoContainer>

          <LogoContainer
            name="etc"
            techInfo={{
              title: "And more",
              proficiency: 2,
              experience: ["GraphQL", "Socket.io", "Firebase"],
              selected: "etc",
              logo: <ThreeDotsLogo className="block-tech-icon animate-flip" />,
            }}
            selectedTechnique={selectedTechnique}
            clickHandler={iconSelectHandler}
          >
            <ThreeDotsLogo className="tech-icon" />
            <p
              className={`tech-title lg:col-span-3 ${
                startingElementVisible ? animationClasses : ""
              } animate-delay-[2.4s]`}
            >
              And More...
            </p>
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
            <div className="m-5 text-md font-semibold ">
              <ul className="lg:flex lg:flex-col lg:gap-5 lg:p-8">
                {selectedTechnique.experience.map((e, index) => {
                  return (
                    <TechDesciptionListItem key={`${selectedTechnique.title}-${index}`} text={e} />
                    // <li key={e}>
                    //   <p>✓</p>
                    //   <p>{`${e}`}</p>
                    // </li>
                  );
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
