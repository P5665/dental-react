import { Container, Row, Col, Progress } from 'reactstrap';
import { motion, progress } from 'framer-motion';
import AnimatedProgressBar from './AnimatedProgressBar';
import { aboutSummary } from '../../constants';
import AnimatedAboutSummaryStats from './AnimatedAboutSummaryStats';

const AboutSummary = () => {
	const { image, altText, bodyText, progressBars, stats } = aboutSummary;

	return (
		<section className='about-summary section'>
			<Container>
				<Row>
					<Col
						xs='8 offset-2'
						md='6 offset-md-0'
						className='d-flex justify-content-center align-items-center'
					>
						<img
							src={image}
							alt={altText}
							className='img-fluid p-lg-5'
						/>
					</Col>
					{/* AboutSummary Body */}
					<Col
						xs='10 offset-1'
						md='6 offset-md-0'
						className='pt-5 pt-md-0 d-flex flex-column justify-content-center'
					>
						<h2 className='section-heading text-gray'>About Us</h2>
						<div className='line mb-5'></div>
						<p className='text-dark-gray'>{bodyText}</p>

						<div className='mt-2'>
							{progressBars.map((bar, index) => (
								<AnimatedProgressBar
									key={index}
									text={bar.text}
									value={bar.value}
									maxValue={bar.maxValue}
								/>
							))}
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<hr className='my-5' />
					</Col>
				</Row>
				{/* Stats Body */}
				<Row>
					{stats.map((stat, index) => (
						<Col
							key={index}
							xs='12'
							sm='6'
							md='3'
							className='d-flex flex-column justify-content-center align-items-center mb-5 mb-md-0'
						>
							<AnimatedAboutSummaryStats stat={stat} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default AboutSummary;
