import PropTypes from 'prop-types';

export const ContenidoModalDiaRepetido = ({dia, setModal, setModal2}) => {
return (
    <>
     <h1>Atención</h1>
     <h2>Día repetido, para agregar otra acción vaya a la <a href={`#${dia}`} onClick={()=>{setModal(false); setModal2(false)}}>agenda</a></h2>
    </>
);
}

ContenidoModalDiaRepetido.propTypes = {
    dia: PropTypes.string,
    setModal: PropTypes.func,
    setModal2: PropTypes.func,
  };