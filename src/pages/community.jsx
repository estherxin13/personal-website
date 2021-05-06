import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from '@material-ui/lab';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: theme.spacing(3),
    },
    item: {
        textAlign: 'left',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(3),
    },
    timeline: {
        marginLeft: theme.spacing(20),
        marginRight: theme.spacing(20),
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
    },
    padding: {
        marginRight: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(3),
        },
    },
    title: {
        fontSize: 30,
        margin: theme.spacing(3),
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(7),
        [theme.breakpoints.up('md')]: {
            fontSize: 50,
            marginTop: theme.spacing(12),
            marginLeft: theme.spacing(20),
        },
    },
    left: {
        textAlign: 'left',
    },
    text: {
        lineHeight: 1.3,
        fontSize: 18,
    },
    imageLogin: {
        width: 525,
        borderRadius: 5,
        boxShadow: '0px 4px 9px 4px rgba(212,212,212)',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    title1: {
        marginTop: theme.spacing(2),
        fontSize: 20,
        marginLeft: theme.spacing(5),
    }
}));

export function Community() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.title}>
                <strong>learn more about me!</strong>
            </div>
            <Timeline className={classes.timeline} >
                <TimelineItem>
                    <TimelineSeparator className={classes.padding}>
                        <TimelineDot color="black">
                            <SportsSoccerIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineOppositeContent>
                        <Typography className={classes.item} variant="body1" color="textSecondary">
                            september 2014 - september 2019
                        </Typography>
                        <div className={classes.left}>
                            <Card>
                                <div className={classes.root}>
                                    <div>
                                        <img className={classes.imageLogin} alt="logo" src="/soccer.JPG" />
                                    </div>
                                    <div className={classes.title1}>
                                        <strong>competitive soccer</strong>
                                        <br></br>
                                        <br></br>
                                        <div className={classes.text}>
                                            For the past 5 and a half years, I have been
                                            playing competive soccer with Dixie Soccer Club.
                                            I’ve competed in numerous tournamants, games, and
                                            practices while getting the chance to visit such
                                            cool places and meet a variety people!
                                            <br></br>
                                            <br></br>
                                            My highlight is definitly making it to the finals of the Ontario Futsal Games!
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TimelineOppositeContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator className={classes.padding}>
                        <TimelineDot color="black">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineOppositeContent>
                        <Typography className={classes.item} variant="body1" color="textSecondary">
                            june 2019 - april 2020
                         </Typography>
                        <div className={classes.left}>
                            <Card>
                                <div className={classes.root}>
                                    <div>
                                        <img className={classes.imageLogin} alt="logo" src="/stem.JPG" />
                                    </div>
                                    <div className={classes.title1}>
                                        <strong>stem club</strong>
                                        <br></br>
                                        <br></br>
                                        <div className={classes.text}>
                                            Glenforest stem is an organization focused on providing students with the resources to pursue educational
                                            pathways and careers in stem. In 2018, we held 'Xplore', the largest student run conference and gained recogniton
                                            from Prime Minister Justin Trudeau.
                                            <br></br>
                                            <br></br>
                                             I was the vice-president in the 2019/2020 school year and held events such as ‘Hour of Code’, ‘University Panel’
                                             and an online augmented reality competition
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TimelineOppositeContent>
                </TimelineItem>
                {/* <TimelineItem>
                    <TimelineSeparator className={classes.padding}>
                        <TimelineDot color="black">
                            <MouseIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineOppositeContent>
                        <Typography className={classes.item} variant="body1" color="textSecondary">
                            november 2019 - present
                         </Typography>
                        <div className={classes.left}>
                            <Card>
                                <div className={classes.root}>
                                    <div>
                                        <img className={classes.imageLogin} alt="logo" src="/cad.SVG" />
                                    </div>
                                    <div className={classes.title1}>
                                        <strong>3D CAD</strong>
                                        <br></br>
                                        <br></br>
                                        <div className={classes.text}>
                                            Since joining my robotics design team,
                                            I have discovered my passion for 3D design
                                            and cadding. Using Fusion360, I have designed
                                            products for hackathons, school, and 3D printing projects.
                                            <br></br>
                                            <br></br>
                                            Stay tuned for my work being uploaded to GrabCad!
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </TimelineOppositeContent>
                </TimelineItem> */}
            </Timeline>
        </>
    );
}