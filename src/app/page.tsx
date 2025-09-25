'use client'

import Banner from "@/components/Banner/Banner";
import BestSellers from "@/components/BestSellers/BestSellers";
import Header from "@/components/Header/Header";
import Reviews from "@/components/Reviews/Reviews";
import Trending from "@/components/Trending/Trending";

export default function Home() {
  return (
    
     <>
     <Header/>
     <Banner/>
     <Trending/>
     <BestSellers/>
     <Reviews/>
     </>
  
  );
}
