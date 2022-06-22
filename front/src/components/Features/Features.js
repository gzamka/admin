import React from 'react';
import { Link } from 'react-router-dom';
import { sliderSettings } from '../../data/CarouselData';
import { Container, Flex, Section } from '../../globalStyles';
import Cards from '../Carousel/Card';
import { ReviewSlider } from '../Carousel/CarouselStyles';
import {
	FeatureTitle,
	FeatureTextWrapper,
} from './FeaturesStyles';

const Features = ({ news: { data } }) => {

	return (
		<Section smPadding="50px 10px" position="relative" inverse>
			<Flex>
				<FeatureTextWrapper>
					<FeatureTitle>News Line</FeatureTitle>
				</FeatureTextWrapper>
				<ReviewSlider {...sliderSettings}>
					{data?.slice(0, 4).map((el, i) => {
						return <Link onClick={() => window.scrollTo(0, 0)} key={i} to={`/news/${el.id}`}>
							<Cards el={el} news={data} product={1} />
						</Link>
					})}
				</ReviewSlider>
			</Flex>
		</Section>
	);
};

export default Features;
