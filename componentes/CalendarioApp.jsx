import '../estilos/CalendarioApp.css'
import { useState, useEffect } from 'react';
import { Calendario } from './Calendario'
import { Modal } from './Modal'
import { ContenidoModalAgregarTarea } from './ContenidoModalAgregarTarea';
import { ContenidoModalDiaRepetido } from './ContenidoModalDiaRepetido';
import { ContenidoModalEditar } from './ContenidoModalEditar';
import { Agenda } from './Agenda';

export const CalendarioApp = ()=> {

  const [diaEvento, setDiaEvento] = useState("");
    //orden
  const [orden, setOrden] = useState("");
    // modal para calendario dias
  const [modal, setModal] = useState(false); 
    // modal para dia repetido
  const [modalDiaRepetido, setModalDiaRepetido] = useState(false);
    // modal para edicion
  const [modalEditar, setModalEditar] = useState(false);
    //para editar
  const [diaTextoTarea, setDiaTextoTarea] = useState({});
    //para ordenar tareas
  // const [ordenTareas, setOrdenTareas] = useState();


  //buscar en localstorage los eventos
  const [eventos, setEventos] = useState(() => { 
    const eventosAlmacenados = localStorage.getItem('eventos');
    return eventosAlmacenados ? JSON.parse(eventosAlmacenados) : [];
  });

  // guardar en localstorage
  useEffect(() => {
      localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]); 
  
  // recuperar el dia y abrir modal para agregar tareas
  const modalDia = (dia, indice, año) => {  
    const diaFecha = dia < 10 ? "0" + dia : dia;
    const indiceCorrecto = indice + 1;
    const mesFecha = indiceCorrecto < 10 ? "0" + indiceCorrecto : indiceCorrecto;
    setDiaEvento(dia + "/" + mesFecha + "/" + año);
    setOrden(año + mesFecha + diaFecha);
    setModal(true);
  }

  //agregar tarea a la agenda
  const agregarTarea = (e) => {
    let tareaNueva = {
      orden: orden,
      dia: diaEvento,
      tarea: e
    }

    if (eventos.some(evento =>  evento.orden === orden)) {
      setModalDiaRepetido(true);
    } else {
      const OrganizarEventos = ([...eventos, tareaNueva]);
      OrganizarEventos.sort((a, b) => a.orden - b.orden);
      setEventos(OrganizarEventos);
      setModal(false);
    }
  }
  
  //abrir edicion en la agenda
  const editar = (diaEditar, tareaEditar) => {
    setModalEditar(true);
    setDiaTextoTarea({dia: diaEditar, tarea: tareaEditar})
  }

  //editar agenda
  const editarAgenda = (texto, orden) =>{
    const nuevaTarea = eventos.map(e=> {
      if (e.orden === orden) {
       return { ...e, tarea: texto };
      }
      return e;
    });
    setEventos(nuevaTarea);
    setModalEditar(false);
  }

  //borrar
  const borrar = (orden) => {
    const confirmarBorrado = window.confirm("¿Seguro de borrar? ");
    if (confirmarBorrado) {
      const tareaBorrada = eventos.filter(tarea => tarea.orden !== orden);
      setEventos(tareaBorrada);
    }
  }

  return (
    <div className="contenedor">
      <Calendario agregarTarea={modalDia}/>
      {/* modal calendario */}
      <Modal modalVisible={modal} setModalVisible={setModal} contenido={<ContenidoModalAgregarTarea dia={diaEvento} agregarTarea={agregarTarea} modal={modal}/>} />
      <Agenda tareas={eventos} editar={editar} borrar={borrar}/>
      {/* modal dia repetido */}
      <Modal modalVisible={modalDiaRepetido} setModalVisible={setModalDiaRepetido} contenido={<ContenidoModalDiaRepetido dia={diaEvento} setModal={setModal} setModal2={setModalDiaRepetido}/>}/>
      {/* modal editar */}
      <Modal modalVisible={modalEditar} setModalVisible={setModalEditar} contenido={<ContenidoModalEditar editarAgenda={editarAgenda} modalEditar={modalEditar} diaTextoTarea={diaTextoTarea}/>}/>
    </div>
  )
}