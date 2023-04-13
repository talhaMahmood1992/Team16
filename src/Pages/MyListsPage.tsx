import React from "react";
import classes from "../Components/HeroSeciton/HeroSection.module.css";

export const MyListsPage = (): JSX.Element => {
    return (
        <section className={classes.section_hero}>
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                My Favorites
            </h1>
        </section>
    );
};
