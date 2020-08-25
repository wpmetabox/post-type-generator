import React, { useContext, useState } from 'react';
import PhpSettings from '../contexts/PhpSettings';
import Highlight from 'react-highlight';
import Clipboard from 'react-clipboard.js';
import PhpCode from '../constants/PhpCode';

const Result = () => {
	const [state, setState] = useContext( PhpSettings );

	const [copied, setCopied] = useState( false );
	const copy = () => {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1000 );
	}

	return (
		<div className="ptg-result">
			<div className="alert alert-info">
				Copy the code and paste into your theme's <code>functions.php</code> file. Wanna more features or use inside the WordPress admin?
				<a href="https://metabox.io/pricing/" target="_blank" rel="noopener noreferrer"> Become a premium user</a>.
			</div>

			<div className="ptg-result__body">
				<Highlight className="php">{PhpCode( state )}</Highlight>
				<Clipboard title="Click to copy the code" data-clipboard-text={PhpCode( state )} onSuccess={copy}>{copied ? 'Copied' : 'Copy'}</Clipboard>
			</div>
		</div>
	);
}

export default Result;