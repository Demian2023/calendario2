import '../estilos/Calendario.css'
import PropTypes from 'prop-types'

export const Calendario= ({agregarTarea}) => {

  return (
    <div className="marco">
      <h2>Enero 2024</h2>
      <ol>
        <li>Lun</li>
        <li>Mar</li>
        <li>Mier</li>
        <li>Jue</li>
        <li>Vier</li>
        <li>Sab</li>
        <li>Dom</li>
        <li className='numeros primerDia' onClick={agregarTarea}>1</li>
        <li className="numeros" onClick={agregarTarea}>2</li>
        <li className="numeros" onClick={agregarTarea}>3</li>
        <li className="numeros" onClick={agregarTarea}>4</li>
        <li className="numeros" onClick={agregarTarea}>5</li>
        <li className="numeros" onClick={agregarTarea}>6</li>
        <li className="numeros" onClick={agregarTarea}>7</li>
        <li className="numeros" onClick={agregarTarea}>8</li>
        <li className="numeros" onClick={agregarTarea}>9</li>
        <li className="numeros" onClick={agregarTarea}>10</li>
        <li className="numeros" onClick={agregarTarea}>11</li>
        <li className="numeros" onClick={agregarTarea}>12</li>
        <li className="numeros" onClick={agregarTarea}>13</li>
        <li className="numeros" onClick={agregarTarea}>14</li>
        <li className="numeros" onClick={agregarTarea}>15</li>
        <li className="numeros" onClick={agregarTarea}>16</li>
        <li className="numeros" onClick={agregarTarea}>17</li>
        <li className="numeros" onClick={agregarTarea}>18</li>
        <li className="numeros" onClick={agregarTarea}>19</li>
        <li className="numeros" onClick={agregarTarea}>20</li>
        <li className="numeros" onClick={agregarTarea}>21</li>
        <li className="numeros" onClick={agregarTarea}>22</li>
        <li className="numeros" onClick={agregarTarea}>23</li>
        <li className="numeros" onClick={agregarTarea}>24</li>
        <li className="numeros" onClick={agregarTarea}>25</li>
        <li className="numeros" onClick={agregarTarea}>26</li>
        <li className="numeros" onClick={agregarTarea}>27</li>
        <li className="numeros" onClick={agregarTarea}>28</li>
        <li className="numeros" onClick={agregarTarea}>29</li>
        <li className="numeros" onClick={agregarTarea}>30</li>
        <li className="numeros" onClick={agregarTarea}>31</li>
      </ol>
    </div>
  )
}


Calendario.propTypes = {
  agregarTarea: PropTypes.func,
};