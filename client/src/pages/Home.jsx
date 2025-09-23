import React from "react";
import Hero from "../components/Hero";
import FeaturesDestination from "../components/FeaturesDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import NewLetter from "../components/NewLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesDestination/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewLetter/>
    </>
  );
};

export default Home;
