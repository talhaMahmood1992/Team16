import { nanoid } from "nanoid";
import { Media } from "./Interfaces";

export function findMedia(data: Media[], title: string): number {
    return data.findIndex((datum: Media): boolean => datum.title === title);
}

export const mediaData: Media[] = [
    {
        title: "2001 A Space Odyssey",
        type: "Movie",
        yearReleased: 1968,
        rating: 5,
        image: require("./imgs/media-covers/2001_a_space_odyssey.jpg"),
        genres: ["Adventure", "Drama", "Science Fiction", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Apocalypse Now",
        type: "Movie",
        yearReleased: 1979,
        rating: 5,
        image: require("./imgs/media-covers/Apocalypse_Now.jpg"),
        genres: ["Adventure", "History", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Hunger Games",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/the_hunger_games.jpg"),
        genres: ["Action", "Science Fiction", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Maze Runner",
        type: "Movie",
        yearReleased: 2014,
        rating: 3,
        image: require("./imgs/media-covers/the_maze_runner.jpg"),
        genres: ["Action", "Science Fiction", "Mystery", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Shutter Island",
        type: "Movie",
        yearReleased: 2010,
        rating: 4,
        image: require("./imgs/media-covers/shutter_island.jpg"),
        genres: ["Mystery", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Titanic",
        type: "Movie",
        yearReleased: 1997,
        rating: 4,
        image: require("./imgs/media-covers/titanic.jpg"),
        genres: ["Drama", "History", "Romance"],
        movieId: nanoid()
    },
    {
        title: "The Blind Side",
        type: "Movie",
        yearReleased: 2009,
        rating: 4,
        image: require("./imgs/media-covers/the_blind_side.jpg"),
        genres: ["Drama", "Sports"],
        movieId: nanoid()
    },
    {
        title: "The Help",
        type: "Movie",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/the_help.jpg"),
        genres: ["Drama", "History"],
        movieId: nanoid()
    },
    {
        title: "Hidden Figures",
        type: "Movie",
        yearReleased: 2017,
        rating: 4,
        image: require("./imgs/media-covers/hidden_figures.jpg"),
        genres: ["Drama", "History"],
        movieId: nanoid()
    },
    {
        title: "Black Mirror",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/black_mirror.jpg"),
        genres: ["Drama", "Science Fiction", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Shameless",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/shameless.jpg"),
        genres: ["Comedy", "Drama"],
        movieId: nanoid()
    },
    {
        title: "Gilmore Girls",
        type: "Show",
        yearReleased: 2000,
        rating: 4,
        image: require("./imgs/media-covers/gilmore_girls.jpg"),
        genres: ["Comedy", "Drama"],
        movieId: nanoid()
    },
    {
        title: "The Lorax",
        type: "Movie",
        yearReleased: 2012,
        rating: 3,
        image: require("./imgs/media-covers/the_lorax.jpg"),
        genres: ["Animated", "Comedy", "Kids"],
        movieId: nanoid()
    },
    {
        title: "New Girl",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: require("./imgs/media-covers/new_girl.jpg"),
        genres: ["Comedy"],
        movieId: nanoid()
    },
    {
        title: "Modern Family",
        type: "Show",
        yearReleased: 2009,
        rating: 3,
        image: require("./imgs/media-covers/modern_family.jpg"),
        genres: ["Comedy"],
        movieId: nanoid()
    },
    {
        title: "Friends",
        type: "Show",
        yearReleased: 1994,
        rating: 5,
        image: require("./imgs/media-covers/friends.jpg"),
        genres: ["Comedy", "Romance"],
        movieId: nanoid()
    },
    {
        title: "Full Metal Jacket",
        type: "Movie",
        yearReleased: 1987,
        rating: 5,
        image: require("./imgs/media-covers/full_metal_jacket.jpg"),
        genres: ["Action", "Adventure", "History"],
        movieId: nanoid()
    },
    {
        title: "Fight Club",
        type: "Movie",
        yearReleased: 1999,
        rating: 5,
        image: require("./imgs/media-covers/fight_club.jpg"),
        genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Office",
        type: "Show",
        yearReleased: 2005,
        rating: 5,
        image: require("./imgs/media-covers/the_office.jpg"),
        genres: ["Comedy", "Romance"],
        movieId: nanoid()
    },
    {
        title: "Parks and Recreation",
        type: "Show",
        yearReleased: 2009,
        rating: 4.3,
        image: require("./imgs/media-covers/parks_and_recreation.jpg"),
        genres: ["Comedy", "Romance"],
        movieId: nanoid()
    },
    {
        title: "Lawrence of Arabia",
        type: "Movie",
        yearReleased: 1962,
        rating: 4,
        image: require("./imgs/media-covers/lawrence_of_arabia.jpg"),
        genres: ["Adventure", "Drama", "History"],
        movieId: nanoid()
    },
    {
        title: "Tombstone",
        type: "Movie",
        yearReleased: 1993,
        rating: 4,
        image: require("./imgs/media-covers/tombstone.jpg"),
        genres: ["Drama", "History", "Western"],
        movieId: nanoid()
    },
    {
        title: "My Neighbor Totoro",
        type: "Movie",
        yearReleased: 1990,
        rating: 4,
        image: require("./imgs/media-covers/my_neighbor_totoro.jpg"),
        genres: ["Animated", "Fantasy", "Kids"],
        movieId: nanoid()
    },
    {
        title: "Ponyo",
        type: "Movie",
        yearReleased: 2009,
        rating: 4,
        image: require("./imgs/media-covers/ponyo.jpg"),
        genres: ["Adventure", "Animated", "Fantasy", "Kids"],
        movieId: nanoid()
    },
    {
        title: "Superbad",
        type: "Movie",
        yearReleased: 2007,
        rating: 4,
        image: require("./imgs/media-covers/superbad.jpg"),
        genres: ["Comedy"],
        movieId: nanoid()
    },
    {
        title: "Survivor",
        type: "Show",
        yearReleased: 2000,
        rating: 4,
        image: require("./imgs/media-covers/survivor.jpg"),
        genres: ["Reality", "Sports"],
        movieId: nanoid()
    },
    {
        title: "iCarly",
        type: "Show",
        yearReleased: 2007,
        rating: 3,
        image: require("./imgs/media-covers/icarly.jpg"),
        genres: ["Comedy", "Kids"],
        movieId: nanoid()
    },
    {
        title: "The Good Place",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: require("./imgs/media-covers/the_good_place.jpg"),
        genres: ["Comedy"],
        movieId: nanoid()
    },
    {
        title: "21 Jump Street",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/21_jump_street.jpg"),
        genres: ["Action", "Comedy", "Crime"],
        movieId: nanoid()
    },
    {
        title: "Stranger Things",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: require("./imgs/media-covers/stranger_things.jpg"),
        genres: ["Drama", "Mystery", "Science Fiction"],
        movieId: nanoid()
    },
    {
        title: "Where the Crawdads Sing",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/where_the_crawdads_sing.jpg"),
        genres: ["Drama", "Mystery"],
        movieId: nanoid()
    },
    {
        title: "Spongebob Squarepants",
        type: "Show",
        yearReleased: 1999,
        rating: 4,
        image: require("./imgs/media-covers/spongebob_squarepants.jpg"),
        genres: ["Animated", "Comedy", "Kids"],
        movieId: nanoid()
    },
    {
        title: "Twin Peaks",
        type: "Show",
        yearReleased: 1990,
        rating: 5,
        image: require("./imgs/media-covers/twin_peaks.jpg"),
        genres: ["Crime", "Drama", "Horror", "Mystery", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Mad Men",
        type: "Show",
        yearReleased: 2007,
        rating: 4,
        image: require("./imgs/media-covers/mad_men.jpg"),
        genres: ["Drama", "History"],
        movieId: nanoid()
    },
    {
        title: "Breaking Bad",
        type: "Show",
        yearReleased: 2008,
        rating: 5,
        image: require("./imgs/media-covers/breaking_bad.jpg"),
        genres: ["Action", "Crime", "Drama", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Game of Thrones",
        type: "Show",
        yearReleased: 2011,
        rating: 5,
        image: require("./imgs/media-covers/game_of_thrones.jpg"),
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        movieId: nanoid()
    },
    {
        title: "Better Call Saul",
        type: "Show",
        yearReleased: 2015,
        rating: 4,
        image: require("./imgs/media-covers/better_call_saul.jpg"),
        genres: ["Action", "Crime", "Drama", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "House of The Dragon",
        type: "Show",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/house_of_dragon.jpg"),
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        movieId: nanoid()
    },
    {
        title: "The Batman",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: require("./imgs/media-covers/The_Batman.jpg"),
        genres: ["Action", "Crime", "Mystery", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Batman Begins",
        type: "Movie",
        yearReleased: 2005,
        rating: 4,
        image: require("./imgs/media-covers/BatMan_Begins.jpg"),
        genres: ["Action", "Adventure", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "The Dark Knight",
        type: "Movie",
        yearReleased: 2008,
        rating: 5,
        image: require("./imgs/media-covers/The_Dark_Knight.jpg"),
        genres: ["Action", "Drama", "Superhero", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Dark Knight Rises",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: require("./imgs/media-covers/The_Dark_Knight_Rises.jpg"),
        genres: ["Action", "Drama", "Superhero", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Joker",
        type: "Movie",
        yearReleased: 2019,
        rating: 4,
        image: require("./imgs/media-covers/Joker.jpg"),
        genres: ["Crime", "Drama", "Superhero", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Prestige",
        type: "Movie",
        yearReleased: 2006,
        rating: 4,
        image: require("./imgs/media-covers/The_Prestige.jpg"),
        genres: ["Drama", "History", "Science Fiction", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Iron Man",
        type: "Movie",
        yearReleased: 2008,
        rating: 4,
        image: require("./imgs/media-covers/Iron_Man.jpg"),
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Iron Man 2",
        type: "Movie",
        yearReleased: 2010,
        rating: 3,
        image: require("./imgs/media-covers/Iron_Man2.jpg"),
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Iron Man 3",
        type: "Movie",
        yearReleased: 2013,
        rating: 4,
        image: require("./imgs/media-covers/Iron_Man3.jpg"),
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Taxi Driver",
        type: "Movie",
        yearReleased: 1976,
        rating: 5,
        image: require("./imgs/media-covers/taxi_driver.jpg"),
        genres: ["Crime", "Drama", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "The Godfather",
        type: "Movie",
        yearReleased: 1972,
        rating: 5,
        image: require("./imgs/media-covers/The_Godfather.jpg"),
        genres: ["Crime", "Drama"],
        movieId: nanoid()
    },
    {
        title: "The Godfather Part II",
        type: "Movie",
        yearReleased: 1974,
        rating: 5,
        image: require("./imgs/media-covers/godfather_p2.jpg"),
        genres: ["Crime", "Drama"],
        movieId: nanoid()
    },
    {
        title: "Scarface",
        type: "Movie",
        yearReleased: 1983,
        rating: 5,
        image: require("./imgs/media-covers/scarface.jpg"),
        genres: ["Action", "Crime", "Drama", "Thriller"],
        movieId: nanoid()
    },
    {
        title: "Spider-Man",
        type: "Movie",
        yearReleased: 2002,
        rating: 4,
        image: require("./imgs/media-covers/Spider_Man.jpg"),
        genres: ["Action", "Science Fiction", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Spider-Man 2",
        type: "Movie",
        yearReleased: 2004,
        rating: 4,
        image: require("./imgs/media-covers/Sipder_Man2.jpg"),
        genres: ["Action", "Science Fiction", "Superhero"],
        movieId: nanoid()
    },
    {
        title: "Spider-Man 3",
        type: "Movie",
        yearReleased: 2007,
        rating: 3,
        image: require("./imgs/media-covers/Spider_Man3.jpg"),
        genres: ["Action", "Science Fiction", "Superhero"],
        movieId: nanoid()
    }
];
