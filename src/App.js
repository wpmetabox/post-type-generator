import React, { useState } from 'react';
import PhpSettings from './contexts/PhpSettings';
import DefaultSettings from './constants/DefaultSettings';
import { BasicSettings, LabelSettings, Taxonomies } from './constants/Data';
import Control from './components/controls/Control';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import PhpCode from './constants/PhpCode';

const App = () => {
	const [state, setState] = useState( DefaultSettings );

	return (
		<PhpSettings.Provider value={[state, setState]}>
			<div className="cpt-basic-setting">
				<div className="col-left">
					<h2>Basic Settings</h2>
					{
						Object.keys( BasicSettings ).map( ( key ) =>
							<Control key={key} props={BasicSettings[key]} />
						)
					}
				</div>

				<div className="col-right">
					<h2>Default Taxonomies</h2>
					{
						Object.keys( Taxonomies ).map( ( key ) =>
							<Control key={key} props={Taxonomies[key]} />
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
						<Control key={key} props={LabelSettings[key]} />
					)
				}
				</TabPanel>
				<TabPanel>
					<h2>Any content</h2>
				</TabPanel>
				<TabPanel>
					<CopyBlock
						text={PhpCode( state )}
						language={'php'}
						showLineNumbers={true}
						theme={dracula}
						wrapLines={true}
						codeBlock
						/>
				</TabPanel>
			</Tabs>
		</PhpSettings.Provider>
	);
}

export default App;