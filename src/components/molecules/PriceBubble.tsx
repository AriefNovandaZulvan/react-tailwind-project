import React from "react";

const PriceBubble: React.FC = () => {
  return (
    <div className="relative inline-block bg-white text-green-600 font-bold text-sm rounded-lg shadow-md p-2 m-auto z-30">
      {/* Icon and Text */}
      <div className="flex items-center space-x-2 z-20">
        {/* Icon */}
        <span className="text-green-500">
        $
        </span>
        {/* Text */}
        <span>월 100만원</span>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 bg-white w-4 h-4 rotate-45 shadow-md z-10"></div>
    </div>
  );
};

export default PriceBubble;
