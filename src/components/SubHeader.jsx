import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail, image }) => {
	const backgroundImageStyle = {
		backgroundImage: `url(..${image})`,
	};

	const pathname = location.pathname;
	const pathSegments = pathname.split('/');
	return (
		<>
			<section
				className='subheader position-relative w-100'
				style={backgroundImageStyle}
			>
				<Container
					fluid
					className='global-overlay'
				>
					<Row className='align-items-center h-100'>
						<Col className='text-center text-white text-uppercase'>
							<h2>{current}</h2>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Container>
					<Row>
						<Col>
							<Breadcrumb className='mt-4'>
								<BreadcrumbItem>
									<Link
										className='link-gray fw-semibold text-decoration-none'
										to='/'
									>
										<i className='fa fa-home'></i> Home
									</Link>
								</BreadcrumbItem>
								{detail && (
									<BreadcrumbItem>
										<Link to='/directory'>Directory</Link>
									</BreadcrumbItem>
								)}
								{pathSegments.map(
									(path, index) =>
										index > 0 && (
											<BreadcrumbItem
												key={index}
												className='text-dark-gray text-capitalize'
												active
											>
												{path.replace(/-/, ' ')}
											</BreadcrumbItem>
										)
								)}
							</Breadcrumb>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default SubHeader;
