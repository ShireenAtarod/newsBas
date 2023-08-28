import { useState, useEffect, useCallback } from "react";
import { Grid, Box, Tabs, Tab } from "@mui/material";
import NewsCard from '../components/NewsCard';
import axios from '../services/axios';


export default function Main() {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']

    const [newsList, setNewsList] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    const [reload, setReload] = useState(true);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        axios.defaults.params['categories'] = categories[newValue];
      };

    const getNews = useCallback(async () => {
        try{
            const response = await axios.get('/ne');
            console.log(response);
            setReload(!reload);
            setNewsList(response.data.data)
        } catch(error){
            if (error.response.status === 500) {
                window.location.replace("/error")
            }
        }
    })

    useEffect(() => {
        getNews();
    }, [tabValue])

    return(
        <>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{marginTop: "10vh"}}>
                {categories.map((category) => {
                    return(
                        <Tab label={category}/>
                    )
                })}
            </Tabs>
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

        </>
    )

}