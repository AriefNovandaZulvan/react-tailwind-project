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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
  };

  return <Slider {...(settings || defaultSettings)}>{children}</Slider>;
};

export default TightCarousel;
