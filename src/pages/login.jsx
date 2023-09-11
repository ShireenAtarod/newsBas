import { Card, Box, Stack, Typography, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export default function Login(){
    const [invalidUsername, setInvalidUsername] = useState(true)

    const handeOnSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        if (event.target[2].checked)  localStorage.setItem('token', '123456')
        else  sessionStorage.setItem('token', '123456')
    }

    const onUsernameChange = (event) => {
        let value = event.target.value

        if (value === '') {
            setInvalidUsername(true)
            return
        }
        let mobileRegex = /^09[0|1|2|3][0-9]{8}$/g
        let emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        setInvalidUsername(value.match(mobileRegex) || value.match(emailRegex) );
    }
    return(
        <Card className="simple-card">
            <Box sx={{height: '100px', background: '#007FFF', display: 'flex', alignItems: 'center'}}>
                <Typography variant="h3" align="left" sx={{color: 'white', marginLeft: '10px',}}>Login</Typography>
            </Box>
            <form onSubmit={handeOnSubmit}>
                <Stack sx={{margin: '50px 20px'}} spacing={3}>
                    <TextField 
                        id='username' 
                        label="Email or Mobile" 
                        variant="standard" 
                        required 
                        onChange={onUsernameChange}
                        error = {invalidUsername ? false : true}
                        helperText = {!invalidUsername && 'invalid username'}/>
                    <TextField id='password' label="Password" variant="standard" required type="password" />
                    <FormControlLabel control={<Checkbox sx={{color: '#007FFF'}} />} label="remember me" />
                    <Button variant="contained" type="submit">Login</Button>
                </Stack>
            </form>
        </Card>
    )
}