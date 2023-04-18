import { nanoid } from "nanoid";

export interface Media {
    title: string;
    type: "Movie" | "Show";
    yearReleased: number;
    rating: number;
    image: string;
    movieId: string;
    //reviews: string[];
}

export interface PersonalMedia {
    media: Media;
    review: string;
    id: string;
}

export function findMedia(data: Media[], title: string): number {
    return data.findIndex((datum: Media): boolean => datum.title === title);
}

export const mediaData: Media[] = [
    {
        title: "The Hunger Games",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/the_hunger_games.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Maze Runner",
        type: "Movie",
        yearReleased: 2014,
        rating: 3,
        image: require("./imgs/media-covers/the_maze_runner.jpg"),
        movieId: nanoid()
    },
    {
        title: "Shutter Island",
        type: "Movie",
        yearReleased: 2010,
        rating: 4,
        image: require("./imgs/media-covers/shutter_island.jpg"),
        movieId: nanoid()
    },
    {
        title: "Titanic",
        type: "Movie",
        yearReleased: 1997,
        rating: 4,
        image: require("./imgs/media-covers/titanic.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Blind Side",
        type: "Movie",
        yearReleased: 2009,
        rating: 4,
        image: require("./imgs/media-covers/the_blind_side.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Help",
        type: "Movie",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/the_help.jpg"),
        movieId: nanoid()
    },
    {
        title: "Hidden Figures",
        type: "Movie",
        yearReleased: 2017,
        rating: 4,
        image: require("./imgs/media-covers/hidden_figures.jpg"),
        movieId: nanoid()
    },
    {
        title: "Black Mirror",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/black_mirror.jpg"),
        movieId: nanoid()
    },
    {
        title: "Shameless",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/shameless.jpg"),
        movieId: nanoid()
    },
    {
        title: "Gilmore Girls",
        type: "Show",
        yearReleased: 2000,
        rating: 4,
        image: require("./imgs/media-covers/gilmore_girls.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Lorax",
        type: "Movie",
        yearReleased: 2012,
        rating: 3,
        image: require("./imgs/media-covers/the_lorax.jpg"),
        movieId: nanoid()
    },
    {
        title: "New Girl",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/new_girl.jpg"),
        movieId: nanoid()
    },
    {
        title: "Modern Family",
        type: "Show",
        yearReleased: 2009,
        rating: 4,
        image: require("./imgs/media-covers/modern_family.jpg"),
        movieId: nanoid()
    },
    {
        title: "Friends",
        type: "Show",
        yearReleased: 1994,
        rating: 5,
        image: require("./imgs/media-covers/friends.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Office",
        type: "Show",
        yearReleased: 2005,
        rating: 5,
        image: require("./imgs/media-covers/the_office.jpg"),
        movieId: nanoid()
    },
    {
        title: "Parks and Recreation",
        type: "Show",
        yearReleased: 2009,
        rating: 4.3,
        image: require("./imgs/media-covers/parks_and_recreation.jpg"),
        movieId: nanoid()
    },
    {
        title: "Lawrence of Arabia",
        type: "Movie",
        yearReleased: 1962,
        rating: 4,
        image: require("./imgs/media-covers/lawrence_of_arabia.jpg"),
        movieId: nanoid()
    },
    {
        title: "Tombstone",
        type: "Movie",
        yearReleased: 1993,
        rating: 4,
        image: require("./imgs/media-covers/tombstone.jpg"),
        movieId: nanoid()
    },
    {
        title: "My Neighbor Totoro",
        type: "Movie",
        yearReleased: 1990,
        rating: 4,
        image: require("./imgs/media-covers/my_neighbor_totoro.jpg"),
        movieId: nanoid()
    },
    {
        title: "Ponyo",
        type: "Movie",
        yearReleased: 2009,
        rating: 4,
        image: require("./imgs/media-covers/ponyo.jpg"),
        movieId: nanoid()
    },
    {
        title: "Survivor",
        type: "Show",
        yearReleased: 2000,
        rating: 4,
        image: require("./imgs/media-covers/survivor.jpg"),
        movieId: nanoid()
    },
    {
        title: "iCarly",
        type: "Show",
        yearReleased: 2007,
        rating: 3,
        image: require("./imgs/media-covers/icarly.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Good Place",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: require("./imgs/media-covers/the_good_place.jpg"),
        movieId: nanoid()
    },
    {
        title: "21 Jump Street",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/21_jump_street.jpg"),
        movieId: nanoid()
    },
    {
        title: "Stranger Things",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: require("./imgs/media-covers/stranger_things.jpg"),
        movieId: nanoid()
    },
    {
        title: "Where the Crawdads Sing",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/where_the_crawdads_sing.jpg"),
        movieId: nanoid()
    },
    {
        title: "Spongebob Squarepants",
        type: "Show",
        yearReleased: 1999,
        rating: 4,
        image: require("./imgs/media-covers/spongebob_squarepants.jpg"),
        movieId: nanoid()
    },
    {
        title: "Mad Men",
        type: "Show",
        yearReleased: 2007,
        rating: 4,
        image: require("./imgs/media-covers/mad_men.jpg"),
        movieId: nanoid()
    },
    {
        title: "Breaking Bad",
        type: "Show",
        yearReleased: 2008,
        rating: 5,
        image: require("./imgs/media-covers/breaking_bad.jpg"),
        movieId: nanoid()
    },
    {
        title: "Game of Thrones",
        type: "Show",
        yearReleased: 2011,
        rating: 5,
        image: require("./imgs/media-covers/game_of_thrones.jpg"),
        movieId: nanoid()
    },
    {
        title: "Better Call Saul",
        type: "Show",
        yearReleased: 2015,
        rating: 4,
        image: require("./imgs/media-covers/better_call_saul.jpg"),
        movieId: nanoid()
    },
    {
        title: "House of The Dragon",
        type: "Show",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/house_of_dragon.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Batman",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/The_Batman.jpg"),
        movieId: nanoid()
    },
    {
        title: "Batman Begins",
        type: "Movie",
        yearReleased: 2005,
        rating: 4,
        image: require("./imgs/media-covers/BatMan_Begins.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Dark Knight",
        type: "Movie",
        yearReleased: 2008,
        rating: 5,
        image: require("./imgs/media-covers/The_Dark_Knight.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Dark Knight Rises",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/The_Dark_Knight_Rises.jpg"),
        movieId: nanoid()
    },
    {
        title: "Joker",
        type: "Movie",
        yearReleased: 2019,
        rating: 4,
        image: require("./imgs/media-covers/Joker.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Prestige",
        type: "Movie",
        yearReleased: 2006,
        rating: 4,
        image: require("./imgs/media-covers/The_Prestige.jpg"),
        movieId: nanoid()
    },
    {
        title: "Iron Man",
        type: "Movie",
        yearReleased: 2008,
        rating: 4,
        image: require("./imgs/media-covers/Iron_Man.jpg"),
        movieId: nanoid()
    },
    {
        title: "Iron Man 2",
        type: "Movie",
        yearReleased: 2010,
        rating: 3,
        image: require("./imgs/media-covers/Iron_Man2.jpg"),
        movieId: nanoid()
    },
    {
        title: "Iron Man 3",
        type: "Movie",
        yearReleased: 2013,
        rating: 4,
        image: require("./imgs/media-covers/Iron_Man3.jpg"),
        movieId: nanoid()
    },
    {
        title: "The Godfather",
        type: "Movie",
        yearReleased: 1972,
        rating: 5,
        image: require("./imgs/media-covers/The_Godfather.jpg"),
        movieId: nanoid()
    },
    {
        title: "Spider-Man",
        type: "Movie",
        yearReleased: 2002,
        rating: 4,
        image: require("./imgs/media-covers/Spider_Man.jpg"),
        movieId: nanoid()
    },
    {
        title: "Spider-Man 2",
        type: "Movie",
        yearReleased: 2004,
        rating: 4,
        image: require("./imgs/media-covers/Sipder_Man2.jpg"),
        movieId: nanoid()
    },
    {
        title: "Spider-Man 3",
        type: "Movie",
        yearReleased: 2007,
        rating: 3,
        image: require("./imgs/media-covers/Spider_Man3.jpg"),
        movieId: nanoid()
    }
];
