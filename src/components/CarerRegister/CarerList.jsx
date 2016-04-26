import React from 'react';
import CarerRecord from './CarerRecord';
import {Link} from 'react-router';

const CarerList = ({carers}) => {
    const carerRecords = !carers.size ? 'No carers found' : carers.map((carer) => (
        <div key={carer.get('_id')}>
            <CarerRecord carer={carer}/>
            <Link to={'/carer/' + carer.get('_id')}>select</Link>
        </div>
    ));

    return (
		<div className='carer-list container'>
			{carerRecords}
		</div>
	);
};

export default CarerList;