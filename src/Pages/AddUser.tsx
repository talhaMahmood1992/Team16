import React from "react";
import classes from "./LearnMorePage.module.css";

export const AddUsers = (): JSX.Element => {
    return (
        <section className={classes.section_learn_more}>
            <div className={classes.lm_text}>
                <p className={classes.lm_description}>
                    This is where the Super will add More User{" "}
                </p>
            </div>
        </section>
    );
};
