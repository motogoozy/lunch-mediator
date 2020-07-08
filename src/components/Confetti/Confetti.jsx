import React from 'react';
import './Confetti.scss';

export default function Confetti(props) {
	const createConfetti = () => {
		let divArr = [];
		for (let i = 0; i < 149; i++) {
			const className = `confetti-${i}`;
			divArr.push(
				<div className={className}></div>
			)
		}
		return divArr;
	};

	return (
		<div className='confetti'>
			{ createConfetti() }
			{ props.children }
		</div>
	)
}
