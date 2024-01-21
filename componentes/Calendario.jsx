import '../estilos/Calendario.css'
import PropTypes from 'prop-types'

export const Calendario= ({agregarTarea, eventos}) => {

  return (
    <div className="marco">
      <h2>Enero 2024</h2>
      <ol>
        <li>Lun</li>
        <li>Mar</li>
        <li>Mie</li>
        <li>Jue</li>
        <li>Vie</li>
        <li>Sab</li>
        <li>Dom</li>
        <li className={`numeros primerDia ${eventos.some(evento => evento.dia === "1") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>1</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "2") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>2</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "3") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>3</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "4") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>4</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "5") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>5</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "6") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>6</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "7") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>7</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "8") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>8</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "9") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>9</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "10") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>10</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "11") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>11</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "12") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>12</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "13") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>13</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "14") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>14</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "15") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>15</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "16") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>16</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "17") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>17</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "18") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>18</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "19") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>19</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "20") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>20</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "21") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>21</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "22") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>22</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "23") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>23</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "24") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>24</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "25") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>25</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "26") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>26</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "27") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>27</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "28") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>28</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "29") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>29</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "30") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>30</li>
        <li className={`numeros ${eventos.some(evento => evento.dia === "31") ? 'diaAgendado' : ''}`} onClick={agregarTarea}>31</li>
      </ol>
    </div>
  )
}


Calendario.propTypes = {
  agregarTarea: PropTypes.func,
  eventos: PropTypes.array,
};