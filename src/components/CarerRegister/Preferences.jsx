import React from 'react';

var fonts = [];
fonts['Palliative'] = {
	'toolTip': 'Palliative Care',
	'font': 'fa-wheelchair fa-fw'
};
fonts['Dementia'] = {
	'toolTip': 'Dementia Care',
	'font': 'fa-medkit fa-fw'
};
fonts['Disability'] = {
	'toolTip': 'Disability Care',
	'font': 'fa-life-ring fa-fw'
};
fonts['Elderly'] = {
	'toolTip': 'Elderly Care',
	'font': 'fa-hospital-o fa-fw'
};
fonts['Children'] = {
	'toolTip': 'Child Care',
	'font': 'fa-child fa-fw'
};
fonts['Pets'] = {
	'toolTip': 'Comfortable with Pets',
	'font': 'fa-paw fa-fw'
};
fonts['Car'] = {
	'toolTip': 'Have a Car',
	'font': 'fa-car fa-fw'
};

const Preferences = ({preferences}) => {
	var preferenceRecords = !preferences ? "No prefrences" : preferences.map((preference, index) => (
	    <button type='button' className='btn btn-default' key={index}>
			<i className={'fa ' + fonts[preference].font}/>
			&nbsp;{fonts[preference].toolTip}
		</button>
	));
	
	return (
		<div className='carer-preferences btn-group btn-group-justified' role='group' aria-label='Justified button group'>
			{preferenceRecords}
		</div>
	);
}

export default Preferences;