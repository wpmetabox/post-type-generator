import React, { useState } from 'react';
import PhpSettings from './contexts/PhpSettings';
import DefaultSettings from './constants/DefaultSettings';
import { BasicDatas, LabelDatas, TaxonomyDatas, SupportDatas, AdvancedDatas } from './constants/Data';
import Control from './components/controls/Control';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CopyBlock, dracula } from 'react-code-blocks';
import PhpCode from './constants/PhpCode';

const App = () => {
	const [state, setState] = useState( DefaultSettings );

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
					{ Object.keys( BasicDatas ).map( key => <Control key={key} props={BasicDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( LabelDatas ).map( key => <Control key={key} props={LabelDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( AdvancedDatas ).map( key => <Control key={key} props={AdvancedDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( SupportDatas ).map( key => <Control key={key} props={SupportDatas[key]} /> ) }
				</TabPanel>
				<TabPanel>
					{ Object.keys( TaxonomyDatas ).map( key => <Control key={key} props={TaxonomyDatas[key]} /> ) }
				</TabPanel>
			</Tabs>

			<button>Generate Code</button>
			<CopyBlock text={PhpCode( state )} language={'php'} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
		</PhpSettings.Provider>
	);
}

export default App;