import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExperienceTimeline from "../Components/experienceTimeline";


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
    marginBottom: theme.spacing(8),
    textAlign: "center",
    lineHeight: 1.3,
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      marginBottom: theme.spacing(4),
      fontSize: 13,
    },
  },
  experienceTimeline: {
    marginLeft: theme.spacing(35),
    marginRight: theme.spacing(28),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  experienceDate: {
    textAlign: "left",
    marginBottom: theme.spacing(1),
  },
  experienceRoot: {
    display: "flex",
    textAlign: "left",
  },
  experienceText: {
    lineHeight: 1.3,
    fontSize: 16,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    color: "#282928",
  },
  sectionHeadings: {
    marginLeft: theme.spacing(37),
    fontSize: 17,
    color: "#3f6e4d",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      fontSize: 15,
    },
  },
  text: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(37),
    marginRight: theme.spacing(35),
    lineHeight: 1.3,
    fontSize: 15,
    color: "#282928",
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5),
      fontSize: 13,
    },
  },
}));

export function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>
        <strong>hi there, nice to meet you!</strong>
      </div>
      <div className={classes.subtitle}>
        I'm Esther, a student at the <u>University of Waterloo</u> studying <u>Systems
        Design Engineering</u>. I'm passionate about creating efficient systems, the
        future of education, women's sports and creating tech for good. Read
        more below!
        <br></br>
        <br></br>
      </div>
      <div className={classes.sectionHeadings}>
        <strong>experience</strong>
      </div>
     <ExperienceTimeline />
      <div className={classes.sectionHeadings}>
        <strong>tools</strong>
      </div>
      <div className={classes.text}>
        Languages — GoLang, Python, Java, C++, SQL, JavaScript, TypeScript
        <br></br>
        Frameworks — React, FastAPI, Node.js, Express.js, REST
        <br></br>
        Tools — AWS, MongoDB, GCP, DynamoDB, Redis, Kubernetes, Docker, Terraform, CI/CD, Ansible, Prometheus/Grafana, Git
      </div>
      <div className={classes.sectionHeadings}>
        <strong>education</strong>
      </div>
      <div className={classes.text}>
        I'm currently two years into a five year Systems Design Engineering
        program. I get to learn about really awesome things and explore my
        interests. Some memorable topics I've learned about in the past two years
        are:
        <br></br>
        <br></br>- what makes products fail
        <br></br>- entrepreneurship for social impact
        <br></br>- the design cycle
        <br></br>- vector calculus
        <br></br>- how to build a pick-and-place mechanism from scratch
        <br></br>- data structures and algorithms
        <br></br>
        <br></br>
        and so so much more!!
      </div>
    </>
  );
}

export default Home;
