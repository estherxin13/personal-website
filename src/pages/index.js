import React, { useState } from 'react'
import Navbar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import Typical from 'react-typical';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Card, IconButton, Typography } from '@material-ui/core';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const useStyles = makeStyles((theme) => ({

        quotes: {
            textAlign: 'center',
            fontSize: '1.5em',
            marginBottom: '20%',
            color: 'black',
            '@media screen and (max-width: 1200px)': {
                textAlign: 'center',
                marginBottom: '20%',
            },
        },
        root: {
            width: '60%',
            marginTop: '15%',
            marginLeft: '20%',
            borderRadius: '10px',
        },
        color: {
            color: '#c97777'
        },
        title: {
            textAlign: 'center',
            fontSize: 65,
            marginBottom: 40,
            marginTop: '12%',
            fontWeight: 'bold',
            color: 'black',
            '@media screen and (max-width: 1200px)': {
                marginTop: '100px',
                fontSize: '40px',
                textAlign: 'center',
                marginLeft: '0px',
            }
        },
        subtext: {
            textAlign: 'center'
        },
        arrow: {
            marginTop: '10px',
            textAlign: 'center'
        },
        cardRoot:{
            minWidth: 275,
        }
    }));

    const classes = useStyles();


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div className={classes.title}>
                hi there, nice to meet you !
                </div>
            <div className={classes.quotes}>
                I am &nbsp;
                <Typical
                    className={classes.color}
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'a developer',
                        1000,
                        'a designer',
                        1000,
                        'a waterloo student ',
                        1000,
                        'an engineer ',
                        1000,
                        'a creative thinker',
                        1000,
                    ]}
                />
            </div>

            <div className={classes.subtext}>
                see my work below
                </div>
            <div className={classes.arrow}>
                <IconButton>
                    {/* <ExpandMoreIcon className={classes.color} fontSize="large" /> */}
                </IconButton>
            </div>
            <div className={classes.black}>
                <Card className={classes.cardRoot}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                    </Typography>
                        <Typography variant="h5" component="h2">
                            be
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                    </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                    <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Home
