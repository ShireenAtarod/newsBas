import { useState, useEffect, useCallback } from "react";
import { Grid } from "@mui/material";
import NewsCard from '../components/NewsCard';

import axios from "axios";
export default function Main() {
    const [newsList, setNewsList] = useState(null);

    const getNews = useCallback(async () => {
        try{
            const response = await axios.get("http://api.mediastack.com/v1/news?access_key=e239c1ccb28bd7dbe1cfa7c38cb1e9ef");
            console.log(response);
            setNewsList(response.data.data)
            console.log(newsList)
        } catch(error){
            console.log(error)
        }
    })

    useEffect(() => {
        getNews();
    }, [])

    return(
        <Grid container spacing={3} sx={{marginTop: "3vh"}}>
            {newsList ? newsList.map((news, index) => {
                return(
                    <Grid item xs={(index === 0 && 8) || 4}>
                        <NewsCard data={news}/>
                    </Grid>
                )
            })
            :
            <h1>
                No News For Now!
            </h1>
            }
        </Grid>
    )

}