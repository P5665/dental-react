import { Container, Row, Col, Button } from 'reactstrap';
import { priceSummary } from '../../constants';
import { Link } from 'react-router-dom';

const PricingSummary = () => {
	const { serviceHeader, services } = priceSummary;

	return (
		<section className='pricing-summary section'>
			<Container>
				<Row>
					<Col>
						<h2 className='section-heading text-gray text-center'>Pricing</h2>
						<div className='line mb-5 mx-auto'></div>
						<Row className='g-0'>
							{serviceHeader.map((header, index) => (
								<Col
									key={index}
									className={`${index === 0 ? 'col-12 col-sm-8' : 'd-none d-sm-block col-3 col-sm-2'}`}
								>
									<div className={`${index === 0 ? '' : 'ms-1'} bg-primary text-white px-3 ps-md-4 py-3 display-4 fw-semibold`}>{header}</div>
								</Col>
							))}
						</Row>
						{services.map((service) => (
							<Row
								key={service.id}
								className='g-0 my-1 d-flex align-items-stretch'
							>
								<Col className='col-12 col-sm-8'>
									<div className='px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>
										{service.name}
										<div className='display-6 mt-2 d-block d-sm-none'>
											<span>
												${service.price}.00 / {service.stage}
											</span>
										</div>
									</div>
								</Col>
								<Col className='col-3 col-sm-2 d-none d-sm-block'>
									<div className='ms-1 px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>{service.stage}</div>
								</Col>
								<Col className='col-3 col-sm-2 d-none d-sm-block'>
									<div className='ms-1 px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>${service.price}.00</div>
								</Col>
							</Row>
						))}
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							color='primary'
							className='mt-5 d-block mx-auto'
						>
							Read More &gt;&gt;
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default PricingSummary;
