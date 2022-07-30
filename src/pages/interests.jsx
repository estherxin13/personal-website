import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 25,
    margin: theme.spacing(40),
    textAlign: 'center',
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      margin: theme.spacing(13),
    },
  },
}));

export function Interests() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <strong>to be written, come back very soon for updates! </strong>
      </div>
    </>
  );
}
