import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const AnimatedAboutSummaryStats = ({ stat: { icon, text, value, plus, durationTime } }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (isInView) {
			const interval = setInterval(() => {
				if (count < value) {
					setCount((prevCount) => prevCount + 1);
				} else {
					clearInterval(interval);
				}
			}, durationTime);

			return () => clearInterval(interval);
		}
	}, [isInView, count]);

	return (
		<div>
			<i className={`${icon} elegant-icon`}> </i>
			<motion.div
				className='display-2 fw-semibold text-gray mt-3 mb-2'
				// animate={{ number: count }}
				// transition={{ duration: durationTime, ease: 'easeInOut' }}
				ref={ref}
			>
				{count}
				{plus ? '+' : ''}
			</motion.div>
			<div className='display-4 text-gray fw-semibold text-center'>{text}</div>
		</div>
	);
};

export default AnimatedAboutSummaryStats;
