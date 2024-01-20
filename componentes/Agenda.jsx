import '../estilos/Agenda.css'
import PropTypes from 'prop-types'

export const Agenda = ({tareas, editar}) => {

return (

    <div className="marco">
        <h1 id="agenda">Agenda</h1>
        {tareas.map((e)=>(
            <div className="contenedorDias" key={e.dia} id={e.dia}>
                <div className="anotacionDia">
                    <h2>{e.dia} de Enero</h2>
                    <h3>{e.tarea}</h3>
                    <div className='botonesAgenda' onClick={editar}>
                        <button className='botonEditar'>
                            <div className='iconosyTexto'>
                                <i className="fa-solid fa-pen"></i>
                                <h3>Editar</h3>
                            </div>
                        </button>
                        <button className='botonBorrar'>
                            <div className="iconosyTexto">
                                <i className="fa-solid fa-trash"></i>
                                <h3>Borrar</h3>
                            </div>  
                        </button>
                    </div>
                </div>
                
            </div>
            
        ))}
    </div>
);
}

Agenda.propTypes = {
    tareas: PropTypes.array,
    editar: PropTypes.func,
  };