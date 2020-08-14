import React from 'react';
import Input from './components/controls/Input';
import Textarea from './components/controls/Textarea';
import { BasicSettings, LabelSettings } from './constants/Data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import PhpCode from './constants/PhpCode';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// Basic
			name          : '',
			singular_name : '',
			args_post_type: '',
			function_name : '',
			text_domain   : '',

			// Labels
			menu_name         : '',
			name_admin_bar    : '',
			add_new           : '',
			add_new_item      : '',
			new_item          : '',
			edit_item         : '',
			view_item         : '',
			update_item       : '',
			all_items         : '',
			search_items      : '',
			parent_item_colon : '',
			not_found         : '',
			not_found_in_trash: '',

			// Advanced


			phpcode           : '',
		};

		this.updateState = this.updateState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateState(e) {
		this.setState( {[e.target.name]: e.target.value} );
	}

	handleSubmit(e) {
		const code = new PhpCode( this.state.name );
		this.setState( {phpcode: code.getCode()} );

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
				<div className="col-left">
					<div className="cpt-basic-setting">
						<h2>Basic Settings</h2>
						{
							Object.keys( BasicSettings ).map( ( key ) =>
								renderControl( key, BasicSettings[key].type, BasicSettings[key].label, BasicSettings[key].name, BasicSettings[key].placeholder, BasicSettings[key].required )
							)
						}
					</div>

					<Tabs>
						<TabList>
							<Tab><h2>Advanced Settings</h2></Tab>
							<Tab><h2>Label Settings</h2></Tab>
							<Tab><button type="submit">Generate Code</button></Tab>
						</TabList>

						<TabPanel>
							<h2>Any content</h2>
						</TabPanel>
						<TabPanel>
						{
							Object.keys( LabelSettings ).map( ( key ) =>
								renderControl( key, LabelSettings[key].type, LabelSettings[key].label, LabelSettings[key].name, LabelSettings[key].placeholder, LabelSettings[key].required )
							)
						}
						</TabPanel>
						<TabPanel>
							<CopyBlock
								text={this.state.phpcode}
								language={'php'}
								showLineNumbers={true}
								theme={dracula}
								wrapLines={true}
								codeBlock
								/>
						</TabPanel>
					</Tabs>
				</div>

				<div className="col-right">
					<div className="cpt-support">
						<h2>Supports</h2>
					</div>
					<div className="cpt-taxonomy">
						<h2>Default Taxonomies</h2>

					</div>
				</div>
			</form>
		);
	}
}

export default App;