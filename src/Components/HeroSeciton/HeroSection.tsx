import React from "react";
import { NavLink } from "react-router-dom";
import { ActiveUsers } from "./ActiveUsers";
import classes from "./HeroSection.module.css";

export const HeroSection = (): JSX.Element => {
    return (
        <section className={classes.section_hero}>
            <div className={classes.hero}>
                <div className={classes.hero_text}>
                    <h1 className="heading-primary">
                        All the latest Movies, Shows and Documentaries
                    </h1>
                    <p className={classes.hero_description}>
                        Browse the most trending media online all while sharing
                        your favorite Movies, Shows and Documentaries with your
                        friends and family online
                    </p>
                    <div className={classes.action_buttons}>
                        <NavLink to="/browseMedia">
                            <button className={classes.browse_media_button}>
                                Browse Media
                            </button>
                        </NavLink>
                        <NavLink to="/LearnMorePage">
                            <button className={classes.learn_more_button}>
                                Learn more &darr;
                            </button>
                        </NavLink>
                    </div>
                    <ActiveUsers />
                </div>
                <div className={classes.hero_img}>
                    <img
                        src={require("../../imgs/hero-img.png")}
                        alt="Image of Bumblebee"
                    />
                </div>
            </div>
        </section>
    );
};
