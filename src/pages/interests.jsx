import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {PhotoGallary} from "../Components/photoGallary";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(12),
    fontSize: 38,
    color: "#3f6e4d",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
      marginTop: theme.spacing(6),
    },
  },
  subtitle: {
    fontSize: 17,
    margin: theme.spacing(3),
    marginRight: theme.spacing(50),
    marginLeft: theme.spacing(50),
    marginTop: theme.spacing(3),
    textAlign: "center",
    lineHeight: 1.3,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom: theme.spacing(4),
      fontSize: 13,
    },
  },
}));

export function AboutMe() {
  const classes = useStyles();

  return (
  <>
       <div className={classes.title}>
        <strong>get to know me through photos!</strong>
      </div>
      <div className={classes.subtitle}>
        A collection of photos that represent me. I've played competitive soccer my whole life, so I
        love staying active, whether with sports or hiking. I also love animals, 
        going to concerts and visual art (see bottom right for my watercolour painting)!
      </div>
      <PhotoGallary />
  </>
  );
}

export default AboutMe;
