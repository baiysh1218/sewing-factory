import React from "react";
import AboutLinks from "../../components/AboutLinks/AboutLinks";
import Branch from "../../components/Branch/Branch";
import Guarantee from "../../components/Guarantee/Guarantee";
import Hero from "../../components/Hero/Hero";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import Second from "../../components/Second/Second";
import Ticker from "../../components/Ticker/Ticker";

const Home = () => {
  return (
    <>
      <Hero />
      <Second />
      <HomeVideo />
      <Ticker />
      <Guarantee />
      <AboutLinks />
      <Branch />
    </>
  );
};

export default Home;
