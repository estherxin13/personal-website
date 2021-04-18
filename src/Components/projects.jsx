import React from 'react';
import { Card, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
    center: {
        textAlign: 'center',
    },
    text: {
        margin: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
        },
    },
    link: {
        textDecoration: 'none',
        color: 'grey'
    },
    card: {
        marginBottom: theme.spacing(8),
        borderRadius: 15,
        boxShadow: '0px 4px 9px 4px rgba(212, 212, 212, 0.8)',
        '&:hover': {
            boxShadow: '0px 4px 9px 4px rgba(209, 189, 180)',
        },
        '&:active': {
            background: '#F0F0F0',
        },
    },
    cardLeft: {
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),        
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(4),
            marginLeft: theme.spacing(8),
        }
    },
    cardRight: {
        marginRight: theme.spacing(4),
        marginLeft: theme.spacing(4),       
         [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(8),
            marginLeft: theme.spacing(4),
        }
    }
}));

export default function Project() {
    const styles = useStyles();

    return (
        <main>
            <Grid container>
                <Grid xs container>
                    <Grid item xs={12} md={6} className={styles.center}>
                        <div>
                            <div className={styles.cardLeft}>
                                <Card className={styles.card}>
                                    <Typography className={styles.text}>
                                        <h1>
                                            wellify!
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Maecenas fermentum gravida risus, mollis pharetra
                                            eros molestie sed. Mauris sollicitudin erat eget
                                            diam laoreet, et commodo mi cursus. Class aptent taciti
                                        </p>
                                    </Typography>
                                    <div className={styles.icon}>
                                        <IconButton>
                                            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                                <GitHubIcon fontSize="large" />
                                            </a>
                                        </IconButton>
                                    </div>
                                </Card>
                                <Card className={styles.card}>
                                    <Typography className={styles.text}>
                                        <h1>
                                            nasa space apps!
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Maecenas fermentum gravida risus, mollis pharetra
                                            eros molestie sed. Mauris sollicitudin erat eget
                                            diam laoreet, et commodo mi cursus. Class aptent taciti
                                        </p>
                                    </Typography>
                                    <div className={styles.icon}>
                                        <IconButton>
                                            <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                                <GitHubIcon fontSize="large" />
                                            </a>
                                        </IconButton>
                                    </div>
                                </Card>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className={styles.center}>
                        <div className={styles.cardRight}>
                            <Card className={styles.card}>
                                <Typography className={styles.text}>
                                    <h1>
                                        rbc!
                                </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas fermentum gravida risus, mollis pharetra
                                        eros molestie sed. Mauris sollicitudin erat eget
                                        diam laoreet, et commodo mi cursus. Class aptent taciti
                                        </p>
                                </Typography>
                                <div className={styles.icon}>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                            <GitHubIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                </div>
                            </Card>
                            <Card className={styles.card}>
                                <Typography className={styles.text}>
                                    <h1>
                                        ru hacks!
                                </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas fermentum gravida risus, mollis pharetra
                                        eros molestie sed. Mauris sollicitudin erat eget
                                        diam laoreet, et commodo mi cursus. Class aptent taciti
                                        </p>
                                </Typography>
                                <div className={styles.icon}>
                                    <IconButton>
                                        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://github.com/estherxin13">
                                            <GitHubIcon fontSize="large" />
                                        </a>
                                    </IconButton>
                                </div>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div />
        </main>
    );
}