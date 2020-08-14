import React from 'react';

const Checkbox = ( {label, name, update} ) => {
	return (
		<label>
			<input type="checkbox" id={name} name={name} onChange={update} />
			{label}
		</label>
	)
}

export default Checkbox;