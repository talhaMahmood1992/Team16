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
        watched: [],
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

//Function that return the UserInterace Given the userName
//If it is not found, it returns a default
export function getUserByUsername(username: string): UserInterface {
    const user = UserData.find((user) => user.username === username);
    return user ? user : { username: "", watched: [], role: "Default" };
}

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
