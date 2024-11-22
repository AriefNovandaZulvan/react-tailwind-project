import React from 'react';

interface ImagePlacerProps {
    source: string;
    alt: string;
  }

const ImagePlacer: React.FC<ImagePlacerProps> = ({ source, alt }) => {
  return (
    <img
        src={source}
        alt={alt}
        className=""
    />
  );
};

export default ImagePlacer;