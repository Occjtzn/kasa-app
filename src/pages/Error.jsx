import React from 'react';
import './styles/error.scss';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink className="nav-return-home" to="/">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
