import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ToastNotification from "../shared/ToastNotification/ToastNotification"

const MainPage = () => {
    const [errorNotification, setErrorNotification] = useState({
        isSearchTermNotFound: false,
        notificationContent: '',
        notificationSeverity: '',
        notificationWidth: '100%',
        isOpen: false
    });

    const showToastNotification = () => {
        const { 
            isSearchTermNotFound,
            notificationContent, 
            notificationSeverity, 
            notificationWidth,
            isOpen
        } = errorNotification;

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
            <SearchBar errorNotification={ errorNotification } 
                       setErrorNotification={ setErrorNotification }/>
            { showToastNotification() }
        </>
    )
}

export default MainPage;