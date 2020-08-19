import React from 'react';

const Textarea = ( {label, name, placeholder, update, description = '', required = false} ) => (
	<label htmlFor={name} className="ptg-row align-start">
		<div className="ptg-label">
			{label}
			{required && <span className="ptg-required">*</span>}
		</div>
		<div>
			<textarea id={name} name={name} placeholder={placeholder} onChange={update} />
			{description && <p className="ptg-description"><i>{description}</i></p>}
		</div>
	</label>
)

export default Textarea;