import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeadMeta from "./components/HeadMeta";
import HomeBoard from "./components/Home/HomeBoard";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="/images/logo.png" />
      <HomeBoard />
    </>
  );
};

export default Home;
