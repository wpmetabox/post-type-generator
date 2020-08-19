import React from 'react';
import Select from 'react-select'

const customStyles = {
	control: () => ({
		width: 400,
	} ),
}

const Dropdown = ( {label, name, update, description = '', values, defaultValue} ) => {
	return (
		<label className="ptg-row align-start">
			<div className="ptg-label">
				{label}
			</div>
			<div>
				<Select id={name} name={name} options={values} defaultValue={defaultValue} isSearchable onChange={update} />
				{description && <p className="ptg-description"><i>{description}</i></p>}
			</div>
		</label>
	)
}

export default Dropdown;