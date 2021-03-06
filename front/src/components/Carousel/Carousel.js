import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { sliderSettings } from '../../data/CarouselData';
import { Row, Section } from '../../globalStyles';
import { Link } from 'react-router-dom';
import Cards from './Card'
import {
	ButtonContainer,
	ReviewSlider,
	TypoStyle,
} from './CarouselStyles';
import '../../App.css'
const Carousel = ({ docs }) => {
	const [sliderRef, setSliderRef] = useState(null);
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<TypoStyle variant="h4" component="div">
					Products
				</TypoStyle>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<FaArrowCircleLeft style={{ color: '#161C36' }} onClick={sliderRef?.slickPrev} />
						<FaArrowCircleRight style={{ color: '#161C36' }} onClick={sliderRef?.slickNext} />
					</IconContext.Provider>
				</ButtonContainer>
			</Row>
			<ReviewSlider {...sliderSettings} ref={setSliderRef}>
				{docs?.map((el, index) => (
					<Link onClick={() => window.scrollTo(0, 0)} key={index} to={`/products/${el.id}`}>
						<Cards el={el} />
					</Link>
				))}
			</ReviewSlider>
		</Section >
	);
};

export default Carousel;
