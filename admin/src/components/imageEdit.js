import { Box } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
export const ImageEdit = ({ img, el, setimage, image }) => {
    const fn = () => {
        const a = image.filter((element) => {
            return element.base64 !== el.base64
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
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"

            }}
        >
            <HighlightOffIcon onClick={fn} sx={{
                position: "absolute",
                right: "0"
            }} />
        </Box>
    </>)

}