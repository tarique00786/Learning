import React, { useState, useEffect } from "react";
import {
  Accordion,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
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
      <h2>React Fetch API Example</h2>
      <Accordion>
        <AccordionSummary>
          <Typography>This is the summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Users.map((item, i) => {
            return <Typography key={i}>{item.label}</Typography>;
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
}
