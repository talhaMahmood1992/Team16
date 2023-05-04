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
                    list or a to-watch list and add ratings to your favorites.
                    Check out what your friends are watching by looking at their
                    favorites! Can&apos;t find a movie or show you like? Send in
                    a request to have that media added!
                </p>
            </div>
            <div className={classes.creators_text}>
                <h2 className={classes.creators_title}>Creators of ProjectX</h2>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                className={classes.creator_image}
                                src={require("../imgs/creators/dog2.png")}
                                alt="Abdulrahman Abdulhamid"
                            />
                            <div className={classes.container}>
                                <h2>Abdulrahman Abdulhamid</h2>
                                <p className={classes.creator_position}>
                                    CEO & Founder
                                </p>
                                <p>
                                    Some text that describes me lorem ipsum
                                    ipsum lorem.
                                </p>
                                <p>bood@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                className={classes.creator_image}
                                src={require("../imgs/creators/dog2.png")}
                                alt="Talha Mahmood"
                            />
                            <div className={classes.container}>
                                <h2>Talha Mahmood</h2>
                                <p className={classes.creator_position}>
                                    CEO & Founder
                                </p>
                                <p>
                                    Some text that describes me lorem ipsum
                                    ipsum lorem.
                                </p>
                                <p>talha@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                className={classes.creator_image}
                                src={require("../imgs/creators/dog2.png")}
                                alt="Talha Mahmood"
                            />
                            <div className={classes.container}>
                                <h2>Talha Mahmood</h2>
                                <p className={classes.creator_position}>
                                    CEO & Founder
                                </p>
                                <p>
                                    Some text that describes me lorem ipsum
                                    ipsum lorem.
                                </p>
                                <p>talha@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                className={classes.creator_image}
                                src={require("../imgs/creators/dog2.png")}
                                alt="Talha Mahmood"
                            />
                            <div className={classes.container}>
                                <h2>Talha Mahmood</h2>
                                <p className={classes.creator_position}>
                                    CEO & Founder
                                </p>
                                <p>
                                    Some text that describes me lorem ipsum
                                    ipsum lorem.
                                </p>
                                <p>talha@udel.edu</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.column}>
                        <div className={classes.card}>
                            <img
                                className={classes.creator_image}
                                src={require("../imgs/creators/dog2.png")}
                                alt="Talha Mahmood"
                            />
                            <div className={classes.container}>
                                <h2>Talha Mahmood</h2>
                                <p className={classes.creator_position}>
                                    CEO & Founder
                                </p>
                                <p>
                                    Some text that describes me lorem ipsum
                                    ipsum lorem.
                                </p>
                                <p>talha@udel.edu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
