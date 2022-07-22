import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    drawer: {
        width: 250
    }
});

 function AppNavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = useStyles();

    return (
        <AppBar variant="outlined" position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setIsDrawerOpen(true)}
                >
                </IconButton>
                <Typography variant="h6">AmBrain</Typography>

                <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                    <List className={classes.drawer}>
                        <ListItem button>
                            <ListItemText primary="Developers Resume" />
                        </ListItem>

                        <ListItem button>
                            <ListItemText primary="Project Pages" />
                        </ListItem>

                        <ListItem button>
                            <ListItemText primary="Contact Us" />
                        </ListItem>

                        <ListItem button>
                            <ListItemText primary="Feedback" />
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}
export default AppNavBar;