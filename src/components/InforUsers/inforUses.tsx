import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import {
    ItemInfor,
} from "./styled-inforusers";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    user: {
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'space-around',
        transition: 'transform .5s ease-in',
    }
});

type Anchor = 'right';

export default function InforUses(props: any) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button style={{ display: 'grid' }} className={classes.user}>
                    {/* <Link to="/profile" style={{ textDecoration: 'none', textAlign: 'left', }}><ItemInfor>+ Profile</ItemInfor></Link>
                    <Link href="" style={{ textDecoration: 'none', textAlign: 'left' }}><ItemInfor>+ Checkout</ItemInfor></Link>
                    <Link href="" style={{ textDecoration: 'none', textAlign: 'left' }}><ItemInfor>+ My Orders</ItemInfor></Link> */}
                    <Link to="/profile" style={{ textDecoration: 'none', textAlign: 'left', }}><ItemInfor>Your Profile</ItemInfor></Link>
                </ListItem>
            </List>
            <Divider />

            <List onClick={props.logout}>
                {['Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <ExitToAppIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><DehazeIcon style={{ color: "#424242" }}></DehazeIcon></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

