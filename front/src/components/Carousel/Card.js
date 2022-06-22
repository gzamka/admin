import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import parse from 'react-html-parser'
import { useAnimation } from 'framer-motion';
export default function Cards({ el, product }) {
    const initial = { y: 30 };
    const animation = useAnimation();
    const inverse = true
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="260px"
                        image={el.img[0].imgUrl}
                        alt="green iguana"
                        style={product === 1 ? { objectFit: 'cover' } : { objectFit: 'contain' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ height: '60px', overflow: 'hidden' }}>
                            {el.title}
                        </Typography>
                        <Typography variant="body2" component="div" color="text.secondary" sx={{ height: '60px', overflowY: 'hidden' }}>
                            {parse(el.description)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
