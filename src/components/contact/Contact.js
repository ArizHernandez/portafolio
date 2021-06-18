import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import WOW from 'wowjs';

import { Input } from './Input';
import { useForm } from '../../hooks/useForm';
import { sendForm } from '../../helpers/sendForm';

export default function Contact() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const [formValue, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    message: ""
  });
  const {name, email, message} = formValue;
  const expresions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if(name !== "" && expresions.email.test(email)){
      sendForm(document.querySelector('#formContact'))
        .then( () => {
          reset();
          Swal.fire('Success', 'Message sended!', 'success');
        })
        .catch( err => {
          Swal.fire('Upss..', err.message, 'error');
        })
    }
  }

  return (
    <div className="contact__main-container" id="contact">
      <h3 className="title__content mt-3">Contact me</h3>

      <form 
        className="contact__form-container wow fadeIn mt-3" 
        id="formContact"
        onSubmit={handleSendMessage}
      >
        
        <Input 
          title="Name:"
          type="text"
          placeholder="First and last name"
          validPattern={expresions.name}
          autoComplete="off"
          required={true}
          value={name}
          name="name"
          handleInputChange={handleInputChange}
          messageError="*Character no valid"
          />

        <Input 
          title="Email:"
          type="email"
          placeholder="email@email.com"
          validPattern={expresions.email}
          autoComplete="off"
          required={true}
          value={email}
          name="email"
          handleInputChange={handleInputChange}
          messageError="*Email no valid"
        />
        
        <div className="form-group mb-3">
          <label className="form__group-label">
            <small>Message:</small>
          </label>

          <div className="form__group-input-container">
            <textarea
              className="form__group-message"
              name="message"
              placeholder="Your message"
              value={message}
              onChange={handleInputChange}
              required
            />  
          </div>
        </div>

        <button
          className="btn btn-primary btn-block mt-2"
          disabled={(name === "" || email === "" || message === "")}
        >
          Send
        </button>

      </form>
    </div>
  )
}
