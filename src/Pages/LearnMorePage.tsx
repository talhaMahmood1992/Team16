import React from "react";
import classes from "./LearnMorePage.module.css";

export const LearnMorePage = (): JSX.Element => {
    return (
        <section className={classes.section_learn_more}>
            <div className={classes.lm_text}>
                <h1 className={classes.lm_title}>What is ProjectX?</h1>
                <p className={classes.lm_description}>
                    ProjectX is an easy way to discover new movies and shows to
                    watch! You can find top movies and shows by ratings or
                    search through genres. Add any movie or show to a favorites
                    list and add a rating or review. Can&apos;t find a movie or
                    show you like? Send in a request to have that media added!
                </p>
            </div>
            <div className={classes.creators_text}>
                <h2 className={classes.creators_title}>Creators of ProjectX</h2>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                src={require("../imgs/creators/dog.jpg")}
                                alt="Abdulrahman Abdulhamid"
                            />
                            <div className={classes.container}>
                                <h2>Abdulrahman Abdulhamid</h2>
                                <p>bood@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                src={require("../imgs/creators/dog.jpg")}
                                alt="Talha Mahmood"
                            />
                            <div className={classes.container}>
                                <h2>Talha Mahmood</h2>
                                <p>talha@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                src={require("../imgs/creators/dog.jpg")}
                                alt="Joey Hooper"
                            />
                            <div className={classes.container}>
                                <h2>Joey Hooper</h2>
                                <p>joeyhoop@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                src={require("../imgs/creators/dog.jpg")}
                                alt="Ian Steele"
                            />
                            <div className={classes.container}>
                                <h2>Ian Steele</h2>
                                <p>ijsteele@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                src={require("../imgs/creators/dog.jpg")}
                                alt="Mercedes Mathews"
                            />
                            <div className={classes.container}>
                                <h2>Mercedes Mathews</h2>
                                <p>mmathews@udel.edu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
