import React from 'react';

const Input = ( {label, name, placeholder, update, description = '', required = false} ) => {
	return (
		<label htmlFor={name} className="ptg-row">
			<div className="ptg-label">
				{label}
				{required && <span className="ptg-required">*</span>}
			</div>
			<div>
				<input type="text" id={name} name={name} placeholder={placeholder} onChange={update} />
				{description && <p className="ptg-description"><i>{description}</i></p>}
			</div>
		</label>
	)
}

export default Input;