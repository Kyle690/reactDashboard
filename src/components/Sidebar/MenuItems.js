import React from "react";
import classNames from "classnames";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {ExpandLess,ExpandMore} from "@material-ui/icons";
import MenuComponent from "./MenuComponent";


const MenuItem=(props)=>{

    const {layout,path,name, Icon ,items, classes, isActive,color}=props;

    const isExpandable = items && items.length>0;
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(!open)
    }

    const whiteFontClasses = classNames({
        [" " + classes.whiteFont]: isActive
    });

    const RootItem=(
        <MenuComponent
            //className={classes.item}
            disablePadding
            classes={classes}
            color={color}
            onClick={handleClick}
            link={!items?layout+path:null}
            isActive={isActive}
        >
            {!!Icon&&(
                <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                />
            )}
            <ListItemText
                inset={!Icon}
                primary={name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
            />
            {/* Display the expand menu if the item has children */}
            {isExpandable && !open && <ExpandMore className={classNames(classes.expandableIcon,whiteFontClasses)} />}
            {isExpandable && open && <ExpandLess className={classNames(classes.expandableIcon,whiteFontClasses,)} />}
        </MenuComponent>)

    const ItemChildren = isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider color={'white'} variant={'fullWidth'} />
            <List component="div" disablePadding>
                {items.map((item, index) => (
                    <MenuItem isActive={isActive} color={color} classes={classes} {...item} key={index} />
                ))}
            </List>
        </Collapse>
    ) : null

    return (
        <div>
            {RootItem}
            {ItemChildren}
        </div>
    )

}

export default MenuItem;