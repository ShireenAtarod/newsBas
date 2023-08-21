import { Card, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export default function NewsCard(props){
    const [data, setData] = useState(props.data)

    useEffect(()=>{
        setData(props.data)
    }, [props])

    return(
        <Card className="card-same-heigth">
            <Stack spacing={3}>
                <img src={data.image} className="news-image" />
                <Typography variant="h4">{data.title}</Typography>
                <Typography variant="body1">{data.description} </Typography>
                <Typography variant="subtitle">source:{data.source}</Typography>
            </Stack>
        </Card>
    )
}