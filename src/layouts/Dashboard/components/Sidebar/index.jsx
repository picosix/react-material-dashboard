import React from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material icons
import DashboardIcon from '@material-ui/icons/Dashboard';

// Component styles
import useStyles from './styles';

import NavLinkWithRef from './NavLinkWithRef';

const Sidebar = ({ className }) => {
  const classes = useStyles();

  const rootClassName = classNames(classes.root, className);

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link className={classes.logoLink} to="/">
          <img
            alt="Brainalytica logo"
            className={classes.logoImage}
            src="/images/logos/brainalytica_logo.svg"
          />
        </Link>
      </div>
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link to="/account">
          <Avatar
            alt="Roman Kutepov"
            className={classes.avatar}
            src="https://i.pinimg.com/236x/2e/a4/61/2ea461b16d079dfdb3e9be9eb0f0a762.jpg"
          />
        </Link>
        <Typography className={classes.nameText} variant="h6">
          Tuan Nguyen
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          Administrator
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />
      <List component="div" disablePadding>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={NavLinkWithRef}
          to="/dashboard">
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Dashboard"
          />
        </ListItem>
      </List>
    </nav>
  );
};

export default Sidebar;
