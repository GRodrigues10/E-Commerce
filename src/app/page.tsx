'use client'

import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import Footer from "@/components/Footer/Footer";
import Reviews from "@/components/Reviews/Reviews";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    
     <>
     <Banner/>
     <Trending/>
     <BestSellers/>
     <Reviews/>
     <Footer/>
     </>
  
  );
}
