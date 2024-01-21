import '../estilos/Agenda.css'
import PropTypes from 'prop-types'

export const Agenda = ({tareas, editar, borrar}) => {

return (

    <div className="marco">
        <h1 id="agenda">Agenda</h1>
        {tareas.map((e)=>(
            <div className="contenedorDias" key={e.dia} id={e.dia}>
                <div className="anotacionDia">
                    <h2>{e.dia} de Enero</h2>
                    <h3>{e.tarea}</h3>
                    <div className='botonesAgenda'>
                        <button className='botonEditar' onClick={()=>{editar(e.dia, e.tarea)}}>
                            <div className='iconosyTexto'>
                                <i className="fa-solid fa-pen"></i>
                                <h3>Editar</h3>
                            </div>
                        </button>
                        <button className='botonBorrar' onClick={()=>{borrar(e.dia)}}>
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
    borrar: PropTypes.func,
  };