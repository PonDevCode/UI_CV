import React from 'react'
import Slider from "react-slick";
import './SectionFeedBack.scss'
import imgFeedBack from '../../assets/imgFeedBack.png'
import Swiper from 'swiper';
import 'swiper/css';
export default function SectionFeedBack() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <div className='Box_FeedBack'>
      <Slider {...settings}>
        <div className='Item_FeedBack'>
          <div className='Info_FeedBack'>
            <div className='Info_Img_FeedBack'>
              <img src={imgFeedBack} alt="" />
            </div>
            <div className='Info_Name_FeedBack'>
              <p>John Richards</p>
              <span>CEO Summit Solutions</span>
            </div>
          </div>
          <div className='Content_FeedBack'>
            <span>
              "Natalie's ability to blend aesthetics with
              functionality is unparalleled. She not only understood our brand but elevated it through her design."
            </span>
          </div>
        </div>
        <div className='Item_FeedBack'>
          <div className='Info_FeedBack'>
            <div className='Info_Img_FeedBack'>
              <img src={imgFeedBack} alt="" />
            </div>
            <div className='Info_Name_FeedBack'>
              <p>John Richards</p>
              <span>CEO Summit Solutions</span>
            </div>
          </div>
          <div className='Content_FeedBack'>
            <span>
              "Natalie's ability to blend aesthetics with
              functionality is unparalleled. She not only understood our brand but elevated it through her design."
            </span>
          </div>
        </div>

        <div className='Item_FeedBack'>
          <div className='Info_FeedBack'>
            <div className='Info_Img_FeedBack'>
              <img src={imgFeedBack} alt="" />
            </div>
            <div className='Info_Name_FeedBack'>
              <p>John Richards</p>
              <span>CEO Summit Solutions</span>
            </div>
          </div>
          <div className='Content_FeedBack'>
            <span>
              "Natalie's ability to blend aesthetics with
              functionality is unparalleled. She not only understood our brand but elevated it through her design."
            </span>
          </div>
        </div>
        <div className='Item_FeedBack'>
          <div className='Info_FeedBack'>
            <div className='Info_Img_FeedBack'>
              <img src={imgFeedBack} alt="" />
            </div>
            <div className='Info_Name_FeedBack'>
              <p>John Richards</p>
              <span>CEO Summit Solutions</span>
            </div>
          </div>
          <div className='Content_FeedBack'>
            <span>
              "Natalie's ability to blend aesthetics with
              functionality is unparalleled. She not only understood our brand but elevated it through her design."
            </span>
          </div>
        </div>
        

      </Slider>
    </div>
  )
}
