import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Paper as MUIPaper } from '@material-ui/core';

// Component styles
import useStyles from './styles';

const Paper = ({ className, outlined, squared, children, ...rest }) => {
  const classes = useStyles();

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined
    },
    className
  );

  return (
    <MUIPaper {...rest} className={rootClassName}>
      {children}
    </MUIPaper>
  );
};

export default Paper;
