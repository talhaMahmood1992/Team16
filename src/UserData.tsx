import { UserInterface } from "./Interfaces";
import { findMedia, mediaData } from "./MediaData";

export const UserData: UserInterface[] = [
    {
        username: "Test",
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
