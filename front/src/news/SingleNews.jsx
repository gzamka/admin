import { Box, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
export default function SingleNews({ el }) {
    const [bool, setbool] = useState(false)
    const { title, img, id, date } = el
    const _date = new Date(date)
    const convertedDate = _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear()
    setTimeout(() => {
        setbool(true)
    }, 500)
    return (
        <>
            <Link onClick={() => window.scrollTo(0, 0)} to={`/news/${id}`}>
                <Box className="newssize">
                    {!bool ? <Skeleton variant="rectangular" sx={styles.skeleton} /> :
                        <img alt="#" src={img[0].imgUrl} className="Newsimg" />}
                    <Box sx={{ paddingTop: '10px' }}>
                        <Typography variant="h6" component="h6" sx={{
                            fontFamily: "Commissioner, sans-serif",
                            fontSize: "20px",
                            fontWeight: "600",
                            lineHeight: "1.3",
                        }}>
                            {title}
                        </Typography>
                        <Box sx={styles.date}>{convertedDate}</Box>
                    </Box>
                </Box>
            </Link>
        </>
    )
}
const styles = {
    skeleton: {
        width: "95%",
        height: "250px",
        margin: "0 auto",
        borderRadius: "6px",
    },
    date: {
        color: 'gray', paddingTop: '6px'
    }
}
