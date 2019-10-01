import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import Yester from "./functions/yester-timer";
import * as myConstClass from "./content";
const getYesterDate = () => {
  const date = new Date();
  const left = date.setDate(date.getDate() - 1);
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
          {myConstClass.yesterday}
        </Typography>
        <Typography variant className="newh3">
          {getYesterDate()}
        </Typography>
        <Typography variant className="newh2">
          {myConstClass.started}
        </Typography>
        <Typography variant className="newh3">
          {" "}
          <Yester />
          <weak style={{ color: "black", fontWeight: 100 }}>
            {" "}
            {" ago!"}
          </weak>{" "}
        </Typography>
        
      </Grid>
    </Fragment>
  );
}
