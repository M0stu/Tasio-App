import React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography
      sx={{ fontSize: "18px", color: "white", fontWeight: "bold" }}
    >{`${name ? `Tssssing with: ${name}` : ""}`}</Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

export default connect(mapStoreStateToProps)(ChosenOptionLabel);
