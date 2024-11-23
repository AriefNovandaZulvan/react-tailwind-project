'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselCard from '../molecules/HighLightCard';

interface HighLightListProps {
  items: { title: string; image: string }[];
}

const HighLightList: React.FC<HighLightListProps> = ({ items }) => {
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
      {items.map((item, index) => (
        <div key={index} className="pr-2">
          <CarouselCard image={item.image} title={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default HighLightList;
