import React from 'react';
import { Card, Divider, Grid, IconButton, makeStyles } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';
import { BackButton } from '../Components/backButton';

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
    fontSize: 20,
    marginBottom: theme.spacing(3),

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
    color: 'grey'
  },
  wordLink:{
    textDecoration: 'none',
    color: 'black',
    borderBottom: '1.5px solid black',
    '&:hover': {
        color: 'grey',
    },
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
      <div className={styles.title}>
        <BackButton />
        <strong>Year Zero Studios: Internship</strong>
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
      <div className={styles.text}>
        <div className={styles.subtitle}>
          <strong>Overview</strong>
        </div>
        <p>
          Wellify, an online booking and payment application for wellness instructors,
           <br />is a company founded under <strong><a className={styles.wordLink} target="_blank" rel="noopener noreferrer" href="https://www.yearzerostudios.com/">
                                            Year Zero Studios
                                        </a></strong>, a start-up based in Toronto
           <br />that explores solutions in mental health,  wellness, education and more.
          <br />
          <br />
          Check out the application here:
          <IconButton>
            <a className={styles.icon} target="_blank" rel="noopener noreferrer" href="https://app.wellify.studio/">
              <WebIcon fontSize="large" />
            </a>
          </IconButton>
        </p>
      </div>
      <Card className={styles.card}>
        <img className={styles.image} alt="logo" src="/wellifyHome.svg" />
      </Card>
      <div className={styles.text}>
      <div className={styles.subtitle}>
          <strong>My Role and Contributions</strong>
        </div>
        <p>
          Over the past four months, I contributed to the complete rebrand of Wellify, starting
        <br />from market research of the wellness industry to creating mock-ups using Figma
        <br />and finally to development using <strong>Typescript, React Hooks, and Firebase.</strong>
        </p>
      </div>
      <div className={styles.text}>
        <p>
          I developed and architected a new variable payment and zoom 
        <br />integration feature from design to release using the <strong>Stripe and Zoom API.</strong>
        </p>
      </div>
      <div className={styles.text}>
        <p>
          I also designed and developed various highly requested customer features to increase 
        <br />acquisiton by over <strong>100%</strong>. I guided product vision through creating user stories,
        <br /> new branding and roadmaps while applying design and accessibility driven principles.
        </p>
      </div>
      <Card className={styles.card}>
        <img className={styles.image} alt="logo" src="/wellifyPay.svg" />
      </Card>
    </>
  );
}