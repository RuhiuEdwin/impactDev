"use client";
import React, { useState } from 'react'
import NavBar from "../components/navComponent";
// import Questions from "../components/questionsComponent";
import HeroPage from "../components/heroComponent";
import Features from "../components/featuresComponent";
import PartnersSlider from "../components/partnersComponent";
import ProductsPerks from "../components/perksComponent";
import FirstCallToAction from "../components/callToAction1";
import Benefits from "../components/benefitsComponent";
import SecondCallToAction from "../components/callToAction2";
import Testimonials from "../components/testimonyComponent";
import ThirdCallToAction from "../components/callToAction3";
import Questions from "../components/questionsComponent";
import Footer from "../components/footer";

import Image from "next/image";

const Home = () => {
  const [isWaitlistFormOpen, setIsWaitlistFormOpen] = useState(false);

  const openWaitlistForm = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setIsWaitlistFormOpen(true);
    // Prevent scrolling
    document.body.style.overflow = "hidden";
  };

  const closeWaitlistForm = () => {
    setIsWaitlistFormOpen(false);
    // Allow scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <main className="relative font-sans flex min-h-screen flex-col items-start">
      {/* Waitlist Form modal */}
      {isWaitlistFormOpen && (
        <Questions closeWaitlistForm={closeWaitlistForm} />
      )}
      {/* Navigation bar  */}
      <NavBar openWaitlistForm={openWaitlistForm} />
      {/* <Questions /> */}
      {/* Hero  */}
      <HeroPage openWaitlistForm={openWaitlistForm} />
      {/* Features  */}
      <Features />
      {/* Partners Slider */}
      <PartnersSlider />
      {/* Product Perks  */}
      <ProductsPerks />
      {/* First CTA  */}
      <FirstCallToAction openWaitlistForm={openWaitlistForm} />
      {/* Product Benefits  */}
      <Benefits />
      {/* Second CTTAr  */}
      <SecondCallToAction />
      {/* Testimonials  */}
      <Testimonials />
      {/* Third CTA */}
      <ThirdCallToAction openWaitlistForm={openWaitlistForm} />
      {/* Footer  */}
      <Footer />
    </main>
  );
}

export default Home;
