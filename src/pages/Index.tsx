
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReviewCarousel from '../components/ReviewCarousel';
import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import SuccessStories from '../components/SuccessStories';
import FAQ from '../components/FAQ';
import RoadSigns from '../components/RoadSigns';
import Map from '../components/Map';
import Footer from '../components/Footer';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Toaster position="top-right" />
        <Navbar />
        <Hero />
        <ReviewCarousel />
        <WhyChooseUs />
        <Banner />
        <Gallery />
        <AboutUs />
        <SuccessStories />
        <FAQ />
        <RoadSigns />
        <Map />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
