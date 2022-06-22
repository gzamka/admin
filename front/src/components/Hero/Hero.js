import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import '../../App.css'
import { HeroVideo, HeroSection } from './HeroStyles';
const Hero = ({ language }) => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/video.mp4" loop autoPlay muted />
			<img src="/assets/background.jpg" alt="#" style={{width: '100%',height: '100vh', position: 'absolute', top: '0' }}></img>
			<Container>
				<MainHeading>Mass Tech Company</MainHeading>
			</Container>
		</HeroSection>
	);
};

export default Hero;
