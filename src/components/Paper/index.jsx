import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Paper } from '@material-ui/core';

// Component styles
import useStyles from './styles';

const CustomPaper = ({ className, outlined, squared, children, ...rest }) => {
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
    <Paper {...rest} className={rootClassName}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
