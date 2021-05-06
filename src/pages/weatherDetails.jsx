import React from 'react';
import { Card, Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { BackButton } from '../Components/backButton';

const useStyles = makeStyles(theme => ({
  headerRoot: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: '#E96D49',
    textAlign: 'center',
    fontSize: 18,
    marginTop: theme.spacing(3),
  },
  imageLogin: {
    width: 300,
    borderRadius: 15,
    margin: theme.spacing(10),
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
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
  },
  icon: {
    color: 'grey',
    paddingRight: theme.spacing(5),
  },
  wordLink: {
    textDecoration: 'none',
    color: 'black',
    borderBottom: '2px solid black',
    '&:hover': {
      color: 'grey',
    },
  }
}));

export function WeatherDetails() {
  const styles = useStyles();

  return (
    <>
      <div className={styles.headerRoot}>
        <div>
          <img className={styles.imageLogin} alt="logo" src="/weatherHeader.png" />
        </div>
      </div>
      <div className={styles.title}>
        <BackButton />
        <strong>Weather App</strong>
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
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Timeline</strong>
                </li>
                <li>
                  May 2021
                  </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ul>
                <li className={styles.subtitle}>
                  <strong>Tools</strong>
                </li>
                <li>
                  Javascript
                  </li>
                <li>
                  ReactJS
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
          I designed and developed a Weather App that showcases the forecast of any <br />
          searched city using the <a className={styles.wordLink} target="_blank" rel="noopener noreferrer" href="https://www.yearzerostudios.com/">
            Open Weather API,
          </a> <strong>ReactJS, javascript and Figma!</strong>
          <br />
          <br />
          {/* Check out the application:
          <IconButton>
            <a className={styles.icon} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13/personal-website">
              <WebIcon fontSize="large" />

            </a>
          </IconButton> */}
          Check out the Github:
          <IconButton>
            <a className={styles.icon} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13/weather-app">
              <GitHubIcon fontSize="large" />
            </a>
          </IconButton>
        </p>
      </div>
      <Card className={styles.card}>
        <img className={styles.image} alt="logo" src="/weatherDetails.png" />
      </Card>
    </>
  );
}