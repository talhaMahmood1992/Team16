import React from "react";
import classes from "./LearnMorePage.module.css";

export const LearnMorePage = (): JSX.Element => {
    return (
        <section className={classes.section_learn_more}>
            <div className={classes.learn_more}>
                <div className={classes.learn_more_text}>
                    <h1 className="heading-primary">What is ProjectX?</h1>
                    <p className={classes.learn_more_description}>
                        ProjectX is an easy way to discover new Movies and Shows
                        to watch. You can find top Movies and Shows by ratings
                        or search through genres. Add any Movie or Show to a
                        favorites list or a to watch list. Add ratings to your
                        favorite Movies and Shows and check out your friends
                        favorites too!
                    </p>
                </div>
                <div className={classes.creators}>
                    <div className={classes.creator_text}>
                        <h1 className="heading-secondary">
                            Creators of ProjectX
                        </h1>
                        <p className={classes.creators_names}>
                            Abdulrahman Abdulhamid, Talha Mahmood, Joseph
                            Hooper, Ian Steele, and Mercedes Mathews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
