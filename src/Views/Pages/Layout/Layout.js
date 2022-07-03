import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import profileImg from "../../../Assets/profile.png";
import Badge from "@mui/material/Badge";
import bd from "../../../Assets/flag/bangladesh.png";
import france from "../../../Assets/flag/france.png";
import usa from "../../../Assets/flag/usa.png";
import home from "../../../Assets/side-bar_icon/Icon.svg";
import tickets from "../../../Assets/side-bar_icon/ticket-svgrepo-com 1.svg";
import team from "../../../Assets/side-bar_icon/XMLID_10_.svg";
import user from "../../../Assets/side-bar_icon/user-svgrepo-com 1.svg";
import setting from "../../../Assets/side-bar_icon/Vector.svg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import "./Layout.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuthentication from "../../../Hooks/UseAuthentication";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { logOut, loggedIn, getLoggedIn, isLoading } = UseAuthentication();
  let navigate = useNavigate();
  if (isLoading) {
    return <CircularProgress />;
  }

  if (!loggedIn) {
    navigate("/signin", { replace: true });
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let activeStyle = {
    textDecoration: "none",
    color: "#6C7BFF",
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          sx={{ backgroundColor: "#ffffff" }}
          position="fixed"
          open={open}
        >
          <Toolbar
            sx={{ backgroundColor: "#ffffff" }}
            className="headerToolbar"
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div className="headerTop" style={{ display: "flex" }}>
              <div className="search_field">
                {/* input field */}
                <FormControl variant="">
                  <Input
                    id=""
                    startAdornment={<BsSearch />}
                    placeholder="Find Something..."
                    InputLabelProps={{
                      style: { color: "red" },
                    }}
                  />
                </FormControl>
              </div>
            </div>

            <div className="header-right">
              <div className="header_left">
                <div className="menu_btn">
                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Button
                          style={{
                            background: "transparent",
                          }}
                          variant="contained"
                          {...bindTrigger(popupState)}
                          className="headerBtn languageBtn"
                        >
                          <Avatar
                            sx={{ width: 15, height: 15 }}
                            className="header_avatar"
                            alt="Remy Sharp"
                            src={usa}
                          />
                          Eng
                          <IconContext.Provider
                            value={{ color: "#3C3C3C", size: "23px" }}
                          >
                            <MdKeyboardArrowDown />
                          </IconContext.Provider>
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            <Avatar
                              sx={{ width: 15, height: 15 }}
                              className="header_avatar"
                              alt="Remy Sharp"
                              src={france}
                            />
                            France
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <Avatar
                              sx={{ width: 15, height: 15 }}
                              className="header_avatar"
                              alt="Remy Sharp"
                              src={bd}
                            />
                            Bangla
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <Avatar
                              sx={{ width: 15, height: 15 }}
                              className="header_avatar"
                              alt="Remy Sharp"
                              src={usa}
                            />
                            Eng
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
              </div>
              {/*  */}
              <div className="notification_icon">
                <Badge color="secondary" variant="dot">
                  <IconContext.Provider
                    value={{ color: "#3C3C3C", size: "23px" }}
                  >
                    <MdNotifications />
                  </IconContext.Provider>
                </Badge>
              </div>
              <div className="menu_btn">
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Button
                        style={{
                          background: "transparent",
                        }}
                        variant="contained"
                        {...bindTrigger(popupState)}
                        className="headerBtn"
                      >
                        <Avatar
                          sx={{ width: 37, height: 37 }}
                          className="header_avatar"
                          alt="Remy Sharp"
                          src={profileImg}
                        />
                        Shamim A.
                      </Button>
                      <Menu {...bindMenu(popupState)}>
                        <Link className="nav-menu" to="/profile">
                          <MenuItem>Profile</MenuItem>
                        </Link>
                        <MenuItem onClick={popupState.close}>
                          My account
                        </MenuItem>
                        {loggedIn && (
                          <MenuItem onClick={logOut}>Logout</MenuItem>
                        )}
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </div>
            </div>
            {/*  */}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className="nav-bar">
            <NavLink
              className="nav-link"
              to="home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={home} alt="" />
                  </ListItemIcon>
                  <h4 className="sidebar_link">Dashboard</h4>
                  <span className="badge">2</span>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="tickets"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={tickets} alt="" />
                  </ListItemIcon>
                  <h4 className="sidebar_link">Tickets</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="team"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={team} alt="" />
                  </ListItemIcon>
                  <h4 className="sidebar_link">Team</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="user"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={user} alt="" />
                  </ListItemIcon>
                  <h4 className="sidebar_link">User</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="messages"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider value={{ className: "msgIcon" }}>
                      <AiOutlineMessage />
                    </IconContext.Provider>
                  </ListItemIcon>
                  <h4 className="sidebar_link">Messages</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="customerMessage"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider value={{ className: "msgIcon" }}>
                      <AiOutlineMessage />
                    </IconContext.Provider>
                  </ListItemIcon>
                  <h4 className="sidebar_link">Customer</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="cutomerhome"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider value={{ className: "msgIcon" }}>
                      <AiOutlineUsergroupAdd />
                    </IconContext.Provider>
                  </ListItemIcon>
                  <h4 className="sidebar_link">Customer Home</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="setting"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={setting} alt="" />
                  </ListItemIcon>
                  <h4 className="sidebar_link">Settings</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink
              className="nav-link"
              to="makeadmin"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IconContext.Provider value={{ className: "msgIcon" }}>
                      <RiAdminLine />
                    </IconContext.Provider>
                  </ListItemIcon>
                  <h4 className="sidebar_link">Page Roles</h4>
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    </div>
  );
};

export default Layout;
