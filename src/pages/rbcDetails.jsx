import React from 'react';
import { Divider, Grid, makeStyles } from '@material-ui/core';
import { BackButton } from '../Components/backButton';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: '#0059B3',
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
    paddingLeft: theme.spacing(30),
    paddingRight: theme.spacing(15),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
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
  },
  icon: {
    color: 'grey'
  }
}));

export function RBCDetails() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.headerRoot}>
        <div>
          <img className={styles.imageLogin} alt="logo" src="/rbc.svg" />
        </div>
      </div>
        <div className={styles.title}>
          <BackButton />
          <strong>RBC 'Next Great Innovator' Hackathon</strong>
        </div>
        <div className={styles.padding}>
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
                  September 2019
                  </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Tools</strong>
                </li>
                <li>
                  HTML + CSS
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
      <div className={styles.text}>
        <p>
          Stay tuned for description and more details! 
          <br />
        </p>
      </div>
    </>
  );
}