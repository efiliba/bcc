import React from 'react';
import Qualifications from './Qualifications';
import Preferences from './Preferences';
import AvatarUploadContainer from './AvatarUploadContainer';

const CarerRegister = ({fields: {name, email, profile}, submitted, avatarUploadError, handleSubmit}) => (
    <form className="carer-input-form container" onSubmit={handleSubmit}>
        <h2 className='form-title'>Register as a Carer</h2>
        {submitted && <div className="alert alert-success">Your registration has been submitted, we will contact you shortly.</div>}
        
        <fieldset className="form-group">
            <label htmlFor="avatarInputFile">Select avatar</label>
            <AvatarUploadContainer/>
            <small className="text-muted">Please upload your image.</small>
            {avatarUploadError && <div className="alert alert-danger">{avatarUploadError}</div>}
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" {...name}/>
            <small className="text-muted">First name and surname</small>
        </fieldset>
        
        <fieldset className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your email address" {...email}/>
            <small className="text-muted">Your email address</small>
        </fieldset>

        <fieldset className="form-group">
            <label htmlFor="profile">Profile</label>
            <textarea className="form-control" id="name" placeholder="Enter your profile" {...profile}/>
            <small className="text-muted">Profile</small>
        </fieldset>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
);

export default CarerRegister;