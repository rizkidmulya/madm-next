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
  Drawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppNavBar({
  title,
  items,
  drawerWidth = 240,
}: {
  title: string;
  items: {
    text: string;
    link: string;
  }[];
  drawerWidth?: number;
}) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToogle = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawer = (
    <Box onClick={handleToogle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MADM
      </Typography>
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
                  key={item.text}
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
      <Box>
        <Drawer
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          variant="temporary"
          open={openDrawer}
          onClose={handleToogle}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
