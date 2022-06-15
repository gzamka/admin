import '../App.css'
import { Button, Typography, Box } from '@mui/material';
import { useState } from 'react';
import { SingleProduct } from './SIngleProduct';
import parse from "react-html-parser"
import { useNavigate } from 'react-router-dom';
export const ProductDetail = ({ el, docs }) => {
    const navigation = useNavigate()
    let [counter, setcounter] = useState(0)
    const rightbtn = () => {
        if (counter < el.img.length - 1) setcounter(counter += 1)
    }
    const leftbtn = () => {
        if (counter > 0) setcounter(counter -= 1)
    }
    const imageClick = (i) => setcounter(i)
    const contact = () => navigation('/contactus')
    return (
        <>
            <Box className='pContainer'>
                <Box sx={style.subtainer}>
                    <div className="media">
                        <Box className='first'>
                            <img alt="#" src={el.img[counter].imgUrl} className="avatar" />
                            <Box className='box'>
                                <button className='lbtn' onClick={leftbtn} />
                                <Box className='middle'>
                                    {el.img.map((element, i) => {
                                        let a = i === counter ? <Box onClick={() => imageClick(i)} sx={i !== 0 ? style.containerimg : style.containerimg1} key={i}>
                                            <img alt="#" src={element.imgUrl} style={style.image} />
                                        </Box> :
                                            <Box onClick={() => imageClick(i)} key={i} sx={style.imgcontainer}>
                                                <img alt="#" src={element.imgUrl} style={style.image} /></Box>
                                        return a
                                    })}
                                </Box>
                                <button className='btn' onClick={rightbtn} />
                            </Box>
                        </Box>
                        <Box className='second'>
                            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', height: "45px", borderBottom: "1px solid #E2E2E2"}}>
                                {el.title}
                            </Typography>
                            <Typography sx={{ marginTop: '10px' }} className='desc' variant="h6" component="h2">
                                {parse(el.description)}
                            </Typography>
                            <Button sx={style.button} variant="contained" onClick={contact}>Contact us</Button>
                        </Box>
                    </div>
                </Box>
            </Box >
            <Box sx={style.center}>
                <Typography variant="h6" component="h2">Төстэй бараанууд</Typography>
                <Box className='similarproducts'>
                    {docs.slice(0, 3).map((doc, i) => {
                        return <Box onClick={() => setcounter(0)} key={i}><SingleProduct el={doc} p={1} a={1} /></Box>
                    })}
                </Box>
            </Box>
        </>
    )
}
const style = {
    imgcontainer: {
        marginLeft: '10px', width: "150.09px", height: '117.15px'
    },
    subtainer: {
        width: '95%', height: '90%'
    },
    image: {
        width: "150.09px", height: '117.15px'
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
        marginBottom: '40px',
    },
    button: {
        position: 'absolute',
        right: '50px',
        bottom: '30px',
    }
}
