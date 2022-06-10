import { Box } from '@mui/material'
import React from 'react'
import { UselanguageContext } from '../languageContext';
import SingleNews from './SingleNews'

export default function News() {
    const { news: { data } } = UselanguageContext()
    return (
        <Box>
            <Box className='newsContainer'>
                <Box className="newsgrid">
                    {data && data?.map((el, i) => {
                        return <SingleNews key={i} el={el} />
                    })}
                </Box>
            </Box>
        </Box>
    )
}
