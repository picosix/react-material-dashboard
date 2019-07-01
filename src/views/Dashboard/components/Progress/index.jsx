import React from 'react';

// Externals
import classNames from 'classnames';

// Material components
import { Typography, LinearProgress } from '@material-ui/core';

// Material icons
import { InsertChartOutlined as InsertChartIcon } from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import useStyles from './styles';

const Progress = ({ className, ...rest }) => {
  const classes = useStyles();

  const rootClassName = classNames(classes.root, className);

  return (
    <Paper {...rest} className={rootClassName}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            PROGRESS
          </Typography>
          <Typography className={classes.value} variant="h3">
            75.5%
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <InsertChartIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.footer}>
        <LinearProgress value={75.5} variant="determinate" />
      </div>
    </Paper>
  );
};

export default Progress;
