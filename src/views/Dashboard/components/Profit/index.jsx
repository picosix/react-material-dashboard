import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import { AttachMoney as AttachMoneyIcon } from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import useStyles from './styles';

const Profit = ({ className, ...rest }) => {
  const classes = useStyles();

  const rootClassName = classNames(classes.root, className);

  return (
    <Paper {...rest} className={rootClassName}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            TOTAL PROFIT
          </Typography>
          <Typography className={classes.value} variant="h3">
            $23,200
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <AttachMoneyIcon className={classes.icon} />
        </div>
      </div>
    </Paper>
  );
};

export default Profit;
