import { motion } from 'framer-motion';

const FadeInText = ({ children }) => {
	const fadeInVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
	};

	return (
		<motion.div
			initial='hidden'
			animate='visible'
			variants={fadeInVariants}
		>
			{children}
		</motion.div>
	);
};

export default FadeInText;
