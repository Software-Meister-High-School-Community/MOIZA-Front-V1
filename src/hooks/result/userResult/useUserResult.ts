import React from 'react';
import Slider from 'react-slick';

const useUserResult = () => {
  const slider = React.useRef<Slider>(null);

  const handleNext = () => {
    slider?.current?.slickNext();
  };

  const handlePrevious = () => {
    slider.current?.slickPrev();
  };

  return {
    slider,
    handleNext,
    handlePrevious,
  };
};

export default useUserResult;
