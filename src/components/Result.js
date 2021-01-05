import React, { lazy, memo, Suspense, useContext, useState } from 'react';
import PhpCode from '../constants/PhpCode';
import PhpSettings from '../contexts/PhpSettings';

const Spinner = () => <span className="ptg-loading">Generating code. Please wait...</span>;

const facebookIcon = <svg viewBox="0 0 24 24"><path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127 C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"></path></svg>;
const twitterIcon = <svg viewBox="0 0 24 24"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>;

const Result = () => {
	const [ state ] = useContext( PhpSettings );

	const [ copied, setCopied ] = useState( false );
	const copy = () => {
		setCopied( true );
		setTimeout( () => setCopied( false ), 1000 );
	};

	const Highlight = lazy( () => import( 'react-highlight' ) );
	const Clipboard = lazy( () => import( 'react-clipboard.js' ) );

	if ( !state.name || !state.singular_name ) {
		return (
			<div className="ptg-result">
				<p className="alert alert-error">Required fields must not be empty!</p>
			</div>
		);
	}

	return (
		<Suspense fallback={ <Spinner /> }>
			<div className="ptg-result">
				<div className="alert alert-info">Copy the code and paste into your theme's <code>functions.php</code> file. Wanna more features or use inside the WordPress admin? <a href="https://metabox.io/pricing/" target="_blank" rel="noopener noreferrer">Become a premium user</a>.</div>
				<div className="ptg-share">
					<strong>If you find this tool useful, please share it with your friends:</strong>
					<a className="ptg-share--facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmetabox.io%2Fpost-type-generator%2F" target="_blank" rel="noopener noreferrer">{ facebookIcon } Facebook</a>
					<a className="ptg-share--twitter" href="https://twitter.com/intent/tweet?url=https://metabox.io/post-type-generator/&amp;via=wpmetabox&amp;text=I+just+generated+a+custom+post+type+for+%23WordPress" target="_blank" rel="noopener noreferrer">{ twitterIcon } Twitter</a>
				</div>
				<div className="ptg-result__body">
					<Highlight className="php">{ PhpCode( state ) }</Highlight>
					<Clipboard title="Click to copy the code" data-clipboard-text={ PhpCode( state ) } onSuccess={ copy }>{ copied ? 'Copied' : 'Copy' }</Clipboard>
				</div>
			</div>
		</Suspense>
	);
};

export default memo( Result );
