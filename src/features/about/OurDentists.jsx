import { Container, Row, Col } from 'reactstrap';
import { dentistList } from '../../constants';

const OurDentists = () => {
	const dentists = dentistList;
	return (
		<section className='section'>
			<Container>
				<Row>
					<Col xs='12'>
						<h2 className='section-heading text-gray text-center'>Our Dentists</h2>
						<div className='line mx-auto mb-5'></div>
					</Col>
					{dentists.map((dentist, index) => (
						<Col
							key={index}
							className={`mb-4 px-3`}
							xs='8 offset-2'
							// Center last odd dentist
							sm={`6 ${dentists.length - 1 === index && dentist.id % 2 !== 0 ? ' offset-sm-3 ' : ' offset-sm-0'}`}
							md='4 offset-md-0'
						>
							<div className='position-relative d-inline-flex overflow-hidden'>
								<img
									src={dentist.image}
									alt=''
									className='img-fluid bg-light h-auto'
								/>
								<div className='footer-image-overlay d-flex flex-column align-items-center justify-content-center py-2 py-md-3'>
									<h5 className='hs-5 text-white mb-1 fw-semibold'>{dentist.name}</h5>
									<p className='display-4 text-white  mb-0'>{dentist.expertise}</p>
								</div>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default OurDentists;
