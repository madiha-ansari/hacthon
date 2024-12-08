import React from "react";
import Nafbar from "./Components/Nafbar";
import Logo from "./Components/Logo";
import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Section from "./Components/Section";
// import Trading from "./Components/Trading";


const Page = () => {
  return (
    <div>
      <Nafbar></Nafbar>
      <Logo></Logo>
      <Hero></Hero>
      <Products></Products>
      <Section></Section>
      {/* <Trading></Trading> */}
      </div>
  );
};

export default Page;
