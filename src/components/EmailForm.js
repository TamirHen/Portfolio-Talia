import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

function EmailForm(props) {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSuccess, setIsSuccess] = useState();

    const formRef = useRef();
    const setFormHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_327ms9j', 'template_5xlaj8s', formRef.current, 'user_XUAW1zNF8a740W3CNNh0R')
            .then((result) => {
                console.log("Message sent");
                setIsSuccess(true);
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            }, (error) => {
                console.log(error.text);
                setIsSuccess(false);
            });
    }

    return (
        <form className="contact-form" ref={formRef} onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={form?.name} required type="text" className="form-control" name={"name"} onChange={setFormHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input value={form?.email} required type="email" className="form-control" name={"email"}
                       onChange={setFormHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input value={form?.subject} required type="text" className="form-control" name={"subject"}
                       onChange={setFormHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea value={form?.message} required className="form-control" rows="8" name={"message"}
                          onChange={setFormHandler}/>
            </div>
            <button type="submit" className="btn-submit">SUBMIT</button>
            <p className={"success-message"}>
                {
                    isSuccess ? "Thank you, your message was sent" :
                        isSuccess === false && "There was an error, please try again"
                }
            </p>
        </form>
    );
}

export default EmailForm;