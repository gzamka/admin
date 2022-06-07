import "../App.css"
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
export const SingleProduct = ({ el, p }) => {
    const { img, title,id } = el
    return (
        <>
            <Link to={`/products/${id}`}>
                <Box className="container" sx={p === 1 ? { width: '25vw' } : { width: '28vw' }}>
                    <span className="helper"></span>
                    <img alt="#" src={img[0].imgUrl} className="img" />
                    <Box className="title_container">
                        <Typography variant="h5" component="h1" sx={{ lineHeight: '50px' }}>
                            {title}
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </>
    )

}