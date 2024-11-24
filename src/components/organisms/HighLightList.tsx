'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '../molecules/HighLightCard';
import { Highlight } from '../../types/homeTypes';

interface HighLightListProps {
  highlights: Highlight[];
}

const HighLightList: React.FC<HighLightListProps> = ({ highlights }) => {

  if (!highlights || !Array.isArray(highlights)) {
    // Add a fallback to avoid errors when items is not an array
    return <div>No highlights available.</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,       
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    left:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {highlights.map((item, index) => (
        <div key={index} className="pr-2">
          <CarouselCard image={item.image} title={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default HighLightList;
