import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBoard from "./components/Home/HomeBoard";
import HomeBoardTechs from "./components/Home/HomeBoardTechs";
import HomeBoardMain from "./components/Home/HomeBoardMain";
import HomeBoardQuestion from "./components/Home/HomeBoardQuestion";
import HomeBoardContacts from "./components/Home/HomeBoardContacts";

const Home: NextPage = () => {
  return (
    <>
      <HomeBoardMain />
      <HomeBoardTechs />
      <HomeBoard />
      <HomeBoardQuestion />
      <HomeBoardContacts />
      <HomeBoard />
    </>
  );
};

export default Home;
