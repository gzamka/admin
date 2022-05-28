import { Avatar, Box } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { display } from "@mui/system";
export const ImageEdit = ({ el, setimage, image, bool }) => {
    const fn = () => {
        const a = image.filter((element) => {
            return bool ? element.imgUrl !== el.imgUrl : element.base64 !== el.base64
        })
        setimage(a)
    }
    return (<Box sx={{ width: '250px', height: '160px', position: 'relative' ,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Box
            alt="#"
            variant="square"
            sx={{
                width: '230px',
                height: '150px',
                backgroundImage: `url(${el.base64 || el.imgUrl})`,
                borderRadius: "10px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: "0 auto",
            }}
        ></Box>
        {<Box sx={{
            width: '30px', height: '30px',
            display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute',
            borderRadius: '100px', backgroundColor: 'white', zIndex: '10',top: '0',right:'0'
        }}>
            <HighlightOffIcon onClick={fn} />
        </Box>
        }
    </Box>)

}
