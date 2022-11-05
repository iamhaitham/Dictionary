import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ToastNotification from "../shared/ToastNotification/ToastNotification"

const MainPage = () => {
    const [isSearchTermNotFound, setIsSearchTermNotFound] = useState(false);
    const [notificationContent, setNotificationContent] = useState();
    const [notificationSeverity, setNotificationSeverity] = useState();
    const [notificationWidth, setNotificationWidth] = useState();
    const [isOpen, setIsOpen] = useState(false);

    const showToastNotification = () => {
        if (isSearchTermNotFound)
            return (
                <ToastNotification notificationContent={ notificationContent }
                                   severity={ notificationSeverity }
                                   width={ notificationWidth }
                                   isSnackBarOpen={ isOpen }/>
            );
    }

    return (
    <>
        <SearchBar setIsSearchTermNotFound={ setIsSearchTermNotFound }
                   setNotificationContent={ setNotificationContent }
                   setNotificationSeverity={ setNotificationSeverity }
                   setNotificationWidth={ setNotificationWidth }
                   setIsOpen={ setIsOpen }/>
        { showToastNotification() }
    </>
    )
}

export default MainPage;