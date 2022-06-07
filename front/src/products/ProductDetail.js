import '../App.css'
import { Button, Typography, Avatar, Box } from '@mui/material';
import { useState } from 'react';
import { SingleProduct } from './SIngleProduct';
export const ProductDetail = ({ el, docs }) => {
    console.log(el.img);
    let [counter, setcounter] = useState(0)
    const rightbtn = () => {
        if (counter < el.img.length - 1) setcounter(counter += 1)
    }
    const leftbtn = () => {
        if (counter > 0) setcounter(counter -= 1)
    }
    return (
        <>
            <Box sx={style.container}>
                <Box sx={{ width: '95%', height: '90%' }}>
                    <div className="flex" style={{ justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Avatar alt="Remy Sharp" variant="square" src={el?.img[counter].imgUrl} sx={style.img} />
                            <Box sx={{ display: 'flex', marginTop: '20px', width: "34vw", height: '100px', alignItems: 'center' }}>
                                <button className='lbtn' onClick={leftbtn} />
                                <Box sx={style.middle}>
                                    {el.img.map((element, i) => {
                                        {
                                            let a = i === counter ? <Box sx={i !== 0 ? style.containerimg : style.containerimg1} key={i}>
                                                <img alt="#" src={element.imgUrl} style={style.image} />
                                            </Box> :
                                                <Box key={i} sx={{ marginLeft: '10px', width: "150.09px", height: '117.15px' }}>
                                                    <img alt="#" src={element.imgUrl} style={style.image} /></Box>
                                            return a
                                        }
                                    })}
                                </Box>
                                <button className='btn' onClick={rightbtn} />
                            </Box>
                        </Box>
                        <Box sx={{ width: '40vw' }}>
                            <Typography variant="h4" component="h2">
                                {el.title}
                            </Typography>
                            <Typography variant="h6" component="h2" sx={style.description}>
                                {el.description}
                            </Typography>
                            <Button sx={style.button} variant="contained">Contact us</Button>
                        </Box>
                    </div>
                </Box>
            </Box >
            <Box sx={style.center}>
                <Typography variant="h6" component="h2">Төстэй бараанууд</Typography>
                <Box sx={style.flex}>
                    {docs.slice(0, 3).map((doc, i) => {
                        return <SingleProduct el={doc} key={i} p={1} />
                    })}
                </Box>
            </Box>
        </>
    )
}
const style = {
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px'
    },
    image: {
        width: "150.09px", height: '117.15px'
    },
    middle: {
        display: 'flex', alignItems: 'center', width: '85%', height: '150px', marginTop: '20px', overflowX: 'scroll'
    },
    containerimg: {
        marginLeft: '10px', minWidth: "160.09px", height: '127.15px', border: '1px solid black', display: 'flex',
        justifyContent: 'center', alignItems: 'center'
    },
    containerimg1: {
        minWidth: "160.09px", height: '127.15px', border: '1px solid black', display: 'flex',
        justifyContent: 'center', alignItems: 'center'
    },
    center: {
        width: '80vw',
        margin: '0 auto',
        marginTop: '30px',
        marginBottom: '80px',
    },
    description: {
        color: 'black', marginTop: "15px", height: '350px', overflow: 'scroll'
    },
    button: {
        position: 'absolute',
        right: '50px',
        bottom: '30px',
    },
    container: {
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        justifyContent: "center",
        marginTop: "30px",
        width: "80vw",
        height: "500px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        marginTop: '100px',
    },
    img: {
        width: "34vw", height: '298.82px', border: '1px solid #f5f5f5'
    }


}
