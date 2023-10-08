import { useSelector } from "react-redux";
import BlackBox from "../components/BlackBox";
import { Card, Button } from "@mui/material";
import { en, fa } from '../locales'
import { ThemeContext } from "../App";
import { useContext, useEffect, useState } from "react";

export default function Header() {
    const { lang } = useContext(ThemeContext)
    const [local, setLocal] = useState(en)

    useEffect(()=>{
        if (lang === 'en') setLocal(en)
        else setLocal(fa)
    }, [lang])
    
    const user = useSelector((state) => state.user.userName)
    console.log(user)
    return(
        <Card className="header">
            <BlackBox>
                <Button 
                    variant="text" 
                    className="header-button" 
                    onClick={()=>window.location.assign("/login")}
                >
                    {local.login}
                </Button>
            </BlackBox>
        </Card>
    )
};