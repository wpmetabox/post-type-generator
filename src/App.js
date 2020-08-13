import React from 'react';
import Input from './components/controls/Input';
import Textarea from './components/controls/Textarea';
import { BasicSettings } from './constants/Data';

class App extends React.Component {
	render() {
		const renderControl = ( key, type, label, name, placeholder, required ) => {
			switch (type) {
				case 'text':
					return <Input key={key} label={label} name={name} placeholder={placeholder} required={required} />
				case 'textarea':
					return <Textarea key={key} label={label} name={name} placeholder={placeholder} required={required} />
				default:
					break;
			}
		}

		return (
			<section className="cpt-basic-setting">
				<h2>Basic Settings</h2>
				{
					Object.keys( BasicSettings ).map( ( key ) =>
						renderControl( key, BasicSettings[key].type, BasicSettings[key].label, BasicSettings[key].name, BasicSettings[key].placeholder, BasicSettings[key].required )
					)
				}
			</section>
		);
	}
}

export default App;