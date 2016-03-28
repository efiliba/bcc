import React from 'react';

const ContactUs = ({fields: {name, email, request}, submitted, handleSubmit}) => (
    <section id='contactUsForm' className='form wow fadeInDown'>
        <div className='form-content'>
            <h2 className='form-title'>Contact Us</h2>
            {submitted && <div className="alert alert-success">Your request has been submitted, we will contact you shortly.</div>}
            <input placeholder='Name' className='form-field' {...name}/>
            <input type="email" placeholder='Email address' className='form-field' {...email}/>
            <textarea placeholder='Request' className='form-field' {...request}></textarea>
            <a className='submit-button align-right' onClick={handleSubmit}>Submit</a>
        </div>
    </section>
);

ContactUs.propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
};

export default ContactUs;