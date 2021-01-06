import React, { FC } from 'react';
import {
  makeStyles,
  fade,
  createStyles,
  Theme
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      minHeight: 56,
      justifyContent: 'center',
      boxShadow: 'none',
      [theme.breakpoints.up('xs')]: {
        height: 56
      },
      [theme.breakpoints.up('sm')]: {
        height: 64
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    title: {
      flexGrow: 1,
      display: 'none',
      color: 'white',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    },
    search: {
      [theme.breakpoints.up('xs')]: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    inputRoot: {
      color: 'white'
    },
    inputInput: {
      [theme.breakpoints.up('xs')]: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        border: '1px white solid',
        width: '24ch',
        '&:focus': {
          width: '27ch',
          color: 'white'
        }
      }
    },
    spinner: {
      color: 'white'
    }
  })
);

export interface SearchDispatchProps {
  getNameInfo: () => void;
  toggleMobileOpen: () => void;
}

export interface SearchStateProps {
  isLoading: boolean;
}

type SearchProps = SearchStateProps & SearchDispatchProps;

const Search: FC<SearchProps> = ({
  getNameInfo,
  toggleMobileOpen,
  isLoading
}): JSX.Element => {
  const classes = useStyles();

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter' && !isLoading) {
      getNameInfo();
    }
  };

  const loadingSpinner = () => {
    if (isLoading) {
      return <CircularProgress size={20} className={classes.spinner} />;
    }

    return <SearchIcon />;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" id="search-app-bar" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleMobileOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            N-OMEN
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>{loadingSpinner()}</div>
            <InputBase
              autoComplete="off"
              onKeyDown={handleKeyDown}
              id="search-input"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Search;
