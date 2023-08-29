import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { blogArticles } from '../../constants';
import { formatDate } from '../../utils/formatDate';

const NewsSummary = () => {
	const { articles } = blogArticles;
	const categories = Object.keys(blogArticles.articles);

	const firstArticles = categories.map((category) => {
		const articles = blogArticles.articles[category];
		const firstArticle = articles.find((article) => article.id === 1);
		return { category, firstArticle };
	});
	return (
		<section className='news-summary section'>
			<Container>
				<Row>
					<Col xs='12'>
						<h2 className='section-heading text-center text-gray'>The Latest News</h2>
						<div className='line text-center mb-5 mx-auto'></div>
					</Col>
					{firstArticles.map(({ firstArticle: { title, date, image, commentsCount, summaryText } }, index) => (
						<Col
							key={index}
							sm={`6 ${firstArticles.length - 1 === index && firstArticles.length % 2 !== 0 ? ' offset-sm-3 ' : ' offset-sm-0'}`}
							md='4 offset-md-0'
							className='d-flex align-items-stretch mb-4'
						>
							<Card className='border-0'>
								<div className='card-img-wrapper'>
									<CardImg
										top
										alt='Sample'
										src={image}
										className='img-fluid rounded-0'
									/>
								</div>

								<CardBody>
									<CardTitle className='fs-5 text-gray fw-semibold'>{title}</CardTitle>
									<CardText
										tag='div'
										className='display-4 text-dark-gray d-flex flex-column'
									>
										<div
											className='display-4 text-dark-gray lh-lg'
											// dangerouslySetInnerHTML={{ __html: bodyHtml }}
										>
											{/* Cutting summaryText to 200 characters */}
											{summaryText.substring(0, 150)} ...
										</div>
										<div className='mt-3 mb-auto d-flex text-dark-gray fw-lighter'>
											<div>
												<i className='icon_clock_alt elegant-icon text-primary'></i> &nbsp;
												{formatDate(date)}
											</div>
											<div className='ms-auto'>
												<i className='icon_chat_alt elegant-icon text-primary'></i> &nbsp;
												{commentsCount}
											</div>
										</div>
									</CardText>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default NewsSummary;
