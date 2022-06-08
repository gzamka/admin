import { Box } from '@mui/material'
import React from 'react'
import SingleNews from './SingleNews'

export default function News({ docs }) {
    console.log(docs);
    return (
        <Box>
            <Box className='newsContainer'>
                <Box className="newsgrid">
                    {docs && docs?.map((el, i) => {
                        return <SingleNews key={i} el={el} />
                    })}
                </Box>
            </Box>
        </Box>
    )
}
