/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'
import { Button, FormControlLabel, FormGroup, Container, Checkbox, Grid, Paper, TextField, InputLabel, InputAdornment, OutlinedInput, IconButton } from '@mui/material'
import MenuBar from '../../components/MenuBar'
import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import { LoginPageContext } from './loginPageContext'

const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: '40vh',
    margin: '20px auto'
  }

  const [formType, setFormType] = React.useState('signin')

  const switchToSignUp = () => {
    setFormType('signup')
  }

  const switchToSignIn = () => {
    setFormType('signin')
  }

  const contextValue = { switchToSignUp, switchToSignIn }

  return (

    <LoginPageContext.Provider value={contextValue}>
   <Container>
    <MenuBar></MenuBar>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
         <Grid justifyContent="center" display= "flex" >
          <h2>Welcome Back!</h2>
        </Grid>

        {formType === 'signin' && <SignInForm></SignInForm>}
        {formType === 'signup' && <SignUpForm></SignUpForm>}

      </Paper>
    </Grid>
   </Container>
   </LoginPageContext.Provider>

  )
}

export default LoginPage
