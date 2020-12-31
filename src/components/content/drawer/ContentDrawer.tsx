import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { Grid } from '@material-ui/core';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import NameContainer from '../name/NameContainer';
import AgeContainer from '../age/AgeContainer';
import CountryContainer from '../countries/CountryContainer';
import GenderContainer from '../gender/GenderContainer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'relative'
    },
    drawerPaper: {
      [theme.breakpoints.up('xs')]: {
        width: drawerWidth,
        height: 'calc(100% - 56px)',
        top: '56px',
        background: '#556cd6'
      },
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        height: 380,
        top: 180,
        borderRight: 'none',
        background: 'rgba(119, 44, 215, 0.6)'
      }
    },
    drawerGrid: {}
  })
);

interface ContentDrawerProps {
  window?: () => Window;
  mobileOpen: boolean;
  toggleMobileOpen: () => void;
}

const ContentDrawer: FC<ContentDrawerProps> = ({
  window,
  mobileOpen,
  toggleMobileOpen
}): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <Grid
        container
        direction="column"
        className={classes.drawerGrid}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <NameContainer />
        </Grid>
        <Grid item>
          <AgeContainer />
        </Grid>
        <Grid item>
          <GenderContainer />
        </Grid>
        <Grid item>
          <CountryContainer />
        </Grid>
      </Grid>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          onClose={toggleMobileOpen}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default ContentDrawer;
