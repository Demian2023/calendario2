import { useState, useEffect, useMemo } from 'react';
import '../estilos/Calendario.css';
import '../estilos/CalendarioApp.css';
import { hookArrayDias } from './hookArrayDias';

import PropTypes from 'prop-types';

export const Calendario = ({agregarTarea}) => {
  //Obtener año y mes actual
  const añoActual = new Date().getFullYear();
  const mesActual = new Date().getMonth();

  const año = useMemo (() => [
    2018 , 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
  ], []);
  const mesesDelAño = useMemo (() => [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ], []);
  const diasDeLaSemana = useMemo (() => [
    "dom", "lun", "mar", "mie", "jue", "vie", "sab"
  ], []);

  const [añoSeleccionado, setAñoSeleccionado] = useState(añoActual);
  const [mesSeleccionado, setMesSeleccionado] = useState(mesesDelAño[mesActual]);
  const [indice, setIndice] = useState(mesesDelAño.indexOf(mesSeleccionado)); 
  const [diasArray, setDiasArray] = useState([]);
  const [diaInicio, setDiaInicio] = useState();

  //obtener la cantidad de dias del mes para hacer un array y poder usar .map()
  //setear el dia de inicio para poder saber donde empezar el mes (en que dia)
  useEffect(() => {
    const diasMes = new Date(añoActual, indice ? indice : mesActual + 1, 0).getDate();
    const dias = hookArrayDias(diasMes);
    setDiasArray(dias);
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, mesActual, 1);
    const diaInicio = primerDiaDelMes.getDay();
    setDiaInicio(diaInicio);
  }, [mesesDelAño, mesActual, añoActual, añoSeleccionado, indice]);

  //manejar el cambio de año
  const handleChangeAño = (event) => {
    const añoSeleccionado = event.target.value;
    setAñoSeleccionado(añoSeleccionado);
  }

  //manejar el cambio de mes
  const handleChangeMes = (event) => {
    const mesSeleccionado = event.target.value;
    const nuevoIndice = mesesDelAño.indexOf(mesSeleccionado);
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, nuevoIndice, 1);
    const diaInicio = primerDiaDelMes.getDay();
    setDiaInicio(diaInicio);
    setMesSeleccionado(mesSeleccionado);
    setIndice(nuevoIndice);
  };

  return (
    <>
      <div className="marco">
        <h3>Elegir año</h3>
        <select value={añoSeleccionado} onChange={handleChangeAño}>
          <option value="" disabled>Selecciona el año</option>
          {año.map((anio, index) => (
            <option key={index} value={anio}>
              {anio}
            </option>
          ))}
        </select>
        <h3>Elegir mes: </h3>
        <select value={mesSeleccionado} onChange={handleChangeMes}>
          <option value="" disabled>Selecciona un mes</option>
          {mesesDelAño.map((mes, index) => (
            <option key={index} value={mes}>
              {mes}
            </option>
          ))}
        </select>
        <ol>
          {diasDeLaSemana.map((diaSemana, index) => (
            <li key={index}>
              {diaSemana}
            </li>
          ))}
        </ol>
        <ol>
          {diasArray.map((dia, index) => (
            <li key={index}
            className='numeros'
            style={index === 0 ? { gridColumnStart: diaInicio + 1 } : {}}
            onClick={()=>{agregarTarea(dia, indice, añoSeleccionado)}}>
              {dia}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

Calendario.propTypes = {
  agregarTarea: PropTypes.func,
};
