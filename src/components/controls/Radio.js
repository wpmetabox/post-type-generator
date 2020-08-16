import React from 'react';
// 

const Radio = ( {label, name, update, values, defaultValue} ) => {
	return (
		<label id={name} className="row">
			<div className="label">
				{label}
			</div>
			<div className="row">
				{
					values.map( ( item, key ) => {
						return (
							<label key={key}>
								<input type="radio" name={name} value={item.type} defaultChecked={item.type === defaultValue && "checked" } onChange={update} />
								{item.label}
							</label>
						)
					} )
				}
				
			</div>
		</label>
	)
}

export default Radio;