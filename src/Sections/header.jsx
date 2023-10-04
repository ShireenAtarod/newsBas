import { useSelector } from "react-redux";
import BlackBox from "../components/BlackBox";
import { Card, Button } from "@mui/material";
import { en, fa } from '../locales'
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Header() {
    const { lang } = useContext(ThemeContext)
    
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
                    {lang==='en' ? en.login : fa.login}
                </Button>
            </BlackBox>
        </Card>
    )
};