import React, { useState } from "react";
import { UserInterface } from "../interfaces/UserInterface";

interface CurrentUserContextProviderProps {
    children: JSX.Element;
}

type currentUserContextState = {
    currentUser: UserInterface | undefined;
    setCurrentUser: (currentUser: UserInterface) => void;
};

export const CurrentUserContext = React.createContext(
    {} as currentUserContextState
);

export const CurrentUserContextProvider = ({
    children
}: CurrentUserContextProviderProps) => {
    const [currentUser, setCurrentUser] = useState<UserInterface>();

    return (
        <CurrentUserContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    );
};
