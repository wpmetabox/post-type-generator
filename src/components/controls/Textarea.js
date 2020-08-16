import React from 'react';

const Textarea = ( {label, name, placeholder, update, description = '', required = false} ) => (
	<label htmlFor={name} className="row align-start">
		<div className="label">
			{label}
			{required && <span className="required">*</span>}
		</div>
		<div>
			<textarea id={name} name={name} placeholder={placeholder} onChange={update} />
			{description && <p className="description">{description}</p>}
		</div>
	</label>
)

export default Textarea;