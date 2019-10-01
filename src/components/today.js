import React, { Fragment } from "react";
import Time from "../components/functions/time";
import { Typography, Grid } from "@material-ui/core";
import * as myConstClass from "./content";
import "../style.css";

const getCurrentDate = () => {
  const date = new Date();
  return date.toDateString();
};

export default function() {
  return (
    <Fragment >
      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        style={{ paddingTop: "3em" }}
      >
        <Typography variant className="newh1">
          {myConstClass.hi1}
        </Typography>
        <Typography variant className="newh2">
          {myConstClass.currentdate}
        </Typography>
        <Typography variant className="newh3">
          {getCurrentDate()}
        </Typography>
        <Typography variant className="newh2">
          {myConstClass.currenttime}
        </Typography>
        <Typography variant className="newh3">
          <Time />
        </Typography>
      </Grid>
    </Fragment>
  );
}
