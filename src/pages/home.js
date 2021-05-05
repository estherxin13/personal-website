import Typical from 'react-typical';
import { makeStyles } from '@material-ui/core/styles';
import Project from '../Components/projects';


const Home = () => {
    const useStyles = makeStyles((theme) => ({

        quotes: {
            fontSize: 20,
            marginLeft: theme.spacing(5),
            marginBottom: theme.spacing(3),
            [theme.breakpoints.up('md')]: {
                fontSize: 25,
                marginLeft: theme.spacing(20),
                marginBottom: theme.spacing(10),
            },
        },
        color: {
            color: 'grey',
        },
        title: {
            fontSize: 30,
            margin: theme.spacing(3),
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(10),
            [theme.breakpoints.up('md')]: {
                fontSize: 50,
                marginTop: theme.spacing(15),
                marginLeft: theme.spacing(20),
            },
        },
        arrow: {
            margin: theme.spacing(6),
            marginTop: theme.spacing(8),
            [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(15),
            },
        },
    }));

    const classes = useStyles();


    return (
        <>
            <div className={classes.title}>
                <strong>hi there, nice to meet you!</strong>
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
            <Project />
        </>
    )
}

export default Home
