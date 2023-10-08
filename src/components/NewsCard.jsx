import { Card, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState, useMemo } from "react"
import { ThemeContext } from "../App"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function NewsCard(props){
    
    const { isDarkMode } = useContext(ThemeContext)
    const [data, setData] = useState(props.data)

    useEffect(()=>{
        setData(props.data)
    }, [props])

    function calculateWordCount(articleText) {
        const words = articleText.split(/\s+/); // Split by spaces
        return words.length;
    }
    
    function estimateReadingTime(articleText, readingSpeed = 20) {
        console.log(1)
        const wordCount = calculateWordCount(articleText);
        const minutes = Math.ceil(wordCount / readingSpeed);
        return `${minutes} min`;
    }

    // const readingTime = estimateReadingTime(data.description)
    const readingTime = useMemo(() => {
        return estimateReadingTime(data.description); // Assuming 'content' contains the article text
      }, [data.description]);

    return(
        <Card className={"card-same-heigth " + (isDarkMode===true && 'dark')}>
            <Stack spacing={3}>
                <img src={data.image} className="news-image" />
                <Typography variant="h4">{data.title}</Typography>
                <Typography variant="body1">{data.description} </Typography>
                <Typography variant="subtitle">source:{data.source}</Typography>
                <Stack direction="row" sx={{margin: 'auto !important'}}>
                    <AccessTimeIcon />
                    <Typography variant="subtitle">reading time: {readingTime}</Typography>
                </Stack>
            </Stack>
            {console.log(0)}
        </Card>
    )
}