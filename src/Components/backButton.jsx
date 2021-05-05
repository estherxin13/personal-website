import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    icon:{
        [theme.breakpoints.down('md')]: {
           display: 'none'
          },
    }
}));

export function BackButton() {
  const styles = useStyles();

  return (
    <>
    <IconButton className={styles.icon}>
    <ArrowBackIosIcon fontSize="large" 
      onClick={() => { window.location = `/`; }}/>
    </IconButton>
    </>
  );
}