import { Container, Row, Col } from 'reactstrap';
import { dentistList } from '../../constants';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OurDentists = ({ dentistsList, heading, colorBackground }) => {
	const dentistsArray = dentistsList ? dentistsList : dentistList; // Use json if exists otherwise use local
	return (
		<section className={`${heading ? 'section' : 'mt-5'}`}>
			<Container>
				<Row>
					{heading && (
						<Col xs='12'>
							<h2 className='section-heading text-gray text-center'>Our Dentists</h2>
							<div className='line mx-auto mb-5'></div>
						</Col>
					)}
					{dentistsArray.map((dentist, index) => (
						<Col
							key={index}
							className={`mb-4 px-3`}
							xs='8 offset-2'
							// Center last odd dentist
							sm={`6 ${dentistsArray.length - 1 === index && dentist.id % 2 !== 0 ? ' offset-sm-3 ' : ' offset-sm-0'}`}
							md='4 offset-md-0'
						>
							<motion.div
								whileHover={{
									scale: 1.1,
									boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
								}}
							>
								<Link
									to={'/dentists/' + dentist.name.replace(/\s/, '-').toLowerCase()}
									className='position-relative d-inline-flex overflow-hidden'
								>
									<img
										src={dentist.image}
										alt=''
										className={`${colorBackground ? colorBackground : 'bg-light'} img-fluid h-auto`}
									/>
									<div className='footer-image-overlay d-flex flex-column align-items-center justify-content-center py-2 py-md-3'>
										<h5 className='hs-5 text-white mb-1 fw-semibold'>{dentist.name}</h5>
										<p className='display-4 text-white  mb-0'>{dentist.expertise}</p>
									</div>
								</Link>
							</motion.div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default OurDentists;
