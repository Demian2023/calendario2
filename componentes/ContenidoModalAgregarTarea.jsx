import PropTypes from 'prop-types';
import { Form } from './Form';

export const ContenidoModalAgregarTarea = ({dia, agregarTarea}) => {

return (
<>
<h1>{dia} de enero</h1>
<Form formHandler={agregarTarea}/>
</>
)}

ContenidoModalAgregarTarea.propTypes = {
  dia: PropTypes.string,
  agregarTarea: PropTypes.func,
};