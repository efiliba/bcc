import React from 'react';
import CarerRecord from './CarerRecord';
import {Link} from 'react-router';

const CarerList = ({carers}) => {
	const carerRecords = !carers.list.length ? 'No carers found' : carers.list.map((carer) => (
        <div key={carer._id}>
            <CarerRecord carer={carer}/>
            <Link to={'/carer/' + carer._id}>select</Link>
        </div>
    ));

    return (
		<div className='carer-list container'>
			{carerRecords}
		</div>
	);
};

export default CarerList;