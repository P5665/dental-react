import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Container, Row, Col } from 'reactstrap';
import { selectServicesByCategory } from './servicesSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Service from './Service';

const ServicesList = () => {
	const { category } = useParams();
	const categoryList = useSelector(selectServicesByCategory(category));
	return (
		<Container>
			<Row>
				<Col>
					<h2 className='section-heading text-capitalize text-center'>{category}</h2>
					<div className='line mb-5 mx-auto'></div>
				</Col>
			</Row>
			{categoryList.map((service, index) => (
				<>
					<Service
						service={service}
						order={index % 2 === 0 ? 'order-first' : 'order-first order-md-last'}
					/>
					<Row className={`${categoryList.length - 1 === index ? 'd-none' : ''}`}>
						<Col xs='10 offset-1'>
							<hr />
						</Col>
					</Row>
				</>
			))}
		</Container>
	);
};

export default ServicesList;
