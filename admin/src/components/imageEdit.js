import { Box } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export const ImageEdit = ({ el, setimage, image, bool }) => {
    const fn = () => {
        const a = image.filter((element) => {
            return bool ? element.imgUrl !== el.imgUrl : element.base64 !== el.base64
        })
        setimage(a)
    }
    return (<>
        <Box
            sx={{
                width: "150px",
                position: "relative",
                height: "150px",
                borderRadius: "12px",
                backgroundImage: `url(${el.base64 || el.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginLeft: "5px"

            }}
        >
            <HighlightOffIcon onClick={fn} sx={{
                position: "absolute",
                right: "0"
            }} />
        </Box>
    </>)

}