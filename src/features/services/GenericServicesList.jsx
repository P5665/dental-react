import { Container, Row, Col, Button } from 'reactstrap';
import { priceSummary } from '../../constants';
import { Link } from 'react-router-dom';
import GenericServicesListHeader from './GenericServicesListHeader';
import GenericServicesListItem from './GenericServicesListItem';
import PrimaryNavButton from '../../components/PrimaryNavButton';

const GenericServicesList = ({ limit, isSummary }) => {
	const { serviceHeader, services } = priceSummary;
	return (
		<section className={`${isSummary ? 'pricing-section section' : 'py-3'}`}>
			<Container>
				{/* Header */}
				<div className={`${isSummary ? 'd-block' : 'd-none'}`}>
					<h2 className='section-heading text-gray text-center'>Pricing</h2>
					<div className='line mb-5 mx-auto'></div>
				</div>
				{/* Table Header */}
				<GenericServicesListHeader serviceHeader={serviceHeader} />
				{services.map((service, index) => {
					if (!limit || index < limit) {
						return (
							<GenericServicesListItem
								service={service}
								key={index}
							/>
						);
					}
				})}
				{/* Button -> Pricing */}
				<Row className={`${isSummary ? 'd-block text-center' : 'd-none'}`}>
					<Col
						xs='12'
						className='text-center mt-5'
					>
						<PrimaryNavButton
							url='/pricing'
							buttonText='Read more &gt; &gt;'
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default GenericServicesList;
