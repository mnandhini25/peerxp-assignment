import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

export default function HeaderContainer(props) {
  const classes = props.classes;
  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <div id="nav">
            <span  >
              <NavLink to="/">Dashboard</NavLink>
            </span>

            <span  style={{marginLeft: "1rem"}}>
              <NavLink to="/posts">Posts</NavLink>
            </span>

            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}





