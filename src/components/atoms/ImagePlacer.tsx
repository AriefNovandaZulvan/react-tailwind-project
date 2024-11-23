import React from 'react';

interface ImagePlacerProps {
  source: string;
  alt: string;
  className?: string;
}

const ImagePlacer: React.FC<ImagePlacerProps> = ({ source, alt ,className}) => {
  return (
    <img
        src={source}
        alt={alt}
        className={`${className}`}
    />
  );
};

export default ImagePlacer;