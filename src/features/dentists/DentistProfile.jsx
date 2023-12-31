import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../../components/SubHeader';
import subHeaderImage from '../../assets/bg-img/12.jpg';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDentistByName } from './dentistsSlice';
import { Link } from 'react-router-dom';
import PrimaryNavButton from '../../components/PrimaryNavButton';

const DentistProfile = () => {
	const { name } = useParams();
	const dentist = useSelector(selectDentistByName(name));
	const { title, name: dentistName, nickname, intro, specialty, image, bio, education, catchphrase, services, fun } = dentist;
	return (
		<>
			<SubHeader
				current={name.replace(/-/, ' ')}
				image={subHeaderImage}
			/>
			<Container className='section pt-5'>
				<Row>
					<Col
						xs='12'
						className=' text-center'
					>
						<h2>{intro}</h2>
						<div className='line mb-3 mx-auto'></div>
					</Col>
					<Col
						xs='10 offset-1'
						lg='6 offset-lg-0'
						className='d-flex justify-content-center'
					>
						<img
							src={image}
							alt=''
							className='img-fluid h-75 align-self-center'
						/>
					</Col>
					<Col
						xs='12'
						lg='6 '
					>
						<h3 className='mt-lg-5 mt-lg-0'>
							{title} {dentistName.split(/\s/)[0]} <i>"{nickname}" </i>
							{dentistName.split(/\s/)[1]}
						</h3>
						<p className='mb-4'>{specialty}</p>
						<div
							className='p-5 text-white rounded-4'
							style={{ backgroundColor: '#2c455d' }}
						>
							<h4>Education:</h4>
							<ul className='mb-4'>
								{education.map((item, index) => (
									<li key={index}>
										<i>
											<strong className='me-1 text-decoration-underline'>{item.split(':')[0]}:</strong>
											{item.split(':')[1]}
										</i>
									</li>
								))}
							</ul>

							<h4>Fun Facts:</h4>
							<ul>
								{fun.map((item, index) => (
									<li key={index}>
										<i>
											<strong className='me-1 text-decoration-underline'>{item.split(':')[0]}:</strong>
											{item.split(':')[1]}
										</i>
									</li>
								))}
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='bg-light section'>
				<Container>
					<Row className='justify-content-center'>
						<Col sm='10 offset-sm-1'>
							<h4>Services:</h4>
							<ul>
								{services.map((item, index) => (
									<li key={index}>
										<i>
											<strong>{item.split(':')[0]}:</strong>
											{item.split(':')[1]}
										</i>
									</li>
								))}
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
			<Container className='section'>
				<Row>
					<Col md='8 offset-md-2'>
						<div className='text-center'>
							<i>"{catchphrase}"</i>
						</div>
					</Col>
					<Col
						xs='12'
						className='text-center mt-5'
					>
						<PrimaryNavButton />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default DentistProfile;
