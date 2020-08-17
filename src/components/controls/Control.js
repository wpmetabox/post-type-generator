import React, { useContext } from 'react';
import PhpSettings from '../../contexts/PhpSettings';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Dropdown from './Dropdown';

const Control = ( {props} ) => {
	const [state, setState] = useContext( PhpSettings );

	const handleUpdate = e => {
		const name = e.target.name;
		let value;

		switch ( e.target.type ) {
			case 'checkbox':
				value = e.target.checked;
				break;
			default:
				value = e.target.value;
				break;
		}

		setState( state => ( {...state, [name]: value} ) )
	}

	const handleSelect = e => {
		const name  = e.name;
		const value = e.value;

		setState( state => ( {...state, [name]: value} ) )
	}

	switch (props.type) {
		case 'text':
			return <Input label={props.label} name={props.name} placeholder={props.placeholder} description={props.description} required={props.required} update={handleUpdate} />
		case 'textarea':
			return <Textarea label={props.label} name={props.name} placeholder={props.placeholder} description={props.description} update={handleUpdate} />
		case 'checkbox':
			return <Checkbox label={props.label} name={props.name} description={props.description} update={handleUpdate} checked={props.checked} />
		case 'radio':
			return <Radio label={props.label} name={props.name} values={props.values} defaultValue={props.defaultValue} update={handleUpdate} />
		case 'select':
			return <Dropdown label={props.label} name={props.name} description={props.description} values={props.values} defaultValue={props.defaultValue} update={handleSelect} />
		default:
			break;
	}
}

export default Control;