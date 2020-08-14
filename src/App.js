import React from 'react';
import Input from './components/controls/Input';
import Textarea from './components/controls/Textarea';
import { BasicSettings, LabelSettings, Taxonomies } from './constants/Data';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import PhpCode from './constants/PhpCode';
import Checkbox from './components/controls/Checkbox';

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

			// Taxonomies
			category: false,
			tag     : false,

			phpcode           : '',
		};

		this.updateText = this.updateText.bind(this);
		this.updateCheck = this.updateCheck.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateText(e) {
		this.setState( {[e.target.name]: e.target.value} );
	}

	updateCheck(e) {
		const name = e.target.name;
		this.setState( {[name]: ! this.state.[name]} );
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
					return <Input key={key} label={label} name={name} placeholder={placeholder} required={required} update={this.updateText} />
				case 'textarea':
					return <Textarea key={key} label={label} name={name} placeholder={placeholder} required={required} update={this.updateText} />
				case 'checkbox':
					return <Checkbox key={key} label={label} name={name} update={this.updateCheck} />
				default:
					break;
			}
		}

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="cpt-basic-setting">
					<div className="col-left">
						<h2>Basic Settings</h2>
						{
							Object.keys( BasicSettings ).map( ( key ) =>
								renderControl( key, BasicSettings[key].type, BasicSettings[key].label, BasicSettings[key].name, BasicSettings[key].placeholder, BasicSettings[key].required )
							)
						}
					</div>

					<div className="col-right">
						<h2>Default Taxonomies</h2>
						{
							Object.keys( Taxonomies ).map( ( key ) =>
								renderControl( key, Taxonomies[key].type, Taxonomies[key].label, Taxonomies[key].name, null, null )
							)
						}
					</div>
				</div>

				<Tabs>
					<TabList>
						<Tab><h2>Advanced Settings</h2></Tab>
						<Tab><h2>Label Settings</h2></Tab>
						<Tab><h2>Supports</h2></Tab>
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
						<h2>Any content</h2>
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
			</form>
		);
	}
}

export default App;