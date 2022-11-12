import React, { useState } from "react";
// import styles from "./style.module.css";
import DialogBox from "../DialogBox";
import Logo from "../Logo";
import Icons from "../Icons";
import Box from "@mui/material/Box";
import Card from "../Card";
import SearchBar from "../../../SearchBar/SearchBar";
import ToastNotification from "../../../shared/ToastNotification/ToastNotification";

const MainPage = () => {
  const [errorNotification, setErrorNotification] = useState({
    isSearchTermNotFound: false,
    notificationContent: "",
    notificationSeverity: "",
    notificationWidth: "100%",
  });

  const showToastNotification = () => {
    const { notificationContent, notificationSeverity, notificationWidth } =
      errorNotification;

    return (
      <ToastNotification
        notificationContent={notificationContent}
        severity={notificationSeverity}
        width={notificationWidth}
        errorNotification={errorNotification}
        setErrorNotification={setErrorNotification}
      />
    );
  };
  const cardData = [
    {
      id: 1,
      title: "Semantic Drift Quiz",
      definition:
        "These words may not be on the tip of anyone's tongue, but once upon a time all of these were synonyms for common words. If you want to sound as though you had spent the morning eating a very old thesaurus instead of breakfast then this quiz is for you. It will give yousupe powers: the knowledge you gain will annoy your friends and annoy your enemies even more.",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Box display="flex" justifyContent="center" height="100vh">
      <div>
        <Logo />

        <SearchBar
          errorNotification={errorNotification}
          setErrorNotification={setErrorNotification}
        />
        {showToastNotification()}
        <Card handleClose={handleClose} open={open} />

        {open && (
          <div>
            <DialogBox
              open={open}
              handleClose={handleClose}
              wordInfo={cardData[0]}
            />
          </div>
        )}
        <Icons open={open} />
      </div>
    </Box>
  );
};

export default MainPage;
