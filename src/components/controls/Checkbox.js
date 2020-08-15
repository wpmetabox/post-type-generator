import React from 'react';

const Checkbox = ( {label, name, update} ) => {
	return (
		<label className="checkbox">
			<input type="checkbox" id={name} name={name} onChange={update} />
			{label}
		</label>
	)
}

export default Checkbox;