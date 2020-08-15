import React, { useContext } from 'react';
import DivRow from '../elements/DivRow';
import PhpSettings from '../../contexts/PhpSettings';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';

const Control = ( {props} ) => {
	const [state, setState] = useContext( PhpSettings );

	const updateText = e => {
		const name = e.target.name;
		const value = e.target.value;

		setState( state => ( {...state, [name]: value} ) )
	}

	const updateCheck = e => {
		const name = e.target.name;
		const value = ! state.name;

		setState( state => ( {...state, [name]: value} ) )
	}

	switch (props.type) {
		case 'text':
			return <Input label={props.label} name={props.name} placeholder={props.placeholder} required={props.required} update={updateText} />
		case 'textarea':
			return <Textarea label={props.label} name={props.name} placeholder={props.placeholder} update={updateText} />
		case 'checkbox':
			return <Checkbox label={props.label} name={props.name} update={updateCheck} />
		default:
			break;
	}
}

export default Control;