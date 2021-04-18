import React from 'react';
import { Card, CardActions, CardContent, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    card: {
        textAlign: 'center',
        backgroundColor: '#EBE0E0',
        marginBottom: theme.spacing(6),
        borderRadius: 5,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        // color: 'white',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    text: {
        fontSize: 20,
        // color: 'white'
    },
    imageLogin: {
        width: 488,
        // border: '2px solid black',
        borderRadius: 10,
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },
    cardContent: {
        paddingTop: theme.spacing(5),
    }
}));

export default function Wellify() {
    const styles = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card
            onClick={handleExpandClick}
            className={styles.card}>
            <CardContent className={styles.cardContent}>
                <img className={styles.imageLogin} alt="logo" src="/wellify.png" />
                <div className={styles.text}>
                    <strong>Software developer</strong>  |  Year Zero Studios
                    </div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(styles.expand, {
                        [styles.expandOpen]: expanded,
                    })}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className={styles.text}>
                        Typescript, React Hooks, FireBase, Stripe and Zoom API
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas fermentum gravida risus, mollis pharetra
                        eros molestie sed. Mauris sollicitudin erat eget
                        diam laoreet, et commodo mi cursus. Class aptent taciti
            </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}