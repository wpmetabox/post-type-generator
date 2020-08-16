import React, { useState } from 'react';

const Checkbox = ( {label, name, description, update, checked} ) => {
	const [isChecked, updateCheck] = useState( checked );

	const handleClick = () => {
		updateCheck( ! isChecked );
	}

	return (
		<label htmlFor={name} className="row">
			<div className="label" htmlFor={name}>
				{label && label}
			</div>
			<div className="row">
				<input type="checkbox" id={name} name={name} checked={isChecked} onChange={update} onClick={handleClick} />
				{description && <p className="description">{description}</p>}
			</div>
		</label>
	)
}

export default Checkbox;