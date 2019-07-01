import React from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Material components
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';

// Material icons
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  Payment as PaymentIcon,
  PeopleOutlined as PeopleIcon,
  Code as CodeIcon,
  Store as StoreIcon
} from '@material-ui/icons';

// Component styles
import useStyles from './styles';

const icons = {
  order: {
    icon: <PaymentIcon />,
    color: 'blue'
  },
  user: {
    icon: <PeopleIcon />,
    color: 'red'
  },
  product: {
    icon: <StoreIcon />,
    color: 'green'
  },
  feature: {
    icon: <CodeIcon />,
    color: 'purple'
  }
};

const NotificationList = ({ className, notifications, onSelect }) => {
  const classes = useStyles();
  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
      {notifications.length > 0 ? (
        <React.Fragment>
          <div className={classes.header}>
            <Typography variant="h6">User Notifications</Typography>
            <Typography className={classes.subtitle} variant="body2">
              {notifications.length} new notifications
            </Typography>
          </div>
          <div className={classes.content}>
            <List component="div">
              {notifications.map(notification => (
                <Link key={notification.id} to="#">
                  <ListItem
                    className={classes.listItem}
                    component="div"
                    onClick={onSelect}>
                    <ListItemIcon
                      className={classes.listItemIcon}
                      style={{ color: icons[notification.type].color }}>
                      {icons[notification.type].icon}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ secondary: classes.listItemTextSecondary }}
                      primary={notification.title}
                      secondary={notification.when}
                    />
                    <ArrowForwardIosIcon className={classes.arrowForward} />
                  </ListItem>
                  <Divider />
                </Link>
              ))}
            </List>
            <div className={classes.footer}>
              <Button
                color="primary"
                component={Link}
                size="small"
                to="#"
                variant="contained">
                See all
              </Button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className={classes.empty}>
          <div className={classes.emptyImageWrapper}>
            <img
              alt="Empty list"
              className={classes.emptyImage}
              src="/images/empty.png"
            />
          </div>
          <Typography variant="h4">There's nothing here...</Typography>
        </div>
      )}
    </div>
  );
};

export default NotificationList;
