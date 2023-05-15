export type mediaType = "Movie" | "Show";

export type mediaGenre =
    | "Action"
    | "Adventure"
    | "Animated"
    | "Comedy"
    | "Crime"
    | "Drama"
    | "Fantasy"
    | "History"
    | "Horror"
    | "Kids"
    | "Mystery"
    | "Reality"
    | "Romance"
    | "Science Fiction"
    | "Sports"
    | "Superhero"
    | "Thriller"
    | "Western";

export interface MediaInterface {
    _id?: string;
    mediaId?: string;
    title: string;
    type: mediaType;
    yearReleased: number;
    rating: number;
    image: string;
    genres: mediaGenre[];
}
