import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Error = () => {
  const classes = useStyles;

  return (
    <div className={classes.root}>  
      <h1>Error Page</h1>
      <Link to='/'>
        <Button variant="contained" color="primary">
          Back Home
        </Button>
      </Link>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default Error;