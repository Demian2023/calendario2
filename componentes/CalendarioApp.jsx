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

  //buscar en localstorage los eventos
  const [eventos, setEventos] = useState(() => { 
    const eventosAlmacenados = localStorage.getItem('eventos');
    return eventosAlmacenados ? JSON.parse(eventosAlmacenados) : [];
  });

  // guardar en localstorage
  useEffect(() => {
      localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]); 
  
  // modal para calendario dias
  const [modal, setModal] = useState(false); 

  //recuperar el dia y abrir modal para agregar tareas
  const modalDia = (e) => {  
    const dia = e.target.textContent;
    setDiaEvento(dia);
    setModal(true);
  }

  // modal para dia repetido
  const [modalDiaRepetido, setModalDiaRepetido] = useState(false);

  //agregar tarea a la agenda
  const agregarTarea = (e) => {
    let tareaNueva = {
      dia: diaEvento,
      tarea: e
    }

    if (eventos.some(evento =>  evento.dia === diaEvento)) {
      setModalDiaRepetido(true);
    } else {
      const OrganizarEventos = ([...eventos, tareaNueva]);
      OrganizarEventos.sort((a, b) => a.dia - b.dia);
      setEventos(OrganizarEventos);
      setModal(false);
    }
  }

  // modal para edicion
  const [modalEditar, setModalEditar] = useState(false);

  //abrir edicion en la agenda
  const edicion = () => {
    setModalEditar(true);
  }

  //editar agenda
  const editarAgenda = (editarDia) =>{
    alert(editarDia);
  }

  return (
    <div className="contenedor">
      <Calendario agregarTarea={modalDia}/>
      {/* modal calendario */}
      <Modal modalVisible={modal} setModalVisible={setModal} contenido={<ContenidoModalAgregarTarea dia={diaEvento} agregarTarea={agregarTarea} modal={modal}/>} />
      <Agenda tareas={eventos} editar={edicion}/>
      {/* modal dia repetido */}
      <Modal modalVisible={modalDiaRepetido} setModalVisible={setModalDiaRepetido} contenido={<ContenidoModalDiaRepetido dia={diaEvento} setModal={setModal} setModal2={setModalDiaRepetido}/>}/>
      {/* modal editar */}
      <Modal modalVisible={modalEditar} setModalVisible={setModalEditar} contenido={<ContenidoModalEditar editarAgenda={editarAgenda} modalEditar={modalEditar}/>}/>
    </div>
  )
}

