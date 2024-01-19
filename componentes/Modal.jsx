import "../estilos/Modal.css"
import PropTypes from 'prop-types';


export const Modal = ({modalVisible, setModalVisible, contenido}) => {
return (
    <div className={`modal ${modalVisible ? 'show' : 'hide'}`} onClick={() => {setModalVisible(false)}}>
    <div className="modalContenido" onClick={(e) => e.stopPropagation()}>
        {contenido}
    </div>
</div>
);
}   

Modal.propTypes = {
    modalVisible: PropTypes.bool,
    setModalVisible: PropTypes.func,
    contenido: PropTypes.object,
  };