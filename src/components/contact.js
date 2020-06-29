import React, { useState } from 'react';
import styled from 'styled-components';
import { Axios, db } from '../firebase/firebaseConfig';
import './style.scss';



const Contact = ({ className }) => {
  const [formData, setFormData] = useState({});

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-freelance-9586b.cloudfunctions.net/submit',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .cath(error => {
        console.log(error)
      })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="field">
            <label className="label" htmlFor="name">Prénom / Nom</label>
            <div className="control has-icons-left">
              <input className="input" type="text" name="name" onChange={updateInput} value={formData.name || ''} required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control has-icons-left">
              <input className="input" type="email" name="email" onChange={updateInput} value={formData.email || ''} required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">Description du projet</label>
            <div className="control">
              <textarea className="textarea" type="text" name="message" placeholder="Décrivez aussi précisément que possible votre projet, cela facilitera les premiers contacts." onChange={updateInput} value={formData.message || ''} required></textarea>
            </div>
            <div className="field">
              <div className="control">
                <button className="button btn is-success envoyer is-fullwidth" type="submit">Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default styled(Contact)`
  .btn {
    margin-top: 2rem;
  }
`;