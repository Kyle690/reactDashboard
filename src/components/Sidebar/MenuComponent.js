import React from "react";
import ListItem from '@material-ui/core/ListItem'
import {Link} from 'react-router-dom'
import classNames from "classnames";

const MenuComponent=(props)=>{
    const { onClick, link, children, classes, color } = props;
    function activeRoute(routeName) {
        return window.location.href.indexOf(routeName) > -1;
    }

    const listItemClasses = classNames({
        [" " + classes[color]]: activeRoute(link)
    });


    // If link is not set return the ordinary ListItem
    if(!link){
        return (
            <ListItem
                button
                className={listItemClasses}
                onClick={onClick}
                children={children}
            />
        )
    }else{
       return (
           <ListItem
            button
            className={listItemClasses}
            component={Link}
            children={children}
            to={link}
           />
       )
    }
}

export default MenuComponent;
