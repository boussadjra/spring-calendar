import { useState } from 'react';
import { useEffect } from 'react';

const usePosition = element => {
	const [position, setPosition] = useState('bottom');
	const [target, setTarget] = useState(element);
	useEffect(() => {
		if (target) {
			let rec = target.getBoundingClientRect();
			let _target = {
				bottom: rec.bottom,
				top: rec.top,
				left: rec.left,
				right: rec.right,
			};
			let pos = 'bottom';
			for (const field in _target) {
				if (_target[field] > _target[pos]) {
					setPosition(field);
				}
			}
		}
	}, [target]);

	return { position, setTarget };
};

export default usePosition;
