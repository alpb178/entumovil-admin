/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { URL_HOME, URL_PROFILE_ADMIN } from "@/lib/constant";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function MenuItemNavbar(props) {
  const { openModalLogout } = props;
  const { username, isAdmin } = useAuth();

  const letter = username?.substring(0, 1).toUpperCase();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewAdmin = () => {
    navigate(URL_PROFILE_ADMIN);
    handleClose();
  };

  const handleViewProfile = () => {
    navigate(URL_HOME);
    handleClose();
  };

  return (
    <Fragment>
      <Avatar
        sx={{ width: 32, height: 32 }}
        className="cursor-pointer"
        onClick={handleClick}
      >
        {letter}
      </Avatar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleViewProfile}>Perfil</MenuItem>
        {isAdmin === "admin" && (
          <MenuItem onClick={handleViewAdmin}>Admin</MenuItem>
        )}
        <MenuItem onClick={openModalLogout}>Cerrar Sesión</MenuItem>
      </Menu>
    </Fragment>
  );
}
