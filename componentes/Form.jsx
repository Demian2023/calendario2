// import PropTypes from 'prop-types';
import { useState } from 'react';

import PropTypes from "prop-types"

export const Form = ({formHandler}) => {

    const [texto, setTexto] = useState("");

    const inputChange = (e) => {
        setTexto(e.target.value)
      }

    const submit = (e) => {
        e.preventDefault();
        formHandler(texto);
    }
    

return (
    <form onSubmit={submit}>
        <label htmlFor="inputEvento"><h3>Agregar tarea: </h3></label>
            <div>
                <textarea rows={5} cols={40} type="text" name="" id="inputEvento" value={texto} onChange={inputChange} required/>
            </div>
        <button type="submit">Enviar</button>
    </form>
);
}

Form.propTypes = {
    formHandler: PropTypes.func,
  };