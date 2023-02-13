import React, { useState } from 'react';
import Slider from "react-slick";
import { bannerImages } from '../../constants';

const Banner = () => {

  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    //   infinite: true,
    //   speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
      // console.log(next);
    },
    appendDots: dots => (
      <div
        style={{
          // backgroundColor: "#ddd",
          // borderRadius: "10px",
          // padding: "10px"
          position: "absolute",
          top: "70%",
          left: "0",
          right: "0",
          margin: "0 auto",
          transform: "transition(-50%, -50%)",
          width: "210px"
        }}
      >
        <ul style={{ display: "flex", justifyContent: "space-between" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive ?
            {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#febd69",
              padding: "8px 0",
              cursor: "pointer",
              border: "1px solid #f3a847"
            }
            :
            {
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#131921",
              padding: "8px 0",
              cursor: "pointer",
              border: "1px solid #f3a847"
            }
        }
      >
        {i + 1}
      </div>
    )
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {
          bannerImages.map(banImg => (
            <div key={banImg.id}>
              <img src={banImg.img} alt="" />
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default Banner;