import React from 'react'
import { Button, IconButton } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { useNavigate } from 'react-router-dom'

const AuthButton: React.FC<AuthButtonProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    color="inherit"
    >
    <AccountCircle/>
    </IconButton>
  } else {
    const navigate = useNavigate()
    return <Button color="inherit" onClick={() => { navigate('/login') }}>Login</Button>
  }
}

type AuthButtonProps = {
  isAuthenticated: boolean
}

export default AuthButton
