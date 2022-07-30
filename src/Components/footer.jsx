import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    paddingBottom: theme.spacing(4),
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: "#3f6e4d",
    paddingLeft: theme.spacing(23),
    paddingTop: theme.spacing(2),
    fontSize: 15,
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(10),
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      borderBottom: "2px solid white",
    },
  },
  grid: {
    paddingTop: theme.spacing(2),
  },
}));

export function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.root}>
      <Grid className={styles.grid} item xs={12} sm={3}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/esther-xin-b29563171/"
        >
          LinkedIn
        </a>
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={3}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/estherxin13"
        >
          Github
        </a>
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={3}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: exin@uwaterloo.ca"
        >
          Email
        </a>
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={3}>
        <a
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/EstherXin4"
        >
          Twitter
        </a>
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={3}>
        <p>@ 2022 Esther Xin</p>
      </Grid>
    </footer>
  );
}
