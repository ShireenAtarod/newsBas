import BlackBox from "../components/BlackBox";
import { Card, Button } from "@mui/material";

export default function Header() {
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