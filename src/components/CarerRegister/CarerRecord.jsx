import React from 'react';
import Qualifications from './Qualifications';
import Preferences from './Preferences';
import {staticFiles} from '../../../server/config';

const CarerRecord = ({carer}) => (
    <div className='carer'>
		<h2 className='carer-name'>
			{carer.name}
		</h2>
		
		<div className='row'>
			<div className='carer-thumbnail col-xs-7 col-sm-4 col-md-3 col-lg-2'>
				<img src={`${staticFiles}/images/${carer.avatarFileName}`} alt='{carer.name}' className='img-responsive center-block img-thumbnail img-rounded' />
			</div>
			
			<div className='carer-services hidden-xs-down col-sm-8 col-md-9 col-lg-10'>
				<h3 className='row'>{carer.services.join(', ')}</h3>
				<div className='row'>{carer.profile}</div>
			</div>

			<div className='col-xs-5 col-sm-4 col-md-3 col-lg-2'>
				<Qualifications qualifications={carer.qualifications}/>
			</div>

			<div className='carer-services hidden-sm-up'>
				<h3>{carer.services.join(', ')}</h3>
				<div>{carer.brief}</div>
			</div>

			<div className='col-sm-8 col-md-9 col-lg-10'>
				<Preferences preferences={carer.preferences}/>
			</div>
		</div>
	</div>
);

export default CarerRecord;