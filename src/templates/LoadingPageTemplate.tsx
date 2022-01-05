import React from 'react';
import Loading from 'components/Loading/Loading';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loadingPage: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingPageTemplate = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingPage}>
      <Loading></Loading>
    </div>
  );
};

export default LoadingPageTemplate;
