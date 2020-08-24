import React, { useState } from 'react';
import PhpSettings from './contexts/PhpSettings';
import DefaultSettings from './constants/DefaultSettings';
import MainTabs from './components/MainTabs';
import Result from './components/Result';

const App = () => {
	const [state, setState] = useState( DefaultSettings );

	return (
		<PhpSettings.Provider value={[state, setState]}>
			<MainTabs />
			{ true === state.show_code && <Result /> }
		</PhpSettings.Provider>
	);
}

export default App;