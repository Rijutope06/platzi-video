import React, { useState, useEffect } from "react";

import "../assets/styles/App.scss";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useInitialState from '../hooks/useInitalState';

const API = "http://localhost:3000/initalState";

const App = () => { 
   const initialStatel = useInitialState(API)

   return (
      <div className="App">
         <Header />
         <Search />
         {initialStatel.mylist.length > 0 &&
            <Categories title="Mi Lista">
            <Carousel>
               <CarouselItem />
            </Carousel>
            </Categories>
         }

         <Categories title="Tendencias">
         <Carousel>
            {initialStatel.trends.map(item => 
               <CarouselItem key={item.id} {...item} />
            )
         }
         </Carousel>
         </Categories>

         <Categories title="Originales de platzi video">
         <Carousel>
            {initialStatel.originals.map(item => 
               <CarouselItem key={item.id} {...item} />
            )}
         </Carousel>
         </Categories>

         <Footer />
      </div>
   );
};

export default App;
