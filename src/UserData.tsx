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
        role: "Default"
    },
    {
        username: "Joey",
        watched: [],
        role: "Default"
    },
    {
        username: "Bood",
        watched: [],
        role: "Default"
    },
    {
        username: "Talha",
        watched: [],
        role: "Default"
    },
    {
        username: "Mercedes",
        watched: [],
        role: "Default"
    }
];
