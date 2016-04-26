import React from 'react';
import Qualifications from './Qualifications';
import Preferences from './Preferences';
import {avatarPath} from '../../../config';

const activeStyle = (highlight) => {
    let style = {
        //borderWidth: 2,
        //borderColor: '#666',
        //borderStyle: 'dashed',
        //borderRadius: 5,
        //backgroundColor: 'pink'
    };

    if (highlight) {
        Object.assign(style, {
            backgroundColor: 'lightyellow'
        });
    };

    return style;
};

const CarerRecord = ({carer}) => (
    <div className='carerRecord' style={activeStyle(carer.get('highlight'))}>
	    <h2 className='carer-name'>
		    {carer.get('name')}
	    </h2>
	
	    <div className='row'>
		    <div className='carer-thumbnail col-xs-7 col-sm-4 col-md-3 col-lg-2'>
			    <img src={carer.get('preview') ? carer.get('preview'): `${avatarPath}/${carer.get('avatarFileName')}`} 
                    alt="{carer.get('name')}" className='img-responsive center-block img-thumbnail img-rounded' />
		    </div>
		
		    <div className='carer-services hidden-xs-down col-sm-8 col-md-9 col-lg-10'>
			    <h3 className='row'>{carer.get('services').join(', ')}</h3>
			    <div className='row'>{carer.get('profile')}</div>
		    </div>

		    <div className='col-xs-5 col-sm-4 col-md-3 col-lg-2'>
			    <Qualifications qualifications={carer.get('qualifications')}/>
		    </div>

		    <div className='carer-services hidden-sm-up'>
			    <h3>{carer.get('services').join(', ')}</h3>
			    <div>{carer.get('brief')}</div>
		    </div>

		    <div className='col-sm-8 col-md-9 col-lg-10'>
			    <Preferences preferences={carer.get('preferences')}/>
		    </div>
	    </div>
    </div>
);

export default CarerRecord;