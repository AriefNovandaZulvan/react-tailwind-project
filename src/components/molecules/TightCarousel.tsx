// src/components/molecules/TightCarousel.tsx
'use client'; // Add this to mark the component as a Client Component

import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface CarouselProps extends PropsWithChildren {
  settings?: Settings;
}

const TightCarousel: React.FC<CarouselProps> = ({ children, settings }) => {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...(settings || defaultSettings)}>{children}</Slider>;
};

export default TightCarousel;
