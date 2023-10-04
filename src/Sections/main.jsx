import { useState, useEffect, useCallback, useRef } from "react";
import { Grid, Box, Tabs, Tab, TextField, Button, Pagination } from "@mui/material";
import NewsCard from '../components/NewsCard';
import axios from '../services/axios';


export default function Main() {
    const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology']

    const searchRef = useRef(null);
    const renderCount = useRef(0);
    const [newsList, setNewsList] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [reload, setReload] = useState(true);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    renderCount.current++;

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        axios.defaults.params['categories'] = categories[newValue];
        axios.defaults.params['offset'] = 0
        setCurrentPage(1)
    };

    const handleOnPageChange = (event, newPage) => {
        axios.defaults.params['offset'] = newPage;
        setCurrentPage(newPage)
        getNews();
    }

    const handleOnSearchKeyUp = (event) => {
        if (searchRef.current.value.length > 1){
            setSearchValue(searchRef.current.value)
        }
        else {
            setSearchValue('')
        }
    }

    const handleOnSearchClick = (event) => {
        event.preventDefault(); 
        setReload(!reload)
        console.log(searchRef.current.value)
    }

    const getNews = useCallback(async () => {
        try{
            axios.defaults.params['limit'] = 26;
            const response = await axios.get('/news');
            // console.log(response);
            setReload(!reload);
            setNewsList(response.data.data)
            const pagination = response.data.pagination
            setPageCount(Math.ceil(pagination.total / pagination.limit));
        } catch(error){
            // if (error.response.status === 403) {
            //     window.location.replace("/error")
            // }
        }
    })

    useEffect(() => {
        getNews();
    }, [tabValue])

    useEffect(() => {
        searchRef.current.focus();
    }, [])

    return(
        <>
            <p style={{display: 'flex', left: '0', marginTop: '8vh'}}>Render Count: {renderCount.current}</p>
            <Box sx={{display: 'flex'}}>
                <form onSubmit={handleOnSearchClick} >
                    <TextField label="search" variant="outlined" inputRef={searchRef} sx={{float: 'left'}} onKeyUp={handleOnSearchKeyUp} /> 
                    <Button type="submit" variant="contained" sx={{float: 'left', margin: '1px 5px'}} >Search</Button>
                </form>
            </Box>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{marginTop: "10vh"}}>
                {categories.map((category) => {
                    return(
                        <Tab label={category}/>
                    )
                })}
            </Tabs>
            <Grid container spacing={3} sx={{marginTop: "3vh"}}>
                {newsList ? newsList.filter((n) => {return n.title.toLowerCase().match(searchValue)}).map((news, index) => {
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
            <Box sx={{marginTop: "3vh"}}>
                <Pagination count={pageCount} page={currentPage} variant="outlined" color="primary" onChange={handleOnPageChange} />
            </Box>

        </>
    )

}