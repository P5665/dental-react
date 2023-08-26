import { Container, Row, Col } from 'reactstrap';
import { serviceSummary } from '../../constants';

const ServicesSummary = () => {
	const { bgImg, videoImg, services } = serviceSummary;
	const togglePrimaryColor = (event) => {
		// Pass - Change the white icon images to blue on mouseover and the text below
	};

	return (
		<section className='services-summary section overlay'>
			<Container className=''>
				<Row className='justify-content-center align-items-center'>
					<Col
						lg='6'
						className='d-flex align-items-center'
					>
						<Row>
							<Col
								xs='10 offset-1'
								sm='12 offset-sm-0'
							>
								<h2 className='section-heading text-white'>Our Services</h2>
								<div className='line mb-5'></div>
							</Col>
							{services.map((service, index) => (
								<Col
									key={index}
									xs='6'
									sm='4'
									className='d-flex flex-column align-items-center justify-content-center py-4 py-sm-3'
								>
									<div>
										<img
											src={service.image}
											alt=''
											className='img-fluid pb-2'
										/>
									</div>
									<div className='mt-auto text-white text-center display-4'>{service.text}</div>
								</Col>
							))}
						</Row>
					</Col>
					<Col
						lg='6'
						className='d-flex justify-content-center mt-5 mt-lg-0'
					>
						<Row>
							<Col xs='10 offset-1'>
								<img
									src={videoImg}
									alt=''
									className='img-fluid'
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ServicesSummary;
