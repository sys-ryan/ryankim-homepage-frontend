import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBoard from "./components/HomeBoard";
import HomeBoard1 from "./components/HomeBoard1";

const Home: NextPage = () => {
  return (
    <>
      <HomeBoard1 />
      <HomeBoard />
      <HomeBoard />
    </>
  );
};

export default Home;
