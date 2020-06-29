import React from 'react';

import './style.scss';

import styled from 'styled-components';

const Contact = ({ className }) => {
  return (
    <section>
      <form method="post">
        <div className="container">
          <div className="field">
            <label className="label" htmlFor="name">Prénom / Nom</label>
            <div className="control has-icons-left">
              <input className="input" type="text" name="name" required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control has-icons-left">
              <input className="input" type="email" name="_replyto" required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="message">Description du projet</label>
            <div className="control">
              <textarea className="textarea" name="message" placeholder="Décrivez aussi précisément que possible votre projet, cela facilitera les premiers contacts." required></textarea>
            </div>
            <div className="field">
              <div className="control">
                <button className="button btn is-success envoyer is-fullwidth">Envoyer</button>
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