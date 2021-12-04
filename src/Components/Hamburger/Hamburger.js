import * as React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <a className="default-link" href="#hero" style={{ color: "black " }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </a>
        <a
          className="default-link"
          href="#about-me"
          style={{ color: "black " }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="About Me" />
            </ListItemButton>
          </ListItem>
        </a>
        <a
          className="default-link"
          href="#projects"
          style={{ color: "black " }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="My Projects" />
            </ListItemButton>
          </ListItem>
        </a>
        <a
          className="default-link"
          href="#contact-me"
          style={{ color: "black " }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Contact Me" />
            </ListItemButton>
          </ListItem>
        </a>
        <Link className="default-link" to="/blogs" style={{ color: "black " }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const hamburgerStyle = {
    position: "absolute",
    color: "white",
    right: "20px",
    top: "20px",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#155263",
          height: "10vh",
        }}
      >
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} style={hamburgerStyle}>
              <MenuIcon></MenuIcon>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
