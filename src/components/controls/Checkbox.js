import React, { useState } from 'react';

const Checkbox = ( {label, name, update, checked} ) => {
	const [isChecked, updateCheck] = useState( checked );

	const handleClick = () => {
		updateCheck( ! isChecked );
	}

	return (
		<label className="checkbox">
			<input type="checkbox" id={name} name={name} checked={isChecked} onChange={update} onClick={handleClick} />
			{label}
		</label>
	)
}

export default Checkbox;