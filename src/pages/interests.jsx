import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 25,
    color: "#3f6e4d",
    marginTop: theme.spacing(12),
    marginLeft: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      margin: theme.spacing(3),
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(7),
    },
  },
}));

export function Interests() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <strong>learn more about me!</strong>
      </div>
    </>
  );
}
