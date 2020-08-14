import React from 'react';
import DivRow from '../elements/DivRow';

const Textarea = ( {name, placeholder, update, ...rest} ) => (
	<DivRow htmlFor={name} {...rest}>
		<textarea id={name} name={name} placeholder={placeholder} onChange={update} />
	</DivRow>
)

export default Textarea;