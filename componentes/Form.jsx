// import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

import PropTypes from "prop-types"

export const Form = ({formHandler, modal}) => {

    const [texto, setTexto] = useState("");

    const inputChange = (e) => {
        setTexto(e.target.value)
      }

    const submit = (e) => {
        e.preventDefault();
        formHandler(texto);
        setTexto("");
    }
    
    const inputRef = useRef(null);

    useEffect(() => {
        // Enfocar el input cuando el componente se monta
        if (modal) {
          inputRef.current.focus();
        }
      }, [modal]);

return (
    <form onSubmit={submit}>
        <label htmlFor="inputEvento"><h3>Agregar tarea: </h3></label>
            <div>
                <textarea ref={inputRef} rows={5} cols={40} type="text" name="" id="inputEvento" value={texto} onChange={inputChange} required/>
            </div>
        <button type="submit">Enviar</button>
    </form>
);
}

Form.propTypes = {
    formHandler: PropTypes.func,
    modal: PropTypes.bool,
  };