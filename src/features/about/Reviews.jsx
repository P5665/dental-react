import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import { useState } from 'react';
import { reviews } from '../../constants';

const Reviews = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === reviews.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? reviews.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = reviews.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.id}
			>
				<Row>
					<Col
						xs='8 offset-2'
						md='3 offset-md-1'
						className='d-flex align-items-center justify-content-center'
					>
						<img
							src={item.image}
							className='img-fluid rounded-circle '
							alt=''
						/>
					</Col>
					<Col
						xs='8 offset-2'
						md='6 offset-md-0'
						className='mt-4 mt-md-0 d-flex flex-column justify-content-center text-white'
					>
						<p className='fs-5 fst-italic'>{item.bodyText}</p>
						<h6 className='fs-6'>{item.name}</h6>
						<div className='display-4'>{item.affiliation}</div>
					</Col>
				</Row>
			</CarouselItem>
		);
	});

	return (
		<section className=' '>
			<Container
				fluid
				className='position-relative reviews section'
			>
				<Row>
					<Col>
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}
							interval={10000}
						>
							<CarouselIndicators
								items={reviews}
								activeIndex={activeIndex}
								onClickHandler={goToIndex}
								className='mb-auto'
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
		</section>
	);
};

export default Reviews;
