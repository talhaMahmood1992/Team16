import { nanoid } from "nanoid";
import { Media } from "./Interfaces";
import slugify from "react-slugify";

export function findMedia(data: Media[], title: string): number {
    return data.findIndex((datum: Media): boolean => datum.title === title);
}
export function updateMediaInList(media: Media): void {
    const index = mediaData.findIndex((m) => m._id === media._id);
    if (index >= 0) {
        mediaData[index] = media;
    }
}

export let mediaData: Media[] = [
    {
        title: "2001 A Space Odyssey",
        type: "Movie",
        yearReleased: 1968,
        rating: 5,
        image: "",
        genres: ["Adventure", "Drama", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Apocalypse Now",
        type: "Movie",
        yearReleased: 1979,
        rating: 5,
        image: "",
        genres: ["Adventure", "History", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Citizen Kane",
        type: "Movie",
        yearReleased: 1941,
        rating: 5,
        image: "",
        genres: ["Drama", "Mystery"],
        _id: nanoid()
    },
    {
        title: "Titanic",
        type: "Movie",
        yearReleased: 1997,
        rating: 4,
        image: "",
        genres: ["Drama", "History", "Romance"],
        _id: nanoid()
    },
    {
        title: "The Blind Side",
        type: "Movie",
        yearReleased: 2009,
        rating: 3,
        image: "",
        genres: ["Drama", "Sports"],
        _id: nanoid()
    },
    {
        title: "Black Mirror",
        type: "Show",
        yearReleased: 2011,
        rating: 4,
        image: "",
        genres: ["Drama", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Animal House",
        type: "Movie",
        yearReleased: 1978,
        rating: 4,
        image: "",
        genres: ["Comedy", "Romance"],
        _id: nanoid()
    },
    {
        title: "Caddyshack",
        type: "Movie",
        yearReleased: 1980,
        rating: 3,
        image: "",
        genres: ["Comedy", "Sports"],
        _id: nanoid()
    },
    {
        title: "Easy Rider",
        type: "Movie",
        yearReleased: 1969,
        rating: 4,
        image: "",
        genres: ["Adventure", "Comedy", "Western"],
        _id: nanoid()
    },
    {
        title: "Elephant",
        type: "Movie",
        yearReleased: 2003,
        rating: 3,
        image: "",
        genres: ["Crime", "Horror", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Gilmore Girls",
        type: "Show",
        yearReleased: 2000,
        rating: 4,
        image: "",
        genres: ["Comedy", "Drama"],
        _id: nanoid()
    },
    {
        title: "Eyes Wide Shut",
        type: "Movie",
        yearReleased: 1999,
        rating: 4,
        image: "",
        genres: ["Drama", "Mystery", "Romance", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Friends",
        type: "Show",
        yearReleased: 1994,
        rating: 4,
        image: "",
        genres: ["Comedy", "Romance"],
        _id: nanoid()
    },
    {
        title: "Full Metal Jacket",
        type: "Movie",
        yearReleased: 1987,
        rating: 5,
        image: "",
        genres: ["Action", "Adventure", "History"],
        _id: nanoid()
    },
    {
        title: "Fight Club",
        type: "Movie",
        yearReleased: 1999,
        rating: 4,
        image: "",
        genres: ["Action", "Crime", "Drama", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Drive",
        type: "Movie",
        yearReleased: 2011,
        rating: 3,
        image: "",
        genres: ["Action", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Office",
        type: "Show",
        yearReleased: 2005,
        rating: 5,
        image: "",
        genres: ["Comedy", "Romance"],
        _id: nanoid()
    },
    {
        title: "Parks and Recreation",
        type: "Show",
        yearReleased: 2009,
        rating: 3,
        image: "",
        genres: ["Comedy", "Romance"],
        _id: nanoid()
    },
    {
        title: "The Breakfast Club",
        type: "Movie",
        yearReleased: 1985,
        rating: 4,
        image: "",
        genres: ["Comedy", "Drama"],
        _id: nanoid()
    },
    // {
    //     title: "Beetlejuice",
    //     type: "Movie",
    //     yearReleased: 1988,
    //     rating: 4,
    //     image: "",
    //     genres: ["Comedy", "Horror", "Kids", "Fantasy"],
    //     _id: nanoid()
    // },
    {
        title: "The Lorax",
        type: "Movie",
        yearReleased: 2012,
        rating: 3,
        image: "",
        genres: ["Animated", "Comedy", "Kids"],
        _id: nanoid()
    },
    {
        title: "Keeping Up With The Kardashians",
        type: "Show",
        yearReleased: 2007,
        rating: 3,
        image: "",
        genres: ["Reality", "Romance"],
        _id: nanoid()
    },
    {
        title: "The Help",
        type: "Movie",
        yearReleased: 2011,
        rating: 3,
        image: "",
        genres: ["Drama", "History"],
        _id: nanoid()
    },
    {
        title: "Hidden Figures",
        type: "Movie",
        yearReleased: 2017,
        rating: 3,
        image: "",
        genres: ["Drama", "History"],
        _id: nanoid()
    },
    {
        title: "The Hunger Games",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Hunger Games: Catching Fire",
        type: "Movie",
        yearReleased: 2013,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Lawrence of Arabia",
        type: "Movie",
        yearReleased: 1962,
        rating: 5,
        image: "",
        genres: ["Adventure", "Drama", "History"],
        _id: nanoid()
    },
    {
        title: "Doctor Zhivago",
        type: "Movie",
        yearReleased: 1965,
        rating: 4,
        image: "",
        genres: ["Drama", "History", "Romance"],
        _id: nanoid()
    },
    {
        title: "Tombstone",
        type: "Movie",
        yearReleased: 1993,
        rating: 4,
        image: "",
        genres: ["Drama", "History", "Western"],
        _id: nanoid()
    },
    {
        title: "Resevoir Dogs",
        type: "Movie",
        yearReleased: 1992,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Pulp Fiction",
        type: "Movie",
        yearReleased: 1994,
        rating: 4,
        image: "",
        genres: ["Comedy", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Se7en",
        type: "Movie",
        yearReleased: 1995,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Blade Runner",
        type: "Movie",
        yearReleased: 1982,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Blade Runner 2049",
        type: "Movie",
        yearReleased: 2017,
        rating: 3,
        image: "",
        genres: ["Action", "Adventure", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Fargo",
        type: "Movie",
        yearReleased: 1996,
        rating: 4,
        image: "",
        genres: ["Comedy", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "No Country for Old Men",
        type: "Movie",
        yearReleased: 2007,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama", "Mystery", "Thriller", "Western"],
        _id: nanoid()
    },
    {
        title: "The Matrix",
        type: "Movie",
        yearReleased: 1999,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction"],
        _id: nanoid()
    },
    {
        title: "The Matrix Reloaded",
        type: "Movie",
        yearReleased: 2003,
        rating: 3,
        image: "",
        genres: ["Action", "Science Fiction"],
        _id: nanoid()
    },
    {
        title: "The Matrix Revolutions",
        type: "Movie",
        yearReleased: 2003,
        rating: 2,
        image: "",
        genres: ["Action", "Science Fiction"],
        _id: nanoid()
    },
    {
        title: "The Matrix Resurrections",
        type: "Movie",
        yearReleased: 2021,
        rating: 2,
        image: "",
        genres: ["Action", "Science Fiction"],
        _id: nanoid()
    },
    {
        title: "The Maze Runner",
        type: "Movie",
        yearReleased: 2014,
        rating: 3,
        image: "",
        genres: ["Action", "Science Fiction", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "My Own Private Idaho",
        type: "Movie",
        yearReleased: 1991,
        rating: 3,
        image: "",
        genres: ["Adventure", "Drama", "Romance"],
        _id: nanoid()
    },
    {
        title: "My Neighbor Totoro",
        type: "Movie",
        yearReleased: 1990,
        rating: 4,
        image: "",
        genres: ["Animated", "Fantasy", "Kids"],
        _id: nanoid()
    },
    {
        title: "Ponyo",
        type: "Movie",
        yearReleased: 2009,
        rating: 4,
        image: "",
        genres: ["Adventure", "Animated", "Fantasy", "Kids"],
        _id: nanoid()
    },
    {
        title: "Nocturnal Animals",
        type: "Movie",
        yearReleased: 2016,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama", "Romance", "Thriller", "Western"],
        _id: nanoid()
    },
    {
        title: "Dancer in the Dark",
        type: "Movie",
        yearReleased: 2000,
        rating: 4,
        image: "",
        genres: ["Drama"],
        _id: nanoid()
    },
    {
        title: "Donnie Darko",
        type: "Movie",
        yearReleased: 2001,
        rating: 5,
        image: "",
        genres: ["Drama", "Horror", "Romance", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Southland Tales",
        type: "Movie",
        yearReleased: 2006,
        rating: 2,
        image: "",
        genres: ["Comedy", "Drama", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Shawshank Redemption",
        type: "Movie",
        yearReleased: 1994,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama", "Mystery"],
        _id: nanoid()
    },
    {
        title: "Gone With the Wind",
        type: "Movie",
        yearReleased: 1939,
        rating: 5,
        image: "",
        genres: ["Drama", "History", "Romance"],
        _id: nanoid()
    },
    {
        title: "Ben-Hur",
        type: "Movie",
        yearReleased: 1959,
        rating: 5,
        image: "",
        genres: ["Action", "Adventure", "Drama", "History", "Romance"],
        _id: nanoid()
    },
    {
        title: "The Last Temptation of Christ",
        type: "Movie",
        yearReleased: 1988,
        rating: 4,
        image: "",
        genres: ["Drama"],
        _id: nanoid()
    },
    {
        title: "Superbad",
        type: "Movie",
        yearReleased: 2007,
        rating: 4,
        image: "",
        genres: ["Comedy"],
        _id: nanoid()
    },
    {
        title: "Modern Family",
        type: "Show",
        yearReleased: 2009,
        rating: 3,
        image: "",
        genres: ["Comedy"],
        _id: nanoid()
    },
    {
        title: "Mr. Robot",
        type: "Show",
        yearReleased: 2015,
        rating: 3,
        image: "",
        genres: ["Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "New Girl",
        type: "Show",
        yearReleased: 2011,
        rating: 3,
        image: "",
        genres: ["Comedy"],
        _id: nanoid()
    },
    {
        title: "Survivor",
        type: "Show",
        yearReleased: 2000,
        rating: 3,
        image: "",
        genres: ["Reality", "Sports"],
        _id: nanoid()
    },
    {
        title: "Shark Tank",
        type: "Show",
        yearReleased: 2009,
        rating: 3,
        image: "",
        genres: ["Reality"],
        _id: nanoid()
    },
    {
        title: "Shameless",
        type: "Show",
        yearReleased: 2011,
        rating: 3,
        image: "",
        genres: ["Comedy", "Drama"],
        _id: nanoid()
    },
    {
        title: "iCarly",
        type: "Show",
        yearReleased: 2007,
        rating: 3,
        image: "",
        genres: ["Comedy", "Kids"],
        _id: nanoid()
    },
    {
        title: "The Good Place",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: "",
        genres: ["Comedy"],
        _id: nanoid()
    },
    {
        title: "21 Jump Street",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: "",
        genres: ["Action", "Comedy", "Crime"],
        _id: nanoid()
    },
    {
        title: "The Super Mario Bros. Movie",
        type: "Movie",
        yearReleased: 2023,
        rating: 4,
        image: "",
        genres: ["Animated", "Adventure", "Comedy", "Kids"],
        _id: nanoid()
    },
    {
        title: "Stranger Things",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: "",
        genres: ["Drama", "Mystery", "Science Fiction"],
        _id: nanoid()
    },
    {
        title: "American Psycho",
        type: "Movie",
        yearReleased: 2000,
        rating: 4,
        image: "",
        genres: ["Comedy", "Crime", "Drama", "Horror", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Buffalo '66",
        type: "Movie",
        yearReleased: 1998,
        rating: 3,
        image: "",
        genres: ["Comedy", "Crime", "Drama", "Romance"],
        _id: nanoid()
    },
    {
        title: "Scream",
        type: "Movie",
        yearReleased: 1996,
        rating: 4,
        image: "",
        genres: ["Comedy", "Drama", "Horror", "Mystery"],
        _id: nanoid()
    },
    {
        title: "Scream 2",
        type: "Movie",
        yearReleased: 1997,
        rating: 4,
        image: "",
        genres: ["Comedy", "Drama", "Horror", "Mystery"],
        _id: nanoid()
    },
    {
        title: "Where the Crawdads Sing",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: "",
        genres: ["Drama", "Mystery"],
        _id: nanoid()
    },
    {
        title: "Mulholland Drive",
        type: "Movie",
        yearReleased: 2001,
        rating: 3,
        image: "",
        genres: ["Drama", "Mystery", "Romance", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Spongebob Squarepants",
        type: "Show",
        yearReleased: 1999,
        rating: 4,
        image: "",
        genres: ["Animated", "Comedy", "Kids"],
        _id: nanoid()
    },
    {
        title: "Twin Peaks",
        type: "Show",
        yearReleased: 1990,
        rating: 5,
        image: "",
        genres: ["Crime", "Drama", "Horror", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Mad Men",
        type: "Show",
        yearReleased: 2007,
        rating: 4,
        image: "",
        genres: ["Drama", "History"],
        _id: nanoid()
    },
    {
        title: "Breaking Bad",
        type: "Show",
        yearReleased: 2008,
        rating: 5,
        image: "",
        genres: ["Action", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Better Call Saul",
        type: "Show",
        yearReleased: 2015,
        rating: 4,
        image: "",
        genres: ["Action", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Game of Thrones",
        type: "Show",
        yearReleased: 2011,
        rating: 5,
        image: "",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        _id: nanoid()
    },
    {
        title: "House of The Dragon",
        type: "Show",
        yearReleased: 2022,
        rating: 3,
        image: "",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        _id: nanoid()
    },
    {
        title: "Succession",
        type: "Show",
        yearReleased: 2018,
        rating: 4,
        image: "",
        genres: ["Comedy", "Drama"],
        _id: nanoid()
    },
    {
        title: "The Scary of Sixty First",
        type: "Movie",
        yearReleased: 2020,
        rating: 3,
        image: "",
        genres: ["Drama", "Horror", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Batman Begins",
        type: "Movie",
        yearReleased: 2005,
        rating: 3,
        image: "",
        genres: ["Action", "Adventure", "Superhero"],
        _id: nanoid()
    },
    {
        title: "The Dark Knight",
        type: "Movie",
        yearReleased: 2008,
        rating: 5,
        image: "",
        genres: ["Action", "Drama", "Superhero", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Dark Knight Rises",
        type: "Movie",
        yearReleased: 2012,
        rating: 4,
        image: "",
        genres: ["Action", "Drama", "Superhero", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Batman",
        type: "Movie",
        yearReleased: 2022,
        rating: 4,
        image: "",
        genres: ["Action", "Crime", "Mystery", "Superhero"],
        _id: nanoid()
    },
    // {
    //     title: "Joker",
    //     type: "Movie",
    //     yearReleased: 2019,
    //     rating: 4,
    //     image: "",
    //     genres: ["Crime", "Drama", "Superhero", "Thriller"],
    //     _id: nanoid()
    // },
    {
        title: "The Prestige",
        type: "Movie",
        yearReleased: 2006,
        rating: 4,
        image: "",
        genres: ["Drama", "History", "Science Fiction", "Thriller"],
        _id: nanoid()
    },
    {
        title: "There Will Be Blood",
        type: "Movie",
        yearReleased: 2007,
        rating: 4,
        image: "",
        genres: ["Drama", "History", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Iron Man",
        type: "Movie",
        yearReleased: 2008,
        rating: 4,
        image: "",
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "Iron Man 2",
        type: "Movie",
        yearReleased: 2010,
        rating: 2,
        image: "",
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "Iron Man 3",
        type: "Movie",
        yearReleased: 2013,
        rating: 3,
        image: "",
        genres: ["Action", "Adventure", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "The Wolf of Wall Street",
        type: "Movie",
        yearReleased: 2013,
        rating: 4,
        image: "",
        genres: ["Comedy", "Crime", "Drama"],
        _id: nanoid()
    },
    {
        title: "Shutter Island",
        type: "Movie",
        yearReleased: 2010,
        rating: 4,
        image: "",
        genres: ["Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Silence of the Lambs",
        type: "Movie",
        yearReleased: 1991,
        rating: 5,
        image: "",
        genres: ["Crime", "Drama", "Horror", "Mystery", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Taxi Driver",
        type: "Movie",
        yearReleased: 1976,
        rating: 5,
        image: "",
        genres: ["Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "The Godfather",
        type: "Movie",
        yearReleased: 1972,
        rating: 5,
        image: "",
        genres: ["Crime", "Drama"],
        _id: nanoid()
    },
    {
        title: "The Godfather Part II",
        type: "Movie",
        yearReleased: 1974,
        rating: 5,
        image: "",
        genres: ["Crime", "Drama"],
        _id: nanoid()
    },
    {
        title: "The Godfather Part III",
        type: "Movie",
        yearReleased: 1990,
        rating: 4,
        image: "",
        genres: ["Crime", "Drama"],
        _id: nanoid()
    },
    {
        title: "Scarface",
        type: "Movie",
        yearReleased: 1983,
        rating: 5,
        image: "",
        genres: ["Action", "Crime", "Drama", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Spider-Man",
        type: "Movie",
        yearReleased: 2002,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "Spider-Man 2",
        type: "Movie",
        yearReleased: 2004,
        rating: 4,
        image: "",
        genres: ["Action", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "Spider-Man 3",
        type: "Movie",
        yearReleased: 2007,
        rating: 3,
        image: "",
        genres: ["Action", "Science Fiction", "Superhero"],
        _id: nanoid()
    },
    {
        title: "The Virgin Suicides",
        type: "Movie",
        yearReleased: 1999,
        rating: 4,
        image: "",
        genres: ["Drama", "Mystery", "Romance", "Thriller"],
        _id: nanoid()
    },
    {
        title: "Vision Quest",
        type: "Movie",
        yearReleased: 1985,
        rating: 4,
        image: "",
        genres: ["Drama", "Romance", "Sports"],
        _id: nanoid()
    },
    {
        title: "Westworld",
        type: "Show",
        yearReleased: 2016,
        rating: 4,
        image: "",
        genres: ["Action", "Drama", "Science Fiction", "Western"],
        _id: nanoid()
    },
    {
        title: "Yellowstone",
        type: "Show",
        yearReleased: 2018,
        rating: 4,
        image: "",
        genres: ["Drama", "Western"],
        _id: nanoid()
    }
];

mediaData = mediaData.map((media) => ({
    ...media,
    image: require("./imgs/media-covers/" + slugify(media.title) + ".jpg")
}));
