import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: theme.spacing(5),
        marginLeft: theme.spacing(10),
        borderRadius: 2,
        // boxShadow: '0px 2px 5px 2px rgba(212,212,212)',
        '&:hover': {
            boxShadow: '0px 2px 5px 2px rgba(212,212,212)',
            cursor: 'pointer',
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(0),
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
        color: 'grey',
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
        marginLeft: theme.spacing(3),
    }
}));

export function Wellify() {
    const styles = useStyles();
    return (
        <div className={styles.card}>
            <CardContent className={styles.cardContent}>
                <div className={styles.center}>
                    <img className={styles.imageLogin} alt="logo" src="/wellify2.svg" />
                </div>
                <div className={styles.text}>
                    <div className={styles.title}>
                        <strong>Software Developer</strong>
                    </div>
                    <Typography>
                        <strong>Year Zero Studios</strong> | January - April 2021

                        </Typography>
                </div>
            </CardContent>
        </div >
    );
}