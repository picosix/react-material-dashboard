import React from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

// Component styles
import useStyles from './styles';

const Dashboard = ({ width, title, children }) => {
  function handleClose() {
    setOpen(false);
  }

  function handleToggleOpen() {
    setOpen(!open);
  }

  const isMobile = ['xs', 'sm', 'md'].includes(width);
  const [open, setOpen] = React.useState(!isMobile);

  const classes = useStyles();
  const shiftTopbar = open && !isMobile;
  const shiftContent = open && !isMobile;

  return (
    <React.Fragment>
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar
        })}
        isSidebarOpen={open}
        onToggleSidebar={handleToggleOpen}
        title={title}
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        open={open}
        onClose={handleClose}
        variant={isMobile ? 'temporary' : 'persistent'}>
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent
        })}>
        {children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default withWidth()(Dashboard);
