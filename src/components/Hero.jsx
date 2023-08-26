import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, Button } from 'reactstrap';
import { heroImages } from '../constants';
import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeInText from '../animations/FadeInText';

function Hero(args) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === heroImages.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? heroImages.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = heroImages.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
				className='position-relative'
			>
				<motion.img
					src={item.src}
					alt={item.altText}
					style={{ translateY: activeIndex === item.id ? 0 : -50 }}
					transition={{ duration: 0.5 }}
				/>
				<div className='hero-overlay'>
					<div className='w-75'>
						{activeIndex === item.id && (
							<FadeInText>
								<h1 className='mb-4 display-1 fw-semibold'>{item.slideHeader}</h1>
								<p className='fs-5'>{item.slideBody}</p>
								<div className='mt-5 d-flex justify-content-center align-items-center'>
									<Button
										className='me-3 bg-opacity-100'
										color='primary'
									>
										Get Started
									</Button>
									<Button
										color='primary'
										outline={true}
									>
										Contact Us
									</Button>
								</div>
							</FadeInText>
						)}
					</div>

					{/* <CarouselCaption
						captionText={item.caption}
						captionHeader={item.caption}
					/> */}
				</div>
			</CarouselItem>
		);
	});

	return (
		<Container
			fluid
			className='px-0 hero-carousel'
		>
			<Row>
				<Col>
					<Carousel
						activeIndex={activeIndex}
						next={next}
						previous={previous}
						{...args}
						interval={10000}
					>
						<CarouselIndicators
							items={heroImages}
							activeIndex={activeIndex}
							onClickHandler={goToIndex}
						/>
						{slides}
						<CarouselControl
							direction='prev'
							directionText='Previous'
							onClickHandler={previous}
						/>
						<CarouselControl
							direction='next'
							directionText='Next'
							onClickHandler={next}
						/>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
}

export default Hero;
