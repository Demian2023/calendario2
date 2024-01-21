import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export const ContenidoModalEditar = ({editarAgenda, modalEditar, diaTextoTarea}) => {

    const [texto, setTexto] = useState();

    //actualizar el value de texto
    useEffect(() => {
        setTexto(diaTextoTarea.tarea);
    }, [diaTextoTarea.tarea])

    const inputChange = (e) => {
        setTexto(e.target.value)
      }

    const submit = (e) => {
        e.preventDefault();
        editarAgenda(texto, diaTextoTarea.dia);
        setTexto("");
    }
    
    const inputRef = useRef(null);

    useEffect(() => {
        // Enfocar el input cuando el componente se monta
        if (modalEditar) {
          inputRef.current.focus();
        }
      }, [modalEditar]);


return (
    <>
        <h3>
            Dia: {diaTextoTarea.dia}
        </h3>
        <br></br>
        <form onSubmit={submit}>
        <label htmlFor="inputEvento"><h3>Editar tarea: </h3></label>
            <div>
                <textarea ref={inputRef} rows={7} cols={40} type="text" name="" id="inputEvento" value={texto} onChange={inputChange} required/>
            </div>
        <button type="submit">Enviar</button>
    </form>

    </>
);
}

ContenidoModalEditar.propTypes = {
    editarAgenda: PropTypes.func,
    diaTextoTarea: PropTypes.object,
    modalEditar: PropTypes.bool,
  };