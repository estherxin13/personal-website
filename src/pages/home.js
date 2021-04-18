import Typical from 'react-typical';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Project from '../Components/projects';


const Home = () => {
    const useStyles = makeStyles((theme) => ({

        quotes: {
            fontSize: 20,
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
                fontSize: 30,
            },
        },
        color: {
            color: '#c97777'
        },
        title: {
            fontSize: 45,
            textAlign: 'center',
            margin: theme.spacing(3),
            marginTop: theme.spacing(25),
            [theme.breakpoints.up('md')]: {
                fontSize: 65,
            },
        },
        arrow: {
            margin: theme.spacing(3),
            marginTop: theme.spacing(15),
            textAlign: 'center',
            [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(32),
            },
        }
    }));

    const classes = useStyles();


    return (
        <>
            <div className={classes.title}>
               <strong>hi there, nice to meet you !</strong> 
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
            <div className={classes.arrow}>
                <div className={classes.arrow}>
                    see my work below
                </div>
                <IconButton>
                    <ExpandMoreIcon className={classes.color} fontSize="large" />
                </IconButton>
            </div>
            <Project />
        </>
    )
}

export default Home
