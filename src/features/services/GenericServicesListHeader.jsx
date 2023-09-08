import { Row, Col } from 'reactstrap';
import React from 'react';

const GenericServicesListHeader = ({ serviceHeader }) => {
	return (
		<Row className='g-0'>
			{serviceHeader.map((header, index) => (
				<Col
					key={index}
					className={`${index === 0 ? 'col-12 col-sm-8' : 'd-none d-sm-block  col-sm-2'}`}
				>
					<div className={`${index === 0 ? '' : 'ms-1'} bg-primary text-white px-3 ps-md-4 py-3 display-4 fw-semibold`}>{header}</div>
				</Col>
			))}
		</Row>
	);
};

export default GenericServicesListHeader;
