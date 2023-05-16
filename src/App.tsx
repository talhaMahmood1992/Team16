import React from "react";
import { Router } from "./Router";
import { CurrentUserContextProvider } from "./store/currentUserContext";

function App(): JSX.Element {
    const userId = localStorage.getItem("userId");
    if (!userId) {
        localStorage.setItem("userId", "645fd04509b4ba6a7a37acc1");
    }
    return (
        <CurrentUserContextProvider>
            <Router />
        </CurrentUserContextProvider>
    );
}

export default App;
