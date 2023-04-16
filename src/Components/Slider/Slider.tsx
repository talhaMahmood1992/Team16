import React from "react";
import classes from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
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
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".swiper-button-next-unique",
                        prevEl: ".swiper-button-prev-unique",
                        disabledClass: "swiper-button-disabled"
                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/21_jump_street.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/black_mirror.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/breaking_bad.jpg")}
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
                            src={require("../../imgs/media-covers/game_of_thrones.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/gilmore_girls.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/hidden_figures.jpg")}
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
                            src={require("../../imgs/media-covers/lawrence_of_arabia.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/mad_men.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/modern_family.jpg")}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={classes.swiper_slide}>
                        <img
                            className={classes.slider_img}
                            src={require("../../imgs/media-covers/my_neighbor_totoro.jpg")}
                        />
                    </SwiperSlide>
                </Swiper>
                <div className={classes.pagination} />
            </div>
        </div>
    );
};
