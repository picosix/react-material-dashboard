import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Divider, Typography } from '@material-ui/core';

// Component styles
import useStyles from './styles';

const Footer = ({ className }) => {
  const classes = useStyles();

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
      <Divider />
      <Typography className={classes.company} variant="body1">
        &copy; Devias Io. 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

export default Footer;
