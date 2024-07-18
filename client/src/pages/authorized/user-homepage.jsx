import React from "react";
import Navbaruser from "../../components/homepage/navbar-user";
import Header from "../../components/homepage/header";
import Section1 from "../../components/homepage/section1";
import Section2 from "../../components/homepage/section2";
import Section3 from "../../components/homepage/section3";
import Section4 from "../../components/homepage/section4";
import Footer from "../../components/homepage/footer";

function Userhomepage() {
  return (
    <div className="relative">
      <Navbaruser />
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default Userhomepage;