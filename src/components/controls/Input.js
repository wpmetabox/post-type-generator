import React from 'react';
import DivRow from '../elements/DivRow';

const Input = ( {name, placeholder, ...rest} ) => (
	<DivRow htmlFor={name} {...rest}>
		<input type="text" id={name} name={name} placeholder={placeholder} />
	</DivRow>
)

export default Input;