"use client";
import BannerSlider from "@/components/page/homepage/BannerSlider";
import HowToRent from "@/components/page/homepage/HowToRent";
import ServiceSection from "@/components/page/homepage/Service";
import TopCollection from "@/components/page/homepage/TopCollection";
import React from "react";

const LandingPageScreen = () => {
  return (
    <div className="mt-0">
      <BannerSlider />
      <ServiceSection />
      <TopCollection />
      <HowToRent />
    </div>
  );
};

export default LandingPageScreen;
