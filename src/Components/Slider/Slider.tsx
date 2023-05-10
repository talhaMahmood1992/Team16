import React from "react";
import classes from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
/* eslint @typescript-eslint/no-var-requires: "off" */

export const Slider = (): JSX.Element => {
    return (
        <div className={classes.slider_wrapper}>
            <p>Trending Media</p>
            <div className="swiper-button swiper-button-next-unique">
                <IoIosArrowForward />
            </div>
            <div className="swiper-button swiper-button-prev-unique">
                <IoIosArrowBack />
            </div>
            <div className={classes.slider}>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".swiper-button-next-unique",
                        prevEl: ".swiper-button-prev-unique",
                        disabledClass: "swiper-button-disabled"
                    }}
                >
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/21-jump-street.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/black-mirror.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/breaking-bad.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/friends.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/game-of-thrones.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/gilmore-girls.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/hidden-figures.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/icarly.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/american-psycho.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/mad-men.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/modern-family.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/my-neighbor-totoro.jpg")}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
