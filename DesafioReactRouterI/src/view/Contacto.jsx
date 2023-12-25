import React from 'react';

export const Contacto = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="mb-3 col-12">
        <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3 col-12">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-3 col-12 text-center">
        <input className="btn btn-danger text-light" type="submit" value="Enviar" />
      </div>
    </div>
  );
};