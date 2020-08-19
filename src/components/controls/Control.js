import React, { useContext } from 'react';
import PhpSettings from '../../contexts/PhpSettings';
import Input from './Input';
import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Select from './Select';

const Control = ( {props} ) => {
	switch (props.type) {
		case 'text':
			return <Input label={props.label} name={props.name} placeholder={props.placeholder} description={props.description} required={props.required} />
		case 'textarea':
			return <Textarea label={props.label} name={props.name} placeholder={props.placeholder} description={props.description} />
		case 'checkbox':
			return <Checkbox label={props.label} name={props.name} description={props.description} checked={props.checked} />
		case 'radio':
			return <Radio label={props.label} name={props.name} values={props.values} defaultValue={props.defaultValue} />
		case 'select':
			return <Select label={props.label} name={props.name} description={props.description} values={props.values} defaultValue={props.defaultValue} />
		default:
			break;
	}
}

export default Control;