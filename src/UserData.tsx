interface Media {
    title: string;
}
export interface PersonalMedia extends Media {
    review: string;
}
export interface UserInterface {
    username: string;
    watched: PersonalMedia[];
    toWatch: Media[];
    friends: string[];
}

export const UserData: UserInterface[] = [
    {
        username: "Ian",
        watched: [{ title: "Mad Men", review: "Good" }],
        toWatch: [{ title: "" }],
        friends: ["Joey", "Bood"]
    },
    {
        username: "Joey",
        watched: [{ title: "Tombstone", review: "My favorite movie" }],
        toWatch: [{ title: "" }],
        friends: ["Ian", "Mercedes"]
    },
    {
        username: "Bood",
        watched: [{ title: "", review: "" }],
        toWatch: [{ title: "" }],
        friends: ["Ian", "Talha"]
    },
    {
        username: "Talha",
        watched: [{ title: "", review: "" }],
        toWatch: [{ title: "" }],
        friends: ["Bood", "Mercedes"]
    },
    {
        username: "Mercedes",
        watched: [{ title: "", review: "" }],
        toWatch: [{ title: "" }],
        friends: ["Joey", "Talha"]
    }
];
