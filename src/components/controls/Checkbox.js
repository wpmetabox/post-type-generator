import React, { useState } from 'react';

const Checkbox = ( {label, name, description, update, checked} ) => {
	const [isChecked, updateCheck] = useState( checked );

	const handleClick = () => {
		updateCheck( ! isChecked );
	}

	return (
		<label htmlFor={name} className="ptg-row">
			{label && <div className="ptg-label" htmlFor={name}>{label}</div>}
			<div className="ptg-row">
				<input type="checkbox" id={name} name={name} checked={isChecked} onChange={update} onClick={handleClick} />
				{description && <p className="ptg-description">{description}</p>}
			</div>
		</label>
	)
}

export default Checkbox;