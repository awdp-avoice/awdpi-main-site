import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "src/components/Partners/Partners.module.css"

export default class AutoPlay extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
        //   autoplaySpeed: 1000,
          cssEase: "linear"
        };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className={styles.imgItem} src="static/img/Partners/1.png"></img>
          </div>
          <div>
            <img className={styles.imgItem} src="static/img/Partners/2.png"></img>
          </div>
          <div>
            <img className={styles.imgItem} src="static/img/Partners/3.png"></img>
          </div>
          <div>
            <img className={styles.imgItem} src="static/img/Partners/4.png"></img>
          </div>
          <div>
            <img className={styles.imgItem} src="static/img/Partners/5.png"></img>
          </div>
          
        </Slider>
      </div>
    );
  }
}