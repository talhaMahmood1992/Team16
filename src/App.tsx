import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./Components/Settings";
import { MainHeader } from "./Layout/MainHeader";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { MyListsPage } from "./Pages/MyListsPage";
import { NotFound } from "./Pages/NotFound";
import { nanoid } from "nanoid";
import { BrowseMedia } from "./Pages/BrowseMedia";
export const mediaData = [
    {
        title: "The Hunger Games",
        type: "Movie",
        yearReleased: 2012,
        rating: 0,
        image: require("./imgs/media-covers/the_hunger_games.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Maze Runner",
        type: "Movie",
        yearReleased: 2014,
        rating: 0,
        image: require("./imgs/media-covers/the_maze_runner.jpg"),
        movieId: nanoid()
    },
    {
        title: "Shutter Island",
        type: "Movie",
        yearReleased: 2010,
        rating: 0,
        image: require("./imgs/media-covers/shutter_island.jpg"),
        movieId: nanoid()
    },
    {
        title: "Titanic",
        type: "Movie",
        yearReleased: 1997,
        rating: 0,
        image: require("./imgs/media-covers/titanic.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Blind Side",
        type: "Movie",
        yearReleased: 2009,
        rating: 0,
        image: require("./imgs/media-covers/the_blind_side.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Help",
        type: "Movie",
        yearReleased: 2011,
        rating: 0,
        image: require("./imgs/media-covers/the_help.jpg"),
        movieId: nanoid()
    },
    {
        title: "Hidden Figures",
        type: "Movie",
        yearReleased: 2017,
        rating: 0,
        image: require("./imgs/media-covers/hidden_figures.jpg"),
        movieId: nanoid()
    },
    {
        title: "Black Mirror",
        type: "Show",
        yearReleased: 2011,
        rating: 0,
        image: require("./imgs/media-covers/black_mirror.jpg"),
        movieId: nanoid()
    },
    {
        title: "Shameless",
        type: "Show",
        yearReleased: 2011,
        rating: 0,
        image: require("./imgs/media-covers/shameless.jpg"),
        movieId: nanoid()
    },
    {
        title: "Gilmore Girls",
        type: "Show",
        yearReleased: 2000,
        rating: 0,
        image: require("./imgs/media-covers/gilmore_girls.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Lorax",
        type: "Movie",
        yearReleased: 2012,
        rating: 0,
        image: require("./imgs/media-covers/the_lorax.jpg"),
        movieId: nanoid()
    },
    {
        title: "New Girl",
        type: "Show",
        yearReleased: 2011,
        rating: 0,
        image: require("./imgs/media-covers/new_girl.jpg"),
        movieId: nanoid()
    },
    {
        title: "Modern Family",
        type: "Show",
        yearReleased: 2009,
        rating: 0,
        image: require("./imgs/media-covers/modern_family.jpg"),
        movieId: nanoid()
    },
    {
        title: "Friends",
        type: "Show",
        yearReleased: 1994,
        rating: 0,
        image: require("./imgs/media-covers/friends.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Office",
        type: "Show",
        yearReleased: 2005,
        rating: 0,
        image: require("./imgs/media-covers/the_office.jpg"),
        movieId: nanoid()
    },
    {
        title: "Parks and Recreation",
        type: "Show",
        yearReleased: 2009,
        rating: 0,
        image: require("./imgs/media-covers/parks_and_recreation.jpg"),
        movieId: nanoid()
    },
    {
        title: "Lawrence of Arabia",
        type: "Movie",
        yearReleased: 1962,
        rating: 0,
        image: require("./imgs/media-covers/lawrence_of_arabia.jpg"),
        movieId: nanoid()
    },
    {
        title: "Tombstone",
        type: "Movie",
        yearReleased: 1993,
        rating: 0,
        image: require("./imgs/media-covers/tombstone.jpg"),
        movieId: nanoid()
    },
    {
        title: "My Neighbor Totoro",
        type: "Movie",
        yearReleased: 1990,
        rating: 0,
        image: require("./imgs/media-covers/my_neighbor_totoro.jpg"),
        movieId: nanoid()
    },
    {
        title: "Ponyo",
        type: "Movie",
        yearReleased: 2009,
        rating: 0,
        image: require("./imgs/media-covers/ponyo.jpg"),
        movieId: nanoid()
    },
    {
        title: "Survivor",
        type: "Show",
        yearReleased: 2000,
        rating: 0,
        image: require("./imgs/media-covers/survivor.jpg"),
        movieId: nanoid()
    },
    {
        title: "iCarly",
        type: "Show",
        yearReleased: 2007,
        rating: 0,
        image: require("./imgs/media-covers/icarly.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Good Place",
        type: "Show",
        yearReleased: 2016,
        rating: 0,
        image: require("./imgs/media-covers/the_good_place.jpg"),
        movieId: nanoid()
    },
    {
        title: "21 Jump Street",
        type: "Movie",
        yearReleased: 2012,
        rating: 0,
        image: require("./imgs/media-covers/21_jump_street.jpg"),
        movieId: nanoid()
    },
    {
        title: "Stranger Things",
        type: "Show",
        yearReleased: 2016,
        rating: 0,
        image: require("./imgs/media-covers/stranger_things.jpg"),
        movieId: nanoid()
    },
    {
        title: "Where the Crawdads Sing",
        type: "Movie",
        yearReleased: 2022,
        rating: 0,
        image: require("./imgs/media-covers/where_the_crawdads_sing.jpg"),
        movieId: nanoid()
    },
    {
        title: "Spongebob Squarepants",
        type: "Show",
        yearReleased: 1999,
        rating: 0,
        image: require("./imgs/media-covers/spongebob_squarepants.jpg"),
        movieId: nanoid()
    },
    {
        title: "Mad Men",
        type: "Show",
        yearReleased: 2007,
        rating: 0,
        image: require("./imgs/media-covers/mad_men.jpg"),
        movieId: nanoid()
    },
    {
        title: "Breaking Bad",
        type: "Show",
        yearReleased: 2008,
        rating: 0,
        image: require("./imgs/media-covers/breaking_bad.jpg"),
        movieId: nanoid()
    },
    {
        title: "Game of Thrones",
        type: "Show",
        yearReleased: 2011,
        rating: 0,
        image: require("./imgs/media-covers/game_of_thrones.jpg"),
        movieId: nanoid()
    }
];

type Role = "Default" | "Admin" | "Super";

function App(): JSX.Element {
    const [settingsIsShown, setSettingsIsShown] = useState<boolean>(false);
    const [role, setRole] = useState<Role>("Default");
    //const [media, setMedia] = useState(mediaData);

    const showSettingsHandler = (): void => {
        setSettingsIsShown(true);
    };

    const hideSettingsHandler = (): void => {
        setSettingsIsShown(false);
    };

    return (
        <div>
            <MainHeader showSettingsHandler={showSettingsHandler} role={role} />

            {settingsIsShown /* eslint-disable-line */ && (
                <Settings
                    hideSettingsHandler={hideSettingsHandler}
                    role={role}
                    setRole={setRole}
                />
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/mylists" element={<MyListsPage />} />
                <Route
                    path="/addMedia"
                    element={<AddMediaPage role={role} />}
                />
                <Route path="/browseMedia" element={<BrowseMedia />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
