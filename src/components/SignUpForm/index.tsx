import React from 'react'
import { Grid, TextField, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const textFieldStyle = {
  padding: 10
}
const SignUpForm = () => {
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

        <Grid justifyContent="center" display= "flex" >
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
         <TextField label="Email" variant="standard" placeholder="Enter Email" type="email" fullWidth required style={textFieldStyle}></TextField>
        </form>
        </Grid>
    )
}

export default SignUpForm
