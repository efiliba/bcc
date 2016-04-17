import React from 'react';

const ContactUs = ({fields: {name, email, request}, submitted, handleSubmit}) => (
    <section id='contactUsForm' className='form wow fadeInDown'>
        <form className="form-content" onSubmit={handleSubmit}>
            <h2 className='form-title'>Contact Us</h2>
            {submitted && <div className="alert alert-success">Your request has been submitted, we will contact you shortly.</div>}
            <input placeholder='Name' className='form-field' {...name}/>
            <input type="email" placeholder='Email address' className='form-field' {...email}/>
            <textarea placeholder='Request' className='form-field' {...request}></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </section>
);

ContactUs.propTypes = {
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired
};

export default ContactUs;