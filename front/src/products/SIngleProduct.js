import "../App.css"
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
export const SingleProduct = ({ el }) => {
    const { img, title,id } = el
    return (
        <>
            <Link onClick={()=>window.scrollTo(0, 0)} to={`/products/${id}`}>
                <Box className="container">
                    <span className="helper"></span>
                    <img alt="#" src={img[0].imgUrl} className="img" />
                    <Box className="title_container">
                        <Typography variant="h5" component="h5" sx={{overflow: 'hidden', height: '70px'}}>
                            {title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </>
    )

}