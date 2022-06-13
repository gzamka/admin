import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({ el }) {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="260px"
                        image={el.img[0].imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ height: '60px', overflow: 'hidden' }}>
                            {el.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ height: '60px', overflowY: 'hidden' }}>
                            {el.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary">
                            More information
                        </Button>
                </CardActions>
            </Card>
        </>
    )
}
