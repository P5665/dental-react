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
					{firstArticles.map(({ firstArticle: { title, date, image, commentsCount, bodyHtml } }, index) => (
						<Col
							key={index}
							sm={`6 ${firstArticles.length - 1 === index && index % 2 !== 0 ? ' offset-sm-3 ' : ' offset-sm-0'}`}
							md='4 offset-md-0'
							className='d-flex align-items-stretch mb-4'
						>
							<Card>
								<div className='card-img-wrapper'>
									<CardImg
										top
										alt='Sample'
										src={image}
										className='img-fluid '
									/>
								</div>

								<CardBody>
									<CardTitle className='fs-5 text-gray fw-semibold'>{title}</CardTitle>
									<CardText className='display-4 text-dark-gray d-flex flex-column'>
										<div
											className='text-truncate'
											dangerouslySetInnerHTML={{ __html: bodyHtml }}
										></div>
										<p className='mb-auto d-flex'>
											<div>
												<i className='icon_clock_alt elegant-icon text-primary'></i> &nbsp;
												{formatDate(date)}
											</div>
											<div className='ms-auto'>
												<i className='icon_chat_alt elegant-icon text-primary'></i> &nbsp;
												{commentsCount}
											</div>
										</p>
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
