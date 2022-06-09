import Daeduck from '../banner/Daeduck';
import Daegu from '../banner/Daegu';
import Gwangju from '../banner/Gwangju';
import Mirim from '../banner/Mirim';
import Busan from '../banner/Busan';
import Slider from 'react-slick';

const Slide = () => {
  const settings = {
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    cssEase: 'linear',
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <Daeduck />
        <Daegu />
        <Gwangju />
        <Mirim />
        <Busan />
      </Slider>
    </div>
  );
};

export default Slide;
