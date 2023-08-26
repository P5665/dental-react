import { useEffect } from 'react';
import { Progress } from 'reactstrap';
import { motion, useAnimation } from 'framer-motion';

const AnimatedProgressBar = ({ text, value, maxValue }) => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			width: `${(value / maxValue) * 100}%`,
			backgroundColor: '#00aeef',
		});
	}, [value, maxValue, controls]);

	return (
		<>
			<div className='d-flex justify-content-between text-gray fw-semibold mt-4 mb-2'>
				<div>{text}</div>
				<div>{value}%</div>
			</div>
			<Progress
				className='mb-3 rounded-0 bg-light-gray'
				initial={{ width: '0%' }}
				style={{ height: '10px' }}
				animate={controls}
				value={value}
				color='primary'
			/>
		</>
	);
};

export default AnimatedProgressBar;
