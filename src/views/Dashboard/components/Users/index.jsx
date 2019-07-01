import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  PeopleOutlined as PeopleIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import useStyles from './styles';

const Users = ({ className, ...rest }) => {
  const classes = useStyles();

  const rootClassName = classNames(classes.root, className);

  return (
    <Paper {...rest} className={rootClassName}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            TOTAL USERS
          </Typography>
          <Typography className={classes.value} variant="h3">
            1600
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <PeopleIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.difference} variant="body2">
          <ArrowUpwardIcon />
          16%
        </Typography>
        <Typography className={classes.caption} variant="caption">
          Since last month
        </Typography>
      </div>
    </Paper>
  );
};

export default Users;
