import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from '../../data/CarouselData';
import { Row, Section } from '../../globalStyles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Cards from './Card'
import {
	ButtonContainer,
	ReviewSlider,
} from './CarouselStyles';

const Carousel = ({ docs }) => {
	const [sliderRef, setSliderRef] = useState(null);
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
				{docs?.map((el, index) => (
					<Link onClick={()=>window.scrollTo(0, 0)} key={index} to={`/products/${el.id}`}>
						<Cards el={el} />
					</Link>
				))}
			</ReviewSlider>
		</Section >
	);
};

export default Carousel;
