import React from 'react'

export const NextButton = ({ onClick }) => {
	return (
		<button className="spring-btn spring-btn-rounded" onClick={onClick}>
			<svg fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 306 306">
				<g id="chevron-right">
					<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
				</g>
			</svg>
		</button>
	);
};
export const PrevButton = ({ onClick }) => {
	return (
		<button className="spring-btn spring-btn-rounded" onClick={onClick}>
			<svg
				x="0px"
				fill="white"
				y="0px"
				width="20px"
				height="20px"
				viewBox="0 0 306 306"
				style={{ transform: 'rotate(180deg)' }}
			>
				<g id="chevron-right">
					<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
				</g>
			</svg>
		</button>
	);
};