import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import ToastNotification from "../shared/ToastNotification/ToastNotification"

const MainPage = () => {
    const [errorNotification, setErrorNotification] = useState({
        isSearchTermNotFound: false,
        notificationContent: '',
        notificationSeverity: '',
        notificationWidth: '100%',
    });

    const showToastNotification = () => {
        const { 
            notificationContent, 
            notificationSeverity, 
            notificationWidth,
        } = errorNotification;

            return (
                <ToastNotification notificationContent={ notificationContent }
                                   severity={ notificationSeverity }
                                   width={ notificationWidth }
                                   errorNotification={ errorNotification }
                                   setErrorNotification={ setErrorNotification }/>
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