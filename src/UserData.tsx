import { UserInterface } from "./Interfaces";
import { findMedia, mediaData } from "./MediaData";

export const UserData: UserInterface[] = [
    {
        username: "Test",
        watched: [],
        toWatch: [],
        role: "Default"
    },
    {
        username: "Super",
        watched: [],
        toWatch: [],
        role: "Super"
    },
    {
        username: "Admin",
        watched: [],
        toWatch: [],
        role: "Admin"
    },
    {
        username: "Ian",
        watched: [
            {
                media: mediaData[findMedia(mediaData, "Mad Men")],
                review: "",
                id: mediaData[findMedia(mediaData, "Mad Men")]._id
            },
            {
                media: mediaData[findMedia(mediaData, "Lawrence of Arabia")],
                review: "",
                id: mediaData[findMedia(mediaData, "Lawrence of Arabia")]._id
            }
        ],
        toWatch: [mediaData[findMedia(mediaData, "Mad Men")]],
        role: "Default"
    },
    {
        username: "Joey",
        watched: [],
        toWatch: [],
        role: "Default"
    },
    {
        username: "Bood",
        watched: [],
        toWatch: [],
        role: "Default"
    },
    {
        username: "Talha",
        watched: [],
        toWatch: [],
        role: "Default"
    },
    {
        username: "Mercedes",
        watched: [],
        toWatch: [],
        role: "Default"
    }
];

export function getUserNames(): string[] {
    return UserData.map((user) => user.username);
}
