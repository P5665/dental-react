import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../constants';
import PrimaryNavButton from '../../components/PrimaryNavButton';

const Service = ({ service: { service, header, image, description, inclusions }, order }) => {
	const { phone } = contactInfo.phoneInfo;
	return (
		<Row className='service'>
			<Col>
				<div className='shadow my-5'>
					<Row>
						<Col
							xs='12'
							md='6'
							className={`${order} d-flex justify-content-center align-items-center card-img-wrapper `}
						>
							<img
								src={image}
								alt=''
							/>
						</Col>
						<Col
							xs='12'
							md='6'
							className='d-flex flex-column p-5'
						>
							<h3 className='text-center'>{header}</h3>
							<div className='line mb-3 mb-md-5 mx-auto'></div>
							<p className='text-dark-gray'>{description}</p>
							<ul className='mb-4'>
								{inclusions.map((item) => (
									<li
										key={item}
										className='pb-2 text-gray fw-semibold display-4'
									>
										<i>{item}</i>
									</li>
								))}
							</ul>
							<div className='d-lg-flex align-items-center'>
								<PrimaryNavButton
									buttonText='book now'
									buttonStyles='me-3'
								/>
								<a href={`tel:${phone}`}>
									<PrimaryNavButton
										buttonText='Call now'
										noLink
									/>
								</a>
							</div>
						</Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
};

export default Service;
