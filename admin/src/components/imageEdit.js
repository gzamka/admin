import { Avatar, Box } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export const ImageEdit = ({ el, setimage, image, bool }) => {
    const fn = () => {
        const a = image.filter((element) => {
            return bool ? element.imgUrl !== el.imgUrl : element.base64 !== el.base64
        })
        setimage(a)
    }
    return (<Box sx={{ width: '100%', position: 'relative' }}>
        <Box
            alt="#"
            variant="square"
            sx={{
                width: '90%',
                height: '150px',
                backgroundImage: `url(${el.base64 || el.imgUrl})`,
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "0 auto",
            }}
        ></Box>
        {<HighlightOffIcon onClick={fn} sx={{
            position: "absolute",
            top: "-7px",
            right: "5px",
        }} />}
    </Box>)

}