import type { NextPage } from "next";
import HeadMeta from "../components/HeadMeta";
import HomeBoard from "../components/Home/HomeBoard";

const Home: NextPage = () => {
  return (
    <>
      <HeadMeta image="/images/logo.png" />
      <HomeBoard />
    </>
  );
};

export default Home;
