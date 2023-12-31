import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectLegalByType } from '../features/legal/legalSlice';

const Legal = () => {
	const type = 'legal';
	const legalDocByType = useSelector(selectLegalByType(type));

	return (
		<>
			<SubHeader
				current='Legal'
				image={subHeaderImage}
			/>
			{/* Transform this and policy into a component */}
			<Container>
				<Row className='my-5'>
					{legalDocByType.map((doc, index) => (
						<Col
							key={index}
							xs='10 osset-1'
							md='8 offset-md-2'
						>
							<h2 className='text-center'>{doc.title}</h2>
							<div className='line mb-4 mb-md-5 mx-auto'></div>
							<div dangerouslySetInnerHTML={{ __html: doc.content }}></div>
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Legal;
