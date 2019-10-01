import React from "react";
import "../style.css";
import { Typography } from "@material-ui/core";
import * as myConstClass from "./content";



export default function() {
  return (
     <div className="footer">
          <Typography className="h6">{myConstClass.developed}</Typography>
          Made with <strong style={{ color: "blue", fontWeight: 500, }}>❤</strong> By{" "}
          <a
            href="https://docs.google.com/document/d/1Lw4pK5alCaGFamrLUaHiyaCYCvwY707L_bIBcvxFGd4/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong style={{ color: "blue", fontWeight: 500, }}> Inalien</strong>
          </a>{" "}
          | Times are in Device Time.
     </div> 
  );
}
