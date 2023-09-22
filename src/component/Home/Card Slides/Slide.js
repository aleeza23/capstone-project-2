import React from "react";
import CardSlide from "./CardSlide";
import {TrendingData , PopularData} from './CardData'
function Slide() {
  return <>

<CardSlide title= 'Recommanded' data={TrendingData} />
<CardSlide title= 'Most Popular' data ={PopularData} />
<CardSlide title= 'Trending' data={TrendingData}  />

  </>;
}

export default Slide;
