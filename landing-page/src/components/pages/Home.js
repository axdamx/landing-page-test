import React, { useEffect, useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import MainSection from "../MainSection";
import SecondSection from "../SecondSection";

function Home() {
  const [data, setData] = useState([]);
  const url = "http://staging.digitalsymphony.it/frontendtest/product/read.php";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.records);
  };
  return (
    <>
      <HeroSection />
      <MainSection />
      <SecondSection />
      <Cards data={data} />
      <Footer />
    </>
  );
}

export default Home;
