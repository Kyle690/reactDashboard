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
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem} >
          <Link to={'/officials'} className={classes.navLink}>
              Officials
          </Link>
      </ListItem>
        <ListItem className={classes.listItem} >
            <Link to={'/about'} className={classes.navLink}>
                About
            </Link>
        </ListItem>
        <ListItem className={classes.listItem} >
            <Link to={'/contact'} className={classes.navLink}>
                Contact Us
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link to='/live' className={classes.navLink}>
                Live Events
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
            <Link to={'/results'} className={classes.navLink}>
                Results
            </Link>
        </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
