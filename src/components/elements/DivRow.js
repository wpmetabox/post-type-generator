import React from 'react';

const DivRow = ( {label, children, description = '', required = false} ) => {
	return (
		<div className="row">
			<label>
				{label}
				{required && <span className="required">*</span>}
			</label>
			<div>
				{children}
				{description && <p className="description">{description}</p>}
			</div>
		</div>
	)
}

export default DivRow;