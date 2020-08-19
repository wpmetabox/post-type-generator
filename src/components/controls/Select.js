import React from 'react';

const Select = ( {label, name, update, description = '', values, defaultValue} ) => {
	return (
		<div className="ptg-field">
			<label className="ptg-label" htmlFor={name}>{label}</label>
			<div className="ptg-input">
				<select id={name} name={name} options={values} defaultValue={defaultValue} isSearchable onChange={update}>
					{values.map(value => <option value={value.value}>{value.label}</option>)}
				</select>
				{description && <div className="ptg-description">{description}</div>}
			</div>
		</div>
	)
}

export default Select;