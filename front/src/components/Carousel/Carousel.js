import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from '../../data/CarouselData';
import { Row, Section } from '../../globalStyles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import {
	ButtonContainer,
	ReviewSlider,
} from './CarouselStyles';
import { UselanguageContext } from '../../languageContext';

const Carousel = () => {
	const [sliderRef, setSliderRef] = useState(null);
	const { data } = UselanguageContext()
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Typography variant="h3" component="div" sx={{ marginLeft: '10px' }}>
					Products
				</Typography>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{data?.map((el, index) => (
					<Link key={index} to={`/products/${el.id}`}>
						<Card sx={{ maxWidth: 345 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={el.img[0].imgUrl}
									alt="green iguana"
									sx={{ height: '260px' }}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
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
					</Link>

				))}
			</ReviewSlider>
		</Section >
	);
};

export default Carousel;
