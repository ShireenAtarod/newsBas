import { Card, Box, Stack, Typography, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../redux/slices/user'

export default function Login(){
    const dispatch = useDispatch()

    const [validUsername, setValidUsername] = useState(true)

    const handelOnSubmit = (event) => {
        event.preventDefault();
        dispatch(login(event.target[0].value))
        if (event.target[2].checked)  localStorage.setItem('token', '123456')
        else  sessionStorage.setItem('token', '123456')
        // window.location.assign("/")
    }

    const onUsernameChange = (event) => {
        let value = event.target.value

        if (value === '') {
            setValidUsername(true)
            return
        }
        let mobileRegex = /^09[0|1|2|3][0-9]{8}$/
        let emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        setValidUsername(value.match(mobileRegex) || value.match(emailRegex) );
    }
    return(
        <Card className="simple-card">
            <Box sx={{height: '100px', background: '#007FFF', display: 'flex', alignItems: 'center'}}>
                <Typography variant="h3" align="left" sx={{color: 'white', marginLeft: '10px',}}>Login</Typography>
            </Box>
            <form onSubmit={handelOnSubmit}>
                <Stack sx={{margin: '50px 20px'}} spacing={3}>
                    <TextField 
                        id='username' 
                        label="Email or Mobile" 
                        variant="standard" 
                        required 
                        onChange={onUsernameChange}
                        error = {validUsername ? false : true}
                        helperText = {!validUsername && 'invalid username'}/>
                    <TextField id='password' label="Password" variant="standard" required type="password" />
                    <FormControlLabel control={<Checkbox sx={{color: '#007FFF'}} />} label="remember me" />
                    <Button variant="contained" type="submit">Login</Button>
                </Stack>
            </form>
        </Card>
    )
}