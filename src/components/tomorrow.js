import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import Timer from "./functions/timer";
import * as myConstClass from "./content";

const getTomorrowDate = () => {
  const date = new Date();
  const left = date.setDate(date.getDate() + 1);
  return date.toDateString(left);
};

export default function() {
  return (
    <Fragment>
      <Grid
        container
        spacing={0}
        align="center"
        justify="center"
        direction="column"
        style={{ paddingTop: "3em" }}
              >
        <Typography variant className="newh1">
          {myConstClass.hi2}
        </Typography>
        <Typography variant className="newh2">
          {myConstClass.tomorrow}
        </Typography>
        <Typography variant className="newh3">
          {getTomorrowDate()}
        </Typography>
        <Typography variant className="newh2">
          {myConstClass.and}
        </Typography>
        <Typography variant className="newh3">
          <Timer />{" "}
          <weak style={{ color: "black", fontWeight: 100 }}> {" away!"}</weak>
        </Typography>
       
      </Grid>
    </Fragment>
  );
}
