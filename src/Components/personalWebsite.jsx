import React from 'react';
import { CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(5),
        marginRight: theme.spacing(10),
        borderRadius: 2,
        '&:hover': {
            boxShadow: '0px 2px 5px 2px rgba(212,212,212)',
            cursor: 'pointer',
        },
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(0),
            marginBottom: theme.spacing(0),
        },
    },
    imageLogin: {
        width: 525,
        marginBottom: theme.spacing(3),
        borderRadius: 2,
        boxShadow: '0px 4px 9px 4px rgba(212,212,212)',
        [theme.breakpoints.down('md')]: {
            width: 310,
        },
    },
    cardContent: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
    },
    icon: {
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: 20,
        marginBottom: theme.spacing(1),
    },
    center: {
        textAlign: 'center',

    },
    text: {
        color: 'grey',
        textAlign: 'center',
    }
}));

export function PersonalSite() {
    const styles = useStyles();
    return (
        <div onClick={() => { window.location = `/personalWebsite`; }}
            className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.center}>
                    <img className={styles.imageLogin} alt="logo" src="/site.svg" />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <strong>Developer + Designer</strong>
                    </div>
                    <Typography>
                        <strong>Personal Website</strong> | April 2021
                    </Typography>
                </div>
            </CardContent>
        </div >
    );
}