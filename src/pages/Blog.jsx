import SubHeader from '../components/SubHeader';
import subHeaderImage from '../assets/bg-img/12.jpg';

const Blog = () => {
	return (
		<>
			<SubHeader
				current='Blog'
				image={subHeaderImage}
			/>
			<h1>Blog</h1>
		</>
	);
};

export default Blog;
