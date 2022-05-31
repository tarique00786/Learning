import React, { useState, useEffect } from "react";
import {
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export default function Expand() {
  const [Users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://testapi.buopso.com/lms/sources/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.result);
        fetchUsers(res.result);
      });
  };
  // console.log(getData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Assignment3</h2>
      <Accordion>
        <AccordionSummary>
          <Typography>Lead source</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textalign: "center",
            }}
          >
            {Users.map((item, i) => {
              return (
                <checkbox>
                  <Typography key={i}>{item.label}</Typography>
                </checkbox>
              );
            })}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
