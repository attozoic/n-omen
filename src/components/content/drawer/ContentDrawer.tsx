import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Content from './Content';
import InstructionsContainer from '../../help/InstructionsContainer';
import LoadingIndicator from '../../help/LoadingIndicator';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'relative'
    },
    drawerPaper: {
      [theme.breakpoints.up('xs')]: {
        width: '240px',
        height: 'calc(100% - 56px)',
        top: '56px',
        background: '#484848'
      },
      [theme.breakpoints.up('sm')]: {
        width: '290px',
        height: 'calc(100% - 64px)',
        top: '64px',
        background: '#484848',
        borderRight: 'none'
      }
    }
  })
);

interface ContentDrawerProps {
  window?: () => Window;
  mobileOpen: boolean;
  isLoading: boolean;
  haveContent: boolean;
  toggleMobileOpen: () => void;
}

const ContentDrawer: FC<ContentDrawerProps> = ({
  window,
  mobileOpen,
  haveContent,
  isLoading,
  toggleMobileOpen
}): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  const showCorrectInfo = () => {
    if (isLoading) {
      return <LoadingIndicator />;
    }

    if (haveContent) {
      return <Content />;
    }

    return <InstructionsContainer />;
  };

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
          {showCorrectInfo()}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          anchor="bottom"
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {showCorrectInfo()}
        </Drawer>
      </Hidden>
    </div>
  );
};

export default ContentDrawer;
