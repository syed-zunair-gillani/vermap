"use client";
import React from "react";
import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import Container from "../ui/container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MainFilter from "./MainFilter";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="border-b-[1px] sticky w-full top-0 z-50 bg-white">
      <Container className="py-5 flex justify-between items-start">
        <Logo />
        <div className="flex-1 pt-1">
          <NavLinks />
          <MainFilter/>
        </div>
        <div className="flex items-center justify-end max-w-[270px] w-full">
          <button className="hover:text-black hover:bg-gray-100 px-5 rounded-full py-2 text-[15px]">
            Airbnb your home
          </button>

          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ 
                ml: 1, 
                '&:hover': {
                  background: 'none', 
                  boxShadow: 'none' 
                }
              }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="flex items-center gap-2 border px-3 py-[10px] rounded-full">
              <Image
                src="/icons/menu-icon.svg"
                width={22}
                height={22}
                alt="menu-icon"
                className="opacity-60"
              />
              <Image
                src="/icons/profile.svg"
                width={28}
                height={28}
                alt="menu-icon"
                className="opacity-60"
              />
            </div>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Add another account</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Container>
    </header>
  );
};

export default Header;
