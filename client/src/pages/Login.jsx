import React from 'react'
import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
const Login = () => {
  const [isLogin,setIsLogin] = useState(true); // we are going to make the register page here, if log in is true, log in shows otherwise register
  const toggleLogIn = ()=> setIsLogin(login=> !login)
  return <Container component={"main"} 
  maxWidth="xs" 
  sx={{
  height:"100vh", 
  display:"flex",
  justifyContent:"center",
  alignItems:"center"}}>


    <Paper 
    elevation={3} 
    sx={{padding:4,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"}}>


      {isLogin?<>

        <Typography variant='h5'>Login</Typography>

        <form style={{
          width:"100%",
          marginTop:"1rem"
        }}>

          <TextField 
          required
          fullWidth
          label="Username"
          margin="normal"
          varient="outlined"
          ></TextField>
          <TextField 
          required
          fullWidth
          label="Password"
          type='password'
          margin="normal"
          varient="outlined"
          ></TextField>

          <Button 
          sx={{
              marginTop:"1rem",
            }}
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
          >
            Log In
          </Button>
          <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
          <Button
          xs={{
            marginTop: "1rem",
          }}
          fullWidth
          varient="text"
          onClick={toggleLogIn}
          >
            Sign Up 
          </Button>

        </form>
      </> 
      : <>

      <Typography variant='h5'>Sign Up</Typography>

      <form style={{
        width:"100%",
        marginTop:"1rem"
      }}>
        <TextField 
        required
        fullWidth
        label="Full Name"
        margin="normal"
        varient="outlined"
        ></TextField>

        <TextField 
        required
        fullWidth
        label="Username"
        margin="normal"
        varient="outlined"
        ></TextField>
        <TextField 
        required
        fullWidth
        label="Password"
        type='password'
        margin="normal"
        varient="outlined"
        ></TextField>

        <Button 
        sx={{
            marginTop:"1rem",
          }}
        variant='contained'
        color='primary'
        type='submit'
        fullWidth
        >
          Sign Up
        </Button>
        <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
        <Button
        xs={{
          marginTop: "1rem",
        }}
        fullWidth
        varient="text"
        onClick={toggleLogIn}
        >
          Log In
        </Button>

      </form>
    </>}

    </Paper>
  </Container>
}

export default Login