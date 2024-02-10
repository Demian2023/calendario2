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
   2015, 2016, 2017, 2018 , 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030
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
    const diasMes = new Date(añoActual, indice + 1, 0).getDate();
    const dias = hookArrayDias(diasMes);
    setDiasArray(dias);
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, indice, 1);
    const diaInicio = primerDiaDelMes.getDay();
    setDiaInicio(diaInicio);
  }, [mesesDelAño, mesActual, añoActual, añoSeleccionado, indice]);

  //manejar el cambio de año
  const handleChangeAño = (event) => {
    const nuevoAñoSeleccionado = parseInt(event.target.value, 10);
    setAñoSeleccionado(nuevoAñoSeleccionado);
  }

  //manejar el cambio de mes
  const handleChangeMes = (event) => {
    const mesSeleccionado = event.target.value;
    const nuevoIndice = mesesDelAño.indexOf(mesSeleccionado);
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, nuevoIndice, 1);
    setDiaInicio(primerDiaDelMes.getDay());
    setMesSeleccionado(mesSeleccionado);
    setIndice(nuevoIndice);
  };

  const mesAnterior = () => {
    const nuevoIndice = mesesDelAño.indexOf(mesSeleccionado);
    let indiceAnterior;
    let añoSiguiente;
    if (nuevoIndice < 1) {
      indiceAnterior = 11;
      añoSiguiente = añoSeleccionado - 1;
      setAñoSeleccionado(añoSiguiente);
    } else { indiceAnterior = nuevoIndice - 1;}
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, indiceAnterior, 1);
    setDiaInicio(primerDiaDelMes.getDay());
    setMesSeleccionado(mesesDelAño[indiceAnterior]);
    setIndice(indiceAnterior);
  };

  const mesSiguiente = () => {
    const nuevoIndice = mesesDelAño.indexOf(mesSeleccionado);
    let indiceSiguiente;
    let añoSiguiente;
    if (nuevoIndice > 10) {
      indiceSiguiente = 0;
      añoSiguiente = añoSeleccionado + 1;
      setAñoSeleccionado(añoSiguiente);
    } else { indiceSiguiente = nuevoIndice + 1;}
    const primerDiaDelMes = new Date(añoSeleccionado ? añoSeleccionado : añoActual, indiceSiguiente, 1);
    setDiaInicio(primerDiaDelMes.getDay());
    setMesSeleccionado(mesesDelAño[indiceSiguiente]);
    setIndice(indiceSiguiente);
  };

  const añoAnterior = () => {
    setAñoSeleccionado((añoSeleccionado) => añoSeleccionado - 1);
    console.log(añoSeleccionado);
  }

  const añoSiguiente = () => {
    setAñoSeleccionado((añoSeleccionado) => añoSeleccionado + 1);
    console.log(añoSeleccionado);
  }

  return (
    <>
      <div className="marco">
        <div className="barra">
          <button className='botonCalendario' onClick={añoAnterior}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
              <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </button>
          <button className="botonCalendario" onClick={mesAnterior}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
            </svg>
          </button>
          <button className="botonCalendario">
            <select value={añoSeleccionado} onChange={handleChangeAño}>
              {año.map(anio => (
                <option key={anio} value={anio}>{anio}</option>
              ))}
            </select>
          </button>
          <button className="botonCalendario">
            <select value={mesSeleccionado} onChange={handleChangeMes}>
              {mesesDelAño.map(mes => (
                <option key={mes} value={mes}>{mes}</option>
              ))}
            </select>
          </button>
          <button className="botonCalendario"  onClick={mesSiguiente}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
            </svg>
          </button>
          <button className="botonCalendario" onClick={añoSiguiente}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
              <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
        </div>
       
        <ol>
          {diasDeLaSemana.map((diaSemana, index) => (
            <li key={index}
            className='diaSemana'
            >
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
