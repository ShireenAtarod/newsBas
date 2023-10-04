import { Card, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../App"

export default function NewsCard(props){
    
    const { isDarkMode } = useContext(ThemeContext)
    const [data, setData] = useState(props.data)

    useEffect(()=>{
        setData(props.data)
    }, [props])

    return(
        <Card className={"card-same-heigth " + (isDarkMode===true && 'dark')}>
            <Stack spacing={3}>
                <img src={data.image} className="news-image" />
                <Typography variant="h4">{data.title}</Typography>
                <Typography variant="body1">{data.description} </Typography>
                <Typography variant="subtitle">source:{data.source}</Typography>
            </Stack>
        </Card>
    )
}