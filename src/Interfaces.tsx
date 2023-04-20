//Types
export type Role = "Default" | "Admin" | "Super";
export type UserSubmitForm = {
    title: string;
    yearReleased: number;
    rating: number;
    type: mediaType;
    image: string;
};
export type mediaType = "Movie" | "Show";

//Interfaces
export interface Media {
    title: string;
    type: mediaType;
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
export interface UserInterface {
    username: string;
    watched: PersonalMedia[];
    toWatch: Media[];
    friends: string[];
}
