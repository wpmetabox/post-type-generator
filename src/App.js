import React, {forwardRef} from 'react';
import Input from './components/controls/Input';
import Textarea from './components/controls/Textarea';
import { BasicSettings } from './constants/Data';
import { CopyBlock, dracula } from "react-code-blocks";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			label_name         : '',
			label_singular_name: '',
			args_post_type     : '',
			function_name      : '',
			text_domain        : ''
		};
	
		this.updateState = this.updateState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateState(e) {
		this.setState( {[e.target.name]: e.target.value} );
	}

	handleSubmit(e) {
		e.preventDefault();
	}
	
	render() {
		const renderControl = ( key, type, label, name, placeholder, required ) => {
			switch (type) {
				case 'text':
					return <Input key={key} label={label} name={name} placeholder={placeholder} required={required} update={this.updateState} />
				case 'textarea':
					return <Textarea key={key} label={label} name={name} placeholder={placeholder} required={required} />
				default:
					break;
			}
		}

		return (
			<form onSubmit={this.handleSubmit}>
				<section className="cpt-basic-setting">
					<h2>Basic Settings</h2>
					{
						Object.keys( BasicSettings ).map( ( key ) =>
							renderControl( key, BasicSettings[key].type, BasicSettings[key].label, BasicSettings[key].name, BasicSettings[key].placeholder, BasicSettings[key].required )
						)
					}
				</section>
				<button type="submit">Generate Code</button>

				<section>
					<CopyBlock
						text={`<?php
						echo "Hello World!";
					  ?>
					  `}
						language={'php'}
						showLineNumbers={true}
						theme={dracula}
						wrapLines={true}
						codeBlock
						/>
				</section>
			</form>
		);
	}
}

export default App;