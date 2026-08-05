import { useMemo } from 'react';
import hljs from 'highlight.js/lib/core';
import php from 'highlight.js/lib/languages/php';

hljs.registerLanguage( 'php', php );

const CodeHighlight = ( { code, language = 'php' } ) => {
	const html = useMemo(
		() => hljs.highlight( code, { language } ).value,
		[ code, language ]
	);

	return (
		<pre className={ `hljs ${ language }` }>
			<code dangerouslySetInnerHTML={ { __html: html } } />
		</pre>
	);
};

export default CodeHighlight;
