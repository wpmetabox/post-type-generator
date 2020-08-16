import React, { useContext } from 'react';
import PhpSettings from '../../contexts/PhpSettings';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';

const Control = ( {props} ) => {
	const [state, setState] = useContext( PhpSettings );

	const updateText = e => {
		const name = e.target.name;
		const value = e.target.value;

		setState( state => ( {...state, [name]: value} ) )
	}

	const updateCheck = e => {
		const name = e.target.name;
		const value = e.target.checked;

		setState( state => ( {...state, [name]: value} ) )
	}

	const updateRadio = e => {
		const name = e.target.name;
		const value = e.target.value;

		setState( state => ( {...state, [name]: value} ) )
	}

	switch (props.type) {
		case 'text':
			return <Input label={props.label} name={props.name} placeholder={props.placeholder} required={props.required} update={updateText} />
		case 'textarea':
			return <Textarea label={props.label} name={props.name} placeholder={props.placeholder} update={updateText} />
		case 'checkbox':
			return <Checkbox label={props.label} name={props.name} description={props.description} update={updateCheck} checked={props.checked} />
		case 'radio':
			return <Radio label={props.label} name={props.name} values={props.values} defaultValue={props.defaultValue} update={updateRadio} />
		default:
			break;
	}
}

export default Control;