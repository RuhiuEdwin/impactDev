"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import NavBar from "./components/navComponent";
// import Questions from "../components/questionsComponent";
import HeroPage from "./components/heroComponent";
import Features from "./components/featuresComponent";
import PartnersSlider from "./components/partnersComponent";
import ProductsPerks from "./components/perksComponent";
import FirstCallToAction from "./components/callToAction1";
import Benefits from "./components/benefitsComponent";
import SecondCallToAction from "./components/callToAction2";
import Testimonials from "./components/testimonyComponent";
import ThirdCallToAction from "./components/callToAction3";
import Questions from "./components/questionsComponent";
import Footer from "./components/footer";
// import Subscribe from "./components/questions/subForm";
import Layout from "./components/layout";

import Image from "next/image";

const Home = () => {

  const [isWaitlistFormOpen, setIsWaitlistFormOpen] = useState(false);
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      // Check if query parameter "waitlist" exists and its value is "true"
      if (params.get("waitlist") === "true") {
        openWaitlistForm();
      }
    }
  }, []);
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
  useEffect(() => {
    // Add Google Tag Manager script dynamically
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-136LZJM1YM";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Tag Manager
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-136LZJM1YM');
    `;
    document.head.appendChild(gtmScript);
    // Clean up function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(gtmScript);
    };
  }, []);

  return (
    <Layout
      title="Impact Tower | Sustainability As a Service for SMEs in International Trade"
      description="Explore best practices, tools, and resources for SMEs and traders to address environmental and social impacts, gain access to international markets, and navigate sustainable trade."
      favicon="https://impactower.com/_next/image?url=%2Flogo.png&w=256&q=75"
    >
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
        {/* Partners Slider */}
        <PartnersSlider />
        {/* Features  */}
        <Features />
        {/* Product Perks  */}
        {/* <Subscribe /> */}
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
    </Layout>
  );
};

export default Home;
