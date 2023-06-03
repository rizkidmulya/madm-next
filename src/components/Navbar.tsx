"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppNavBar({
  title,
  items,
}: {
  title: string;
  items?: {
    text: string;
    link: string;
  }[];
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToogle = () => {
    setOpenDrawer(!openDrawer);
  };

  const navList = <></>;

  return (
    <>
      <AppBar component={"nav"}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleToogle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={"div"}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link href={"/"}>MADM</Link>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, gap: { sm: 2, xs: 0 } }}
          >
            {items &&
              items.map((item) => (
                <Button
                  component={Link}
                  href={item.link}
                  sx={{ color: "#fff" }}
                >
                  {item.text}
                </Button>
              ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
