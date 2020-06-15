/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {LiveTv } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.js";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem} >
          <Link to={'/admin'} className={classes.navLink}>
              Admin
          </Link>
      </ListItem>
        <ListItem className={classes.listItem} >
            <Link to={'/login'} className={classes.navLink}>
                Login
            </Link>
        </ListItem>
        <ListItem className={classes.listItem} >
            <Link to={'/landingPage'} className={classes.navLink}>
                Landing Page
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link to='/profile' className={classes.navLink}>
                Profile
            </Link>
        </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
