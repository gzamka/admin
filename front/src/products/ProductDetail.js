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
    const contact = () => {
        navigation('/contactus')
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Box className='pContainer'>
                <Box sx={style.subtainer}>
                    <div className="media">
                        <Box className='first'>
                            <img alt="#" src={el.img[counter].imgUrl} className="avatar" />
                            <Box className='box'>
                                {/* <button className='lbtn' onClick={leftbtn} /> */}
                                <Box className='middle'>
                                    {el.img.map((element, i) => {
                                        let a = i === counter ? <Box onClick={() => imageClick(i)} sx={style.containerimg1} key={i}>
                                            <img alt="#" src={element.imgUrl} style={style.image} />
                                        </Box> :
                                            <Box onClick={() => imageClick(i)} key={i} sx={style.imgcontainer}>
                                                <img alt="#" src={element.imgUrl} style={style.image} /></Box>
                                        return a
                                    })}
                                </Box>
                                {/* <button className='btn' onClick={rightbtn} /> */}
                            </Box>
                        </Box>
                        <Box className='second'>
                            <Typography variant="h5" component="h2" sx={style.title}>
                                {el.title}
                            </Typography>
                            <Typography sx={{ marginTop: '10px', fontSize: '16px' }} className='desc' variant="h6" component="h2">
                                {parse(el.description)}
                            </Typography>
                            <Box className="contactbtn">
                                <Button variant="contained" onClick={contact}>Contact us</Button>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box >
            <Box sx={style.center}>
                <Typography variant="h4" component="h2">Related Products</Typography>
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
    title: {
        fontWeight: 'bold', height: "auto", borderBottom: "1px solid #E2E2E2",
        maxHeight: '70px'
    },
    imgcontainer: {
        marginLeft: '10px', width: "120px", height: '120px'
    },
    subtainer: {
        width: '95%', height: '90%'
    },
    image: {
        width: "120px", height: '120px'
    },
    containerimg1: {
        minWidth: "130px", height: '130px', border: '1px solid black', display: 'flex',
        justifyContent: 'center', alignItems: 'center', marginLeft: '10px'
    },
    center: {
        width: '80vw',
        margin: '0 auto',
        marginTop: '30px',
        marginBottom: '40px',
    },

}
