import React from "react";
import classes from "../Components/HeroSeciton/HeroSection.module.css";

export const FriendsPage = (): JSX.Element => {
    return (
        <section className={classes.section_hero}>
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                Friends List
            </h1>
        </section>
    );
};
