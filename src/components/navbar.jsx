import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import PetsIcon from "@mui/icons-material/Pets";
import { changeTheme } from "../store/store.tsx";

import { theme } from "../theme.js";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TemporaryDrawer from "./material/drawer.tsx";
import PrintIcon from "@mui/icons-material/Print";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MenuIcon from '@mui/icons-material/Menu';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const CustomSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
}));

const UserMobileView = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const handeDownload = () => {
  const url = "./image/cv.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
function Navbar() {
  const [drawer, openDrawer] = useState(false);

  const [open, setopen] = useState(false);
  const { dark, darkTheme } = changeTheme();
  const [image, setImgage] = useState();
  const avatar = window.sessionStorage.getItem("avatar");

  useEffect(
    () => {
      setImgage(avatar);
    },
    [avatar],
    [image]
  );
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: dark ? "#1976d2" : "black" }}
    >
      <Toolbar>
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            React JS Ralph
          </Typography>
          <MenuIcon
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => openDrawer(true)}
          />

          <TemporaryDrawer openNa={drawer} closeNa={() => openDrawer(false)} />
          <CustomSearch>
            <InputBase placeholder="Search...." />
          </CustomSearch>

          <Icons sx={{'&.MuiBox-root, css-eapiq6': {
            gap: {xs: 0, sm: '20px'},
          }}}>
            <PictureAsPdfIcon onClick={handeDownload} sx={{cursor: 'pointer', display: {
              xs: 'none', sm: 'block'
            }}}/>

            <Box onClick={darkTheme} sx={{ cursor: "pointer" }}>
              {dark ? <DarkModeIcon /> : <LightModeIcon />}
            </Box>
            <Badge
              badgeContent={4}
              color="error"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <MailIcon />
            </Badge>
            <Badge
              badgeContent={4}
              color="error"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <NotificationsIcon />
            </Badge>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                display: { xs: "none", sm: "block" },
              }}
              alt="Remy Sharp"
              src={avatar ? avatar : "./image/cat.jpg"}
              onClick={() => {
                setopen(true);
              }}
            />

            <UserMobileView>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                onClick={() => {
                  setopen(true);
                }}
              />
              <Typography variant="h6">Ralph</Typography>
            </UserMobileView>
          </Icons>
        </StyledToolBar>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <a href="https://ralphfromthesky.github.io/vueApps2/" target="blank"><MenuItem>go to my VUE js profile</MenuItem></a>
        <MenuItem>My account</MenuItem>
        <MenuItem>
          <Button variant="contained" color="primary" onClick={handeDownload}>
            Download my CV
          </Button>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
