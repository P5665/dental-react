import { Row, Col } from 'reactstrap';

const GenericServicesListItem = ({ service }) => {
	return (
		<>
			<Row
				key={service.id}
				className='g-0 my-1'
			>
				<Col className='col-12 col-sm-8'>
					<div className=' d-flex flex-column  h-100 px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>
						<div className='flex-fill'>
							{service.name}
							<div className='display-6 mt-2 d-block d-sm-none'>
								<span>
									${service.price}.00 / {service.stage}
								</span>
							</div>
						</div>
					</div>
				</Col>
				<Col className='col-3 col-sm-2 d-none d-sm-block'>
					<div className='ms-1 d-flex flex-column  h-100 px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>
						<div className='flex-fill d-flex align-items-center '>{service.stage}</div>
					</div>
				</Col>
				<Col className='col-3 col-sm-2 d-none d-sm-block'>
					<div className='ms-1 d-flex flex-column  h-100 px-3 ps-md-4 py-3 display-4 bg-light fw-semibold text-dark-gray'>
						<div className='flex-fill d-flex align-items-center '>${service.price}.00</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default GenericServicesListItem;
