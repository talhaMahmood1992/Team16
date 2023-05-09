//Types
export type Role = "Default" | "Admin" | "Super";
export type UserSubmitForm = {
    title: string;
    yearReleased: number;
    rating: number;
    type: mediaType;
    image: string;
};
export type UserAddForm = {
    username: string;
};
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

//Interfaces
export interface Media {
    title: string;
    type: mediaType;
    yearReleased: number;
    rating: number;
    image: string;
    genres: mediaGenre[];
    _id: string;
    //reviews: string[];
}
export interface PersonalMedia {
    media: Media;
    review: string;
    id: string;
}
export interface UserInterface {
    username: string;
    watched: PersonalMedia[];
    role: "Default" | "Admin" | "Super";
}
