import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Route, Redirect, Switch } from 'react-router-dom';

import HeaderContainer from '../header/header-container';
import DashboardContainer from '../dashboard/dashboard-container';
import PostsContainer from '../posts/posts-container';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function LayoutContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderContainer 
          classes={classes}
      />
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route 
            exact 
            path="/" 
            render ={()=> {
              return(
              <Redirect to="dashboard"/>
              )
            }}
            >
            </Route>
            <Route path="/dashboard" component={DashboardContainer}/>
            <Route path="/posts" component={PostsContainer} />
        </Switch>
      </main>
    </div>
  );
}
