/* eslint-disable no-unused-vars */

import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AuthButton from '../AuthButton'

const MenuBar = () => {
  const [isAuthenticated, setAuth] = React.useState(false)

  return (

    <AppBar position="relative">
       <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GotToGoNYC
        </Typography>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <AuthButton isAuthenticated = {isAuthenticated}></AuthButton>
      </Toolbar>
    </AppBar>

  )
}

export default MenuBar
