import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import  Timeline  from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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

export function ExperienceTimeline() {
  const classes = useStyles();
  return (
    <>
      <Timeline className={classes.experienceTimeline}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent>
            <Typography
              className={classes.experienceDate}
              variant="body1"
              color="textSecondary"
            >
              may 2022 - present
            </Typography>
            <div className={classes.experienceRoot}>
              <div>
                <strong>1Password</strong>
                <div className={classes.experienceText}>
                  Working as a <u>full-stack developer</u> on the Single-Sign-On feature
                  set to release near September 2022.
                </div>
              </div>
            </div>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent>
            <Typography
              className={classes.experienceDate}
              variant="body1"
              color="textSecondary"
            >
              sep 2021 - dec 2021
            </Typography>
            <div className={classes.experienceRoot}>
              <div>
                <strong>1Password</strong>
                <div className={classes.experienceText}>
                  Worked as a <u>backend developer</u> on the Developer-Tooling team to
                  create a new localization workflow used by 200+ internal
                  developers.
                </div>
              </div>
            </div>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineOppositeContent>
            <Typography
              className={classes.experienceDate}
              variant="body1"
              color="textSecondary"
            >
              jan 2021 - apr 2021
            </Typography>
            <div className={classes.experienceRoot}>
              <div>
                <strong>Year Zero Studios</strong>
                <div className={classes.experienceText}>
                  Worked as a <u>frontend developer</u> and designer in a fast-based
                  startup where I implemented numerous features from design to
                  release and created an intern onboarding program from scratch.
                </div>
              </div>
            </div>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}

export default ExperienceTimeline;
