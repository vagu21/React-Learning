import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [data, setData] = useState({
        subject: '',
        email: '',
        message: ''
    });

    const { subject, email, message } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();

        emailjs.sendForm('service_5ug59gx', 'template_9salpyb', form.current, 'wbvc7dFp5A_m6KDgA')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        e.target.reset();  // Reset the form
        setData({
            subject: '',
            email: '',
            message: ''
        });
    };

    const InputStyle = { padding: '8px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' };

    return (
        <div>

            <h1>Sending Email thorugh EmailJs </h1>
            <form ref={form} onSubmit={submitHandler} style={{ padding: '30px', border: '10px solid black', marginTop: '20px', display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
                <label style={{ marginBottom: '10px' }}>Subject:</label>
                <input style={InputStyle} type="text" name="subject" value={subject} onChange={changeHandler} /><br /><br />
                <label style={{ marginBottom: '10px' }}>Email:</label>
                <input style={InputStyle} type="email" name="email" value={email} onChange={changeHandler} /><br /><br />
                <label style={{ marginBottom: '10px' }}>Message:</label>
                <input style={InputStyle} type="text" name="message" value={message} onChange={changeHandler} />
                <input type="submit" name="submit" />
            </form>
        </div>
    );
}

export default Contact;
