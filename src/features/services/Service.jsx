import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../constants';
import PrimaryNavButton from '../../components/PrimaryNavButton';
import { useInView, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Service = ({ service: { service, header, image, description, inclusions }, order }) => {
	const { phone } = contactInfo.phoneInfo;
	const [isDataLoaded, setIsDataLoaded] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	// useEffect(() => {
	// 	console.log('🚀 ~ file: Service.jsx:15 ~ Service ~ isInView:', isInView);
	// 	if (service) {
	// 		setIsDataLoaded(true);
	// 		console.log('🚀 ~ file: Service.jsx:19 ~ Service ~ isInView:', isInView);
	// 	}
	// }, [isInView, service]);

	return (
		<Row
			className='service'
			ref={ref}
		>
			<Col>
				<motion.div
					className='shadow my-5'
					// initial={{ x: '100vw' }}
					// animate={{ x: isInView ? 0 : '-100vw' }}
					// transition={{ delay: 0.5, duration: 10 }}
					// ref={ref}
				>
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
				</motion.div>
			</Col>
		</Row>
	);
};

export default Service;
