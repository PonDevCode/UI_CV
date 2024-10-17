import React from "react";
import Slider from "react-slick";
import './Slider.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className="box_1">
      <div>
        <h3>Product Design</h3>
      </div>
      <div>
        <h3>UX/UI</h3>
      </div>
      <div>
        <h3>Web Design</h3>
      </div>
      <div>
        <h3>Makerting</h3>
      </div>
      <div>
        <h3>Branding</h3>
      </div>
    </Slider>
  );
}
