import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./Components/Settings/Settings";
import { MainHeader } from "./Layout/MainHeader";
import { AddMediaPage } from "./Pages/AddMediaPage";
// import { FriendsPage } from "./Pages/FriendsPage";
import { HomePage } from "./Pages/HomePage";
import { FavoritesPage } from "./Pages/Favorites";
import { NotFound } from "./Pages/NotFound";
import { BrowseMedia } from "./Pages/BrowseMedia";
import { LearnMorePage } from "./Pages/LearnMorePage";
import { Role } from "./Interfaces";
import { EditMediaPage } from "./Pages/EditMedia";
import { EditorInterface } from "./Pages/EditorInterface";
import { mediaData } from "./MediaData";
import { Media } from "./Interfaces";
import { AddUser } from "./Pages/AddUser";
// import axios from "axios";
function App(): JSX.Element {
    const [settingsIsShown, setSettingsIsShown] = useState<boolean>(false);
    const [role, setRole] = useState<Role>("Default");
    const [superList, setSuperList] = useState<string[]>([]);
    const [changeMedia, setChangeMedia] = useState<Media>(mediaData[0]);
    const [mediaList, setMediaList] = useState<Media[]>(mediaData);

    // what is the name of the currentUser
    const [currentUserName, setCurrentUser] = useState<string>("Default");

    function handleCurrentUser(userName: string) {
        setCurrentUser(userName);
    }
    function handleEdits(titles: string[]) {
        setSuperList([...titles]);
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
                    handleCurrentUser={handleCurrentUser}
                />
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/friends" element={<FriendsPage />} /> */}
                <Route
                    path="/mylists"
                    element={<FavoritesPage userName={currentUserName} />}
                />
                <Route
                    path="/addMedia"
                    element={
                        <AddMediaPage
                            role={role}
                            mediaList={mediaList}
                            mediaSetter={setMediaList}
                        />
                    }
                />
                <Route
                    path="/editMedia"
                    element={
                        <EditMediaPage
                            role={role}
                            titles={superList}
                            setter={setChangeMedia}
                        />
                    }
                />
                <Route
                    path="/browseMedia"
                    element={
                        <BrowseMedia
                            superTitles={superList}
                            handleEdits={handleEdits}
                            role={role}
                            userName={currentUserName}
                            listOfMedia={mediaList}
                        />
                    }
                />
                <Route path="/learnMorePage" element={<LearnMorePage />} />
                <Route
                    path="/mediaRevision"
                    element={
                        <EditorInterface
                            role={role}
                            media={changeMedia}
                            mediaSetter={setMediaList}
                            superSetter={setSuperList}
                        />
                    }
                />
                <Route path="/*" element={<NotFound />} />
                <Route path="/AddUser" element={<AddUser role={role} />} />
            </Routes>
        </div>
    );
}

export default App;
