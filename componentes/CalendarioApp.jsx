import '../estilos/CalendarioApp.css'
import { useState, useEffect } from 'react';
import { Calendario } from './Calendario'
import { Modal } from './Modal'
import { ContenidoModalAgregarTarea } from './ContenidoModalAgregarTarea';

export const CalendarioApp = ()=> {

  const [diaEvento, setDiaEvento] = useState("");

  const [eventos, setEventos] = useState(() => { //buscar en localstorage los eventos
    const eventosAlmacenados = localStorage.getItem('eventos');
    return eventosAlmacenados ? JSON.parse(eventosAlmacenados) : [];
  });

  useEffect(() => {
      localStorage.setItem('eventos', JSON.stringify(eventos));
  }, [eventos]); // guardar en localstorage
  
  const [modal, setModal] = useState(false); // modal para calendario dias

  const modalDia = (e) => {  //recuperar el dia y abrir modal para agregar tareas
    const dia = e.target.textContent;
    setDiaEvento(dia);
    setModal(true);
  }

  const agregarTarea = (e) => {
    setEventos([...eventos, e]);
    console.log(eventos);
  }

  return (
    <div className="contenedor">
      <Calendario agregarTarea={modalDia}/>
      <Modal modalVisible={modal} setModalVisible={setModal} contenido={<ContenidoModalAgregarTarea dia={diaEvento} agregarTarea={agregarTarea}/>} />
    </div>
  )
}

