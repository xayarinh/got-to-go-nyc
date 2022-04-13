import React from 'react'
import styled from 'styled-components'
import { FormControlLabel, FormGroup, Checkbox, Grid, TextField, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { LoginPageContext } from '../../pages/LoginPage/loginPageContext'

const textFieldStyle = {
  padding: 10
}
const SignInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const { switchToSignUp } = React.useContext(LoginPageContext)

  const handleClickShowPassword = () => {
    setShowPassword(true)
  }

  const MutedLink = styled.a`
  font-size: 20px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin-left: 20px;
`

  const FollowUpSpan = styled.span`
  font-family: 'Updock', cursive;
  
  
  `

  return (

        <Grid justifyContent="center" display= "flex" direction="column">
        <form>
        <TextField label="Username" variant="standard" placeholder="Enter Username" type="text" fullWidth required style={textFieldStyle}></TextField>
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type={showPassword ? 'text' : 'password'}
          style={textFieldStyle}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff /> }
                  </IconButton>
              </InputAdornment>
            )
          }}
        />
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked={Boolean(false)}/>} label="Remember me?" />
        </FormGroup>
        </form>

        <Grid justifyContent="center" display= "flex" margin="10vh auto">
        <FollowUpSpan>New Here? <MutedLink href="#" onClick={switchToSignUp}>Sign Up</MutedLink></FollowUpSpan>
        </Grid>

        </Grid>

  )
}

export default SignInForm
