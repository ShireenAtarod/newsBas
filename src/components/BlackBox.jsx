import { Box } from '@mui/material';

export default function BlackBox(props) {
    return(
        <Box sx={{backgroundColor: 'var(--black)', height: 'inherit'}}>
            { props.children }
        </Box>
    )
}