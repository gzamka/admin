import { Typography } from '@mui/material';
import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import '../../App.css'
import { HeroVideo, HeroSection } from './HeroStyles';
const Hero = ({ language }) => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" loop autoPlay muted />
			<Container>
				<MainHeading>Mass Tech Company</MainHeading>
				<Typography variant="h4" component="div" sx={{ color: "white", textAlign: 'center' }}>
					{language === 10 ? "Танилцуулга" : `Introduction `}
				</Typography>
				<Typography variant="h5" component="div" className='home'>
					{language === 10 ? "“Масс Теч” ХХК нь 2017 онд байгуулагдсан бөгөөд ионжуулагч цацрагийн үүсгүүр ашигладаг уул уурхай, аж үйлдвэр, цацраг идэвхт ашигт малтмал, эмнэлгийн оношлогоо эмчилгээ, зам, каротожийн судалгаа, гадаад орчин, хил гаалийн салбаруудад цацрагийн үүсгүүр, цацрагийн хэмжилтийн багаж тоног төхөөрөмж, цөмийн болон цацрагийн аюулгүй байдлыг хангах хамгаалалтын хувцас хэрэгслийг дэлхийд тэргүүлэх үйлдвэрлэгчдээс албан ёсны эрхтэйгээр нийлүүлэх, худалдаалах чиглэлээр үйл ажиллагаа эрхэлдэг компани юм. Манай компани нь эх орондоо болон гадаад улсуудад цөмийн технологи, цөмийн инженер, электроникийн чиглэлээр бакалавр, магистрын зэргээ хамгаалсан мэргэжлийн, мэргэшсэн боловсон хүчинтэй. Цөмийн технологийн салбарын материаллаг баазыг бэхжүүлэх, өндөр технологийг монгол улсад нутагшуулахад төрийн болон хувийн хэвшлийн байгууллагуудтай хамтран ажиллаж нийлүүлсэн бараа бүтээгдэхүүнийхээ чанар аюулгүй байдалд мэрэгжлийн заавар зөвөлгөө өгч, цацрагийн хэмжилтийн багаж тоног төхөөрөмжүүддээ сургалт явуулж, засвар үйчилгээ хийж, хамтран ажилладаг."
						: `Mass Tech LLC is Mongolia's leading company in the fields of radiation measurement equipment and engineering maintenance services. Founded in 2017, the company initially only focused on importing radiation measurement equipment and consulting service. Since that time, it has been growing steadily, and now become supplied of radiation, analytical laboratory, security and mining laboratory equipment.  
						Our customer-centered, holistic approach includes installation of supplied equipment and devices at required sites, conducting necessary trainings, providing consultation, routine maintenance and on-call engineering services to ensure equipment reliability, ensuring reliable product supplies, and ultimately creating customers satisfaction.  
						We are an energetic, experienced and friendly team of professionals, committed to serving our customers. `}
				</Typography>

			</Container>
		</HeroSection>
	);
};

export default Hero;
