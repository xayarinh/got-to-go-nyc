/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, FormControlLabel, FormGroup, Container, Checkbox, Grid, Paper, TextField, InputLabel, InputAdornment, OutlinedInput, IconButton } from '@mui/material'
import MenuBar from '../../components/MenuBar'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: '40vh',
    margin: '20px auto'
  }

  const textFieldStyle = {
    padding: 5
  }

  type State = {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  return (

   <Container>
    <MenuBar></MenuBar>
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid justifyContent="center" display= "flex" >
          <h2>Welcome Back!</h2>
        </Grid>

        <form>
        <TextField label="Username" variant="standard" placeholder="Enter Username" type="text" fullWidth required style={textFieldStyle}></TextField>
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          type={values.showPassword ? 'text' : 'password'}
          style={textFieldStyle}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff /> }
                  </IconButton>
              </InputAdornment>
            )
          }}
        />
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked={Boolean(false)}/>} label="Remember me?" />
        </FormGroup>
        </form>
        <Grid direction="column" justifyContent="center" alignItems="center" display="flex" >
          <Button variant="contained">Log In</Button>
        </Grid>

        <Grid direction="column" justifyContent="center" alignItems="center" display="flex" >
          <p>New Here?</p>
          <Button variant="contained">Create Account</Button>
        </Grid>

      </Paper>
    </Grid>
   </Container>

  )
}

export default LoginPage
