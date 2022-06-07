import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
export default function SingleNews({ el }) {
    const { title, img, id, date } = el
    const _date = new Date(date)
    const convertedDate = _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear()
    return (
        <>
            <Link to={`/news/${id}`}>
                <Box className="Newscontainer">
                    <img alt="#" src={img[0].imgUrl} className="Newsimg" />
                    <Box sx={{ paddingTop: '10px' }}>
                        <Typography variant="h6" component="h1">
                            {title}
                        </Typography>
                        <Box sx={{ color: 'gray', paddingTop: '6px' }}>{convertedDate}</Box>
                    </Box>
                </Box>
            </Link>
        </>
    )
}
