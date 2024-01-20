import PropTypes from 'prop-types';
import { Form } from "./Form";

export const ContenidoModalEditar = ({editarAgenda, modalEditar}) => {
return (
    <Form formHandler={editarAgenda} modal={modalEditar}/>
);
}

ContenidoModalEditar.propTypes = {
    editarAgenda: PropTypes.func,
    modalEditar: PropTypes.bool,
  };