import React from 'react';
import DivRow from '../elements/DivRow';

const Textarea = ( {name, placeholder, ...rest} ) => (
	<DivRow htmlFor={name} {...rest}>
		<textarea id={name} name={name} placeholder={placeholder} />
	</DivRow>
)

export default Textarea;