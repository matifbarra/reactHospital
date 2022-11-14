import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>

      {pacientes && pacientes.length ? (
        <>
        <h2 className='text-2xl font-bold text-white lg:md-2/5 text-center'>Pacientes</h2>
            <p className='text-lg font-bold text-gray-400 mt-5 text-center mb-5'>
              Administra Tus Pacientes {""} <span className='text-gray-200'>Aqui</span>
            </p>
            {pacientes.map((paciente) => (
              
              <Paciente
              key={paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
              
              />
            ))}
        </>
      

      ) : (
        <>
        <h2 className='text-2xl font-bold text-white lg:md-2/5 text-center'>Pacientes</h2>
            <p className='text-lg font-bold text-gray-400 mt-5 text-center mb-5'>
              No tienes Pacientes {""} <span className='text-gray-200'>Todavia</span>
            </p>
        </>

      )}
      
  
    </div>
    
  )
}

export default ListadoPacientes