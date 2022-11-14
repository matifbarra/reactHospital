import React from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, familiar, email, alta, diagnostico, id} = paciente
  const handleEliminar = () =>{
    Swal.fire({
        title: '¿Estás Seguro De Eliminar Este Paciente?',
        text: "¡¡No Puedes Revertir Esta Acción!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaciente(id);  //llamar el prop y enviar el id
            Swal.fire(
            'Eliminado!',
            'Tu cita se ha eliminado.',
            'success'
            )
        }
    })
}

  return (
    <div className='bg-white rounded-md py-10 px-5 mb-10 ml-5 mx-3'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""} <span className='font-normal normal-case'>{nombre}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Familiar: {""} <span className='font-normal normal-case'>{familiar}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""} <span className='font-normal normal-case'>{email}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {""} <span className='font-normal normal-case'>{alta}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>Diagnóstico: {""} <span className='font-normal normal-case'>{diagnostico}</span>
          </p>

          <div className='flex justify-between'>
            <button 
            className='py-2 px-10 mt-10 bg-blue-400 hover:bg-blue-600 transition-all text-white rounded-md font-bold uppercase' type='button'
             onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button
            className='py-2 px-10 mt-10 bg-red-500 hover:bg-red-700 transition-all text-white rounded-md font-bold uppercase' type='button'
            onClick={handleEliminar}
            >Eliminar</button>
          </div>

        </div>
  )
}

export default Paciente