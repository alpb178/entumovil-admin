/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { URL_HOME } from "@/lib/constant";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function MenuItemNavbar(props) {
  const { openModalLogout } = props;
  const { username } = useAuth();

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

  const handleViewProfile = () => {
    navigate(URL_HOME);
    handleClose();
  };

  return (
    <Fragment className="font-humanst">
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
        <MenuItem className="!m-2 text-14px font-humanst" onClick={handleViewProfile}>
          Perfil
        </MenuItem>

        <MenuItem className="!m-2 text-14px font-humanst" onClick={openModalLogout}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
