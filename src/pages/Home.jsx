import { Container, Row, Col } from 'reactstrap';
import Hero from '../components/Hero';

const Home = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Hero />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
