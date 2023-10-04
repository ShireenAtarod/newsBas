import { useSelector } from "react-redux";
import BlackBox from "../components/BlackBox";
import { Card, Button } from "@mui/material";

export default function Header() {
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
                    Login
                </Button>
            </BlackBox>
        </Card>
    )
};