import React from 'react';
import { Card, Divider, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: '#47817D',
    textAlign: 'center',
    fontSize: 18,
    marginTop: theme.spacing(3),
  },
  imageLogin: {
    width: 600,
    [theme.breakpoints.down('md')]: {
      width: 350,
    },
  },
  textRoot: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    '& ul': {
      listStyle: 'none',
      padding: 0,
    },
    '& li': {
      paddingTop: theme.spacing(1),
    },
  },
  subtitle: {
    fontSize: 20
  },
  title: {
    fontSize: 40,
    paddingTop: theme.spacing(5),
  },
  padding: {
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(15),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  image: {
    width: 800,
    textAlign: 'center',
    margin: theme.spacing(5),
  },
  card: {
    margin: 'auto',
    width: 880,
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  text: {
    textAlign: 'center',
    marginTop: theme.spacing(5),
    fontSize: 20,
    lineHeight: 2,
  }
}));

export function WellifyDetails() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.headerRoot}>
        <div>
          <img className={styles.imageLogin} alt="logo" src="/wellify2.svg" />
        </div>
      </div>
      <div className={styles.padding}>

        <div className={styles.title}>
          <strong>Year Zero Studios</strong>
        </div>
        <footer className={styles.textRoot}>
          <Grid container spacing={5} justifyContent="space-around">
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Role</strong>
                </li>
                <li>
                  Software Developer
                  </li>
                <li>
                  UX/UI Designer
                  </li>
                <li>
                  Market Researcher
                  </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Timeline</strong>
                </li>
                <li>
                  January - April 2021
                  </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Tools</strong>
                </li>
                <li>
                  Typescript
                  </li>
                <li>
                  React Hooks
                  </li>
                <li>
                  Firebase
                  </li>
                <li>
                  Zoom and Stripe API
                  </li>
                <li>
                  Figma
                  </li>
              </ul>
            </Grid>
          </Grid>
        </footer>
      </div>
      <Divider variant="middle" />
    </>
  );
}