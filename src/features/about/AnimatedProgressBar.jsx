import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedProgressBar = ({ text, value, maxValue }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {}, [isInView]);

	return (
		<>
			<div className='d-flex justify-content-between text-gray fw-semibold mt-4 mb-2'>
				<div>{text}</div>
				<div>{value}%</div>
			</div>

			<div
				className='progress mb-3 rounded-0 bg-light-gray '
				role='progressbar'
				aria-valuenow={value}
				aria-valuemin='0'
				aria-valuemax={maxValue}
				style={{ height: '10px' }}
				ref={ref}
			>
				<motion.div
					animate={{ width: isInView ? `${value}%` : '0%' }} // Start animation when in view.
					transition={{ delay: 0.01, duration: 0.5 }}
					className='progress-bar bg-primary'
				></motion.div>
			</div>
		</>
	);
};

export default AnimatedProgressBar;
