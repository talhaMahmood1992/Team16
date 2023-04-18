import { Media, PersonalMedia, findMedia, mediaData } from "./MediaData";

export interface UserInterface {
    username: string;
    watched: PersonalMedia[];
    toWatch: Media[];
    friends: string[];
}

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
        toWatch: [mediaData[findMedia(mediaData, "Mad Men")]],
        friends: ["Joey", "Bood"]
    },
    {
        username: "Joey",
        watched: [],
        toWatch: [],
        friends: ["Ian", "Mercedes"]
    },
    {
        username: "Bood",
        watched: [],
        toWatch: [],
        friends: ["Ian", "Talha"]
    },
    {
        username: "Talha",
        watched: [],
        toWatch: [],
        friends: ["Bood", "Mercedes"]
    },
    {
        username: "Mercedes",
        watched: [],
        toWatch: [],
        friends: ["Joey", "Talha"]
    }
];
