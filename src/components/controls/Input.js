import React from 'react';
import DivRow from '../elements/DivRow';

const Input = ( {name, placeholder, update, ...rest} ) => {
	return (
		<DivRow htmlFor={name} {...rest}>
			<input type="text" id={name} name={name} placeholder={placeholder} onChange={update} />
		</DivRow>
	)
}

export default Input;