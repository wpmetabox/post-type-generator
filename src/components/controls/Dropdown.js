import React from 'react';
import Select from 'react-select'

const customStyles = {
	control: () => ({
		width: 400,
	} ),
}

const Dropdown = ( {label, name, update, description = '', values, defaultValue} ) => {
	return (
		<label className="row align-start">
			<div className="label">
				{label}
			</div>
			<div>
				<Select id={name} name={name} options={values} defaultValue={defaultValue} isSearchable onChange={update} />
				{description && <p className="description"><i>{description}</i></p>}
			</div>
		</label>
	)
}

export default Dropdown;