import React, { useState } from 'react';
import PhpSettings from './contexts/PhpSettings';
import DefaultSettings from './constants/DefaultSettings';
import { BasicDatas, LabelDatas, TaxonomyDatas, SupportDatas, AdvancedDatas } from './constants/Data';
import Control from './components/controls/Control';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Highlight from 'react-highlight';
import Clipboard from 'react-clipboard.js';
import PhpCode from './constants/PhpCode';

const App = () => {
	const [state, setState] = useState( DefaultSettings );

	const showCodeBlock = () => {
		setState( state => ( {...state, show_code: true} ) )
	}

	const [copied, setCopied] = useState( false );
	const copy = () => {
		setCopied(true);
		setTimeout(() => setCopied( false ), 1000);
	}

	return (
		<PhpSettings.Provider value={[state, setState]}>
			<Tabs forceRenderTabPanel={true}>
				<TabList>
					<Tab>General</Tab>
					<Tab>Labels</Tab>
					<Tab>Advanced</Tab>
					<Tab>Supports</Tab>
					<Tab>Taxonomies</Tab>
				</TabList>

				<TabPanel>
					{ Object.keys( BasicDatas ).map( key => <Control key={key} props={BasicDatas[key]} targetUpdate={[...LabelDatas, ...BasicDatas]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( LabelDatas ).map( key => <Control key={key} props={LabelDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( AdvancedDatas ).map( key => <Control key={key} props={AdvancedDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					<Control name="supports" values={SupportDatas} props={SupportDatas} />
				</TabPanel>
				<TabPanel>
					<Control name="taxonomies" values={TaxonomyDatas} props={TaxonomyDatas} />
				</TabPanel>
			</Tabs>

			<button className="ptg-button" onClick={showCodeBlock}>Generate Code</button>

			{ 
				true === state.show_code &&
				<div className="ptg-result">
					<div className="alert alert-info">
						Copy the code and paste into your theme's <code>functions.php</code> file. Wanna more features or use inside the WordPress admin?
						<a href="https://metabox.io/pricing/" target="_blank" rel="noopener noreferrer">Become a premium user</a>.
					</div>

					<div className="ptg-result__body">
						<Highlight language='php'>{PhpCode( state )}</Highlight>
						<Clipboard title="Click to copy the code" data-clipboard-text={PhpCode( state )} onSuccess={copy}>{copied ? 'Copied' : 'Copy'}</Clipboard>
					</div>
				</div>
			}
		</PhpSettings.Provider>
	);
}

export default App;