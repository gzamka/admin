import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
export default function SpecificNews({ el }) {
    const { img, title, description, date } = el
    const _date = new Date(date)
    const convertedDate = _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear()
    return (
        <Box sx={styles.container}>
            <Box>
                <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                <Box sx={{ color: 'gray' }}>{convertedDate}</Box>
                <Avatar alt="Remy Sharp" variant="square" src={img[0].imgUrl} sx={styles.img} />
                <Typography variant="h6" sx={styles.description}>
                    {description}
                </Typography>
            </Box>
        </Box>
    )
}
const styles = {
    container: {
        width: '800px', margin: '0 auto', marginTop: '120px', marginBottom: '40px'
    },
    description: {
        width: '95%', margin: '0 auto', marginTop: '15px'
    },
    img: {
        width: '100%', height: '65vh'
    }
}
