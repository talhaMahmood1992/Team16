import { UserInterface } from "./Interfaces";
import { findMedia, mediaData } from "./MediaData";

export const UserData: UserInterface[] = [
    {
        username: "Ian",
        watched: [
            {
                media: mediaData[findMedia(mediaData, "Mad Men")],
                review: "",
                id: mediaData[findMedia(mediaData, "Mad Men")].movieId
            },
            {
                media: mediaData[findMedia(mediaData, "Lawrence of Arabia")],
                review: "",
                id: mediaData[findMedia(mediaData, "Lawrence of Arabia")]
                    .movieId
            }
        ],
        toWatch: [mediaData[findMedia(mediaData, "Mad Men")]]
    },
    {
        username: "Joey",
        watched: [],
        toWatch: []
    },
    {
        username: "Bood",
        watched: [],
        toWatch: []
    },
    {
        username: "Talha",
        watched: [],
        toWatch: []
    },
    {
        username: "Mercedes",
        watched: [],
        toWatch: []
    }
];
