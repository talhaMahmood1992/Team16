import { Media, PersonalMedia, UserInterface } from "./Interfaces";
import { findMedia, mediaData } from "./MediaData";

export const UserData: UserInterface[] = [
    {
        username: "Default",
        watched: [],
        role: "Default"
    },
    {
        username: "Super",
        watched: [],
        role: "Super"
    },
    {
        username: "Admin",
        watched: [],
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

export function getUserNames(): string[] {
    return UserData.map((user) => user.username);
}

//The function consumes a userName (userInterface has username),
//and returns a userInterface belongiong to the user
export function getUserByUsername(username: string): UserInterface {
    const user = UserData.find((user) => user.username === username);
    return user ? user : { username: "", watched: [], role: "Default" };
}

//The function consumes a list of Media, and a list of PersonalMedia
//and returns a list of PersonalMedia that has extra elements
//made using the mediaList argument
function createPersonalMediaList(
    mediaList: Media[],
    oldWatched: PersonalMedia[]
): PersonalMedia[] {
    const newPersonalMedia = mediaList.map((media) => ({
        media,
        review: "",
        id: media._id
    }));
    return [...oldWatched, ...newPersonalMedia];
}
//The function consumes a userName and NewMedia, finds it userInterface
//in the userData and changed its Wathced property
//and changed
export function updateWatchedMediaForUser(
    userName: string,
    newMedia: Media[]
): void {
    const userIndex = UserData.findIndex((user) => user.username === userName);
    if (userIndex >= 0) {
        UserData[userIndex].watched = createPersonalMediaList(
            newMedia,
            UserData[userIndex].watched
        );
    }
}
