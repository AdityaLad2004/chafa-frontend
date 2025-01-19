import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="sticky" className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 shadow-lg">
      <Toolbar className="container mx-auto flex justify-between items-center">
        <Typography variant="h6" className="text-white font-bold text-2xl">
          YourBloggie
        </Typography>
        <div className="space-x-6">
          <Button
            color="inherit"
            component={Link}
            to="/"
            className="hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/analytics"
            className="hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Analytics
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/portal"
            className="hover:text-gray-200 transition duration-300 ease-in-out"
          >
            Blog Portal
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
