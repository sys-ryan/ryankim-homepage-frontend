import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBoard from "./components/Home/HomeBoard";
import HomeBoard1 from "./components/Home/HomeBoard1";
import HomeBoard2 from "./components/Home/HomeBoard2";
import HomeBoard3 from "./components/Home/HomeBoard3";
import HomeBoard4 from "./components/Home/HomeBoard4";

const Home: NextPage = () => {
  return (
    <>
      <HomeBoard1 />
      <HomeBoard2 />
      <HomeBoard />
      <HomeBoard3 />
      <HomeBoard4 />
      <HomeBoard />
    </>
  );
};

export default Home;
