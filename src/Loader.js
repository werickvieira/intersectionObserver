import React,{ useContext } from 'react';
import Context from './Context.js';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

function Loading() {
    const { loading } = useContext(Context);
    const classes = useStyles();

    return (
        <div className={`main__loading ${classes.root} ${!loading ? 'hidden' : '' }`} >
            <CircularProgress size="7.5rem" />
        </div>
    );
}

export default Loading;