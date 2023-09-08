import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Container, Row, Col } from 'reactstrap';
import { selectServicesByCategory } from './servicesSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Service from './Service';
import SubHeader from '../../components/SubHeader';
import subHeaderImage from '../../assets/bg-img/12.jpg';

const ServicesList = () => {
	const { category } = useParams();
	const categoryList = useSelector(selectServicesByCategory(category));
	return (
		<>
			<SubHeader
				current={category}
				image={subHeaderImage}
			/>
			<Container className='pt-3 pb-5 py-md-5'>
				{categoryList.map((service, index) => (
					<>
						<Service
							service={service}
							order={index % 2 === 0 ? 'order-first' : 'order-first order-lg-last'}
						/>
						<Row className={`${categoryList.length - 1 === index ? 'd-none' : ''}`}>
							<Col xs='10 offset-1'>
								<hr />
							</Col>
						</Row>
					</>
				))}
			</Container>
		</>
	);
};

export default ServicesList;
