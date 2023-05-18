import { MediaInterface } from "./MediaInterface";

export type Role = "Default" | "Admin" | "Super";

export interface UserInterface {
    _id?: string;
    username: string;
    watched: MediaInterface[];
    toWatch: MediaInterface[];
    role: Role;
}
