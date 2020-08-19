import React from 'react';

const Radio = ( {label, name, update, values, defaultValue} ) => {
	return (
		<label id={name} className="ptg-row">
			<div className="ptg-label">
				{label}
			</div>
			<div className="ptg-row">
				{
					values.map( ( item, key ) => {
						return (
							<label key={key} className={item.icon && "icon-single"}>
								<input type="radio" name={name} value={item.value} defaultChecked={item.value === defaultValue && "checked" } onChange={update} />
								{item.icon && <i className={item.icon + " wp-menu-image dashicons-before"}></i>}
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