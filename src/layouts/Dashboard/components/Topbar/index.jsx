import React from 'react';
import { withRouter } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

// Custom components
import { NotificationList } from './components';

// Component styles
import useStyles from './styles';

const Topbar = ({
  className,
  title,
  isSidebarOpen,
  onToggleSidebar,
  history
}) => {
  const classes = useStyles();

  function handleShowNotifications(event) {
    setNotificationsEl(event.currentTarget);
  }

  function handleCloseNotifications() {
    setNotificationsEl(null);
  }

  function handleSignOut() {
    localStorage.removeItem('accessToken');
    history.push('/sign-in');
  }

  const [notificationsEl, setNotificationsEl] = React.useState(null);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    getNotifications().then(({ notifications }) =>
      setNotifications(notifications)
    );
  }, []);

  const rootClassName = classNames(classes.root, className);
  const showNotifications = Boolean(notificationsEl);

  return (
    <React.Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <IconButton
            className={classes.notificationsButton}
            onClick={handleShowNotifications}>
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} onClick={handleSignOut}>
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
      <Popover
        anchorEl={notificationsEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        onClose={handleCloseNotifications}
        open={showNotifications}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>
        <NotificationList
          notifications={notifications}
          onSelect={handleCloseNotifications}
        />
      </Popover>
    </React.Fragment>
  );
};

export default withRouter(Topbar);
