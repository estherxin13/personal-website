import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(15),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    margin: "auto",
    objectPosition: "center",
    objectFit: "cover",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function PhotoGallary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
          <img className={classes.image} alt="holding a kitten" src="/cat.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img className={classes.image} alt="CN tower" src="/toronto.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img className={classes.image} alt="hiking with sister" src="/hiking.jpg" />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <img className={classes.image} alt="rainbow" src="/rainbow.JPG" />
          </Grid>
          <Grid item xs={6}>
            <img className={classes.image} alt="soccer team" src="/soccer.JPG" />
          </Grid>
          <Grid item xs={3}>
            <img className={classes.image} alt="self portrait" src="/about.png" />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <img className={classes.image} alt="LANY concert" src="/concert.jpg" />
          </Grid>
          <Grid item xs={3}>
            <img className={classes.image} alt="puppy" src="/dog.JPG" />
          </Grid>
          <Grid item xs={3}>
            <img className={classes.image} alt="watercolour painting" src="/art.jpg" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PhotoGallary;
