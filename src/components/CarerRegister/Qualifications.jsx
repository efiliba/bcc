import React from 'react';

var fonts = [];
fonts['First Aid'] = {
	'toolTip': 'First Aid',
	'font': 'fa-plus-circle fa-fw'
};
fonts['Police Check'] = {
	'toolTip': 'Police Check',
	'font': 'fa-product-hunt fa-fw'
};
fonts['Driver\'s Licence'] = {
	'toolTip': 'Driver\'s Licence',
	'font': 'fa-road fa-fw'
};
fonts['AIN'] = {
	'toolTip': 'Assistent In Nursing',
	'font': 'fa-user fa-fw'
};
fonts['EN'] = {
	'toolTip': 'Enrolled Nurse',
	'font': 'fa-graduation-cap fa-fw'
};
fonts['EEN'] = {
	'toolTip': 'Extra Enrolled Nurse',
	'font': 'fa-user-plus fa-fw'
};
fonts['RN'] = {
	'toolTip': 'Registered Nurse',
	'font': 'fa-child fa-fw'
};

const Qualifications = ({qualifications}) => {
	var qualificationRecords = !qualifications ? "No qualifications" : qualifications.map((qualification, index) => (
	    <a className='list-group-item' key={index}>
			<i className={'fa ' + fonts[qualification].font} title={fonts[qualification].toolTip}/>
			&nbsp;{fonts[qualification].toolTip}
		</a>
	));
	
	return (
		<div className='carer-qualifications list-group'>
			{qualificationRecords}
		</div>
	);
};

export default Qualifications