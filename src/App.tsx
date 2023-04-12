import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { BrowseMedia } from "./Pages/BrowseMedia";
import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { MyListsPage } from "./Pages/MyListsPage";

function App(): JSX.Element {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/mylists" element={<MyListsPage />} />
                <Route path="/addMedia" element={<AddMediaPage />} />
                <Route path="/browseMedia" element={<BrowseMedia />} />
            </Routes>
        </div>
    );
}

export default App;
