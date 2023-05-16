import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { FavoritesPage } from "./Pages/Favorites";
import { AddMediaPage } from "./Pages/AddMediaPage";
import { EditMediaPage } from "./Pages/EditMedia";
import { BrowseMedia } from "./Pages/BrowseMedia";
import { LearnMorePage } from "./Pages/LearnMorePage";
import { EditorInterface } from "./Pages/EditorInterface";
import { NotFound } from "./Pages/NotFound";
import { AddUser } from "./Pages/AddUser";
import { MainHeader } from "./Layout/MainHeader";
import { Settings } from "./Components/Settings/Settings";
import React, { useContext, useEffect, useState } from "react";
import { useFetchItem } from "./hooks/useFetchItem";
import { getInitialUser } from "./api/usersApi";
import { CurrentUserContext } from "./store/currentUserContext";
import { Media } from "./Interfaces";
import { mediaData } from "./MediaData";

export const Router = () => {
    const [settingsIsShown, setSettingsIsShown] = useState<boolean>(false);
    const userId = localStorage.getItem("userId");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [initialUser, loading] = useFetchItem(() => getInitialUser(userId!));
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    const [superList, setSuperList] = useState<string[]>([]);
    const [changeMedia, setChangeMedia] = useState<Media>(mediaData[0]);

    // what is the name of the currentUser
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentUserName, setCurrentUserName] = useState<string>("Default");

    function handleEdits(titles: string[]) {
        setSuperList([...titles]);
    }

    const showSettingsHandler = (): void => {
        setSettingsIsShown(true);
    };

    const hideSettingsHandler = (): void => {
        setSettingsIsShown(false);
    };

    useEffect(() => {
        if (initialUser && !currentUser) {
            setCurrentUser(initialUser);
        }
    }, [initialUser]);

    let output;

    if (currentUser && !loading) {
        const { role } = currentUser;
        // eslint-disable-next-line no-extra-parens
        output = (
            <>
                <MainHeader showSettingsHandler={showSettingsHandler} />

                {settingsIsShown /* eslint-disable-line */ && (
                    <Settings hideSettingsHandler={hideSettingsHandler} />
                )}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/friends" element={<FriendsPage />} /> */}
                    <Route path="/mylists" element={<FavoritesPage />} />
                    <Route
                        path="/addMedia"
                        element={<AddMediaPage role={role} />}
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
                            />
                        }
                    />
                    <Route path="/learnMorePage" element={<LearnMorePage />} />
                    <Route
                        path="/mediaRevision"
                        element={
                            <EditorInterface role={role} media={changeMedia} />
                        }
                    />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/AddUser" element={<AddUser role={role} />} />
                </Routes>
            </>
        );
    }

    return <>{output}</>;
};
