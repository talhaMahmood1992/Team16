import React from "react";
import { Router } from "./Router";
import { CurrentUserContextProvider } from "./store/currentUserContext";

function App(): JSX.Element {
    return (
        <CurrentUserContextProvider>
            <Router />
        </CurrentUserContextProvider>
    );
}

export default App;
