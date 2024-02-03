import PropTypes from 'prop-types';
import { Form } from './Form';

export const ContenidoModalAgregarTarea = ({dia, agregarTarea, modal}) => {

return (
<>
<h1>{dia}</h1>
<Form formHandler={agregarTarea} modal={modal}/>
</>
)}

ContenidoModalAgregarTarea.propTypes = {
  dia: PropTypes.string,
  agregarTarea: PropTypes.func,
  modal: PropTypes.bool,
};