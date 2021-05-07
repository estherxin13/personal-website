import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Wellify } from '../Components/wellify';
import { Nasa } from '../Components/nasa';
import { RBC } from './rbc';
import { Todo } from './todo';
import { PersonalSite } from './personalWebsite';
import { Weather } from './weather';

const useStyles = makeStyles(theme => ({

    cardLeft: {
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(6),
        }
    },
    cardRight: {
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(6),
        }
    },
}));

export default function Project() {
    const styles = useStyles();

    return (
        <main>
            <Grid container>
                <Grid xs container>
                    <Grid item xs={12} md={6}>
                        <div>

                            <div className={styles.cardLeft}>
                                <Wellify />
                                <Weather />
                                <Nasa />
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.cardRight}>
                            <PersonalSite />
                            <Todo />
                            <RBC />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div />
        </main>
    );
}