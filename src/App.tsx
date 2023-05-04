import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./Components/Settings";
import { MainHeader } from "./Layout/MainHeader";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { FavoritesPage } from "./Pages/Favorites";
import { NotFound } from "./Pages/NotFound";
import { BrowseMedia } from "./Pages/BrowseMedia";
import { LearnMorePage } from "./Pages/LearnMorePage";
import { Role } from "./Interfaces";

function App(): JSX.Element {
    const [settingsIsShown, setSettingsIsShown] = useState<boolean>(false);
    const [role, setRole] = useState<Role>("Default");
    const [FavoriteMedia, setFavoriteMedia] = useState<string[]>([]);
    //const [superList, setSuperList] = useState<string[]>([]);

    function handleFavorites(titles: string[]) {
        setFavoriteMedia([...titles]);
    }

    const showSettingsHandler = (): void => {
        setSettingsIsShown(true);
    };

    const hideSettingsHandler = (): void => {
        setSettingsIsShown(false);
    };

    return (
        <div>
            <MainHeader showSettingsHandler={showSettingsHandler} role={role} />

            {settingsIsShown /* eslint-disable-line */ && (
                <Settings
                    hideSettingsHandler={hideSettingsHandler}
                    role={role}
                    setRole={setRole}
                />
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route
                    path="/mylists"
                    element={<FavoritesPage titles={FavoriteMedia} />}
                />
                <Route
                    path="/addMedia"
                    element={<AddMediaPage role={role} />}
                />
                <Route
                    path="/editMedia"
                    element={<AddMediaPage role={role} />}
                />
                <Route
                    path="/browseMedia"
                    element={
                        <BrowseMedia
                            titles={FavoriteMedia}
                            handleFavorites={handleFavorites}
                        />
                    }
                />
                <Route path="/learnMorePage" element={<LearnMorePage />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
