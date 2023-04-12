import React from "react";
import { ActiveUsers } from "./ActiveUsers";
import classes from "./HeroSection.module.css";

export const HeroSection = (): JSX.Element => {
    return (
        <section className={classes.section_hero}>
            <div className={classes.hero}>
                <div>
                    <h1 className="heading-primary">
                        All the latest Movies, Shows and Documentaries
                    </h1>
                    <p className={classes.hero_description}>
                        Browse the most trending media online all while sharing
                        your favorite Movies, Shows and Documentaries with your
                        friends and family online
                    </p>
                    <div className={classes.action_buttons}>
                        <button className={classes.browse_media_button}>
                            Browse Media
                        </button>
                        <button className={classes.learn_more_button}>
                            Learn more &darr;
                        </button>
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
