import { useState, useEffect } from 'react'
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState(""); 
  const [familiar, setFamiliar] = useState("");
  const [email, setEmail] = useState(""); 
  const [alta, setAlta] = useState(""); 
  const [diagnostico, setDiagnostico] = useState(""); 

  const [error, setError] = useState(false)

  useEffect(()=> {
    if (Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setFamiliar(paciente.familiar)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setDiagnostico(paciente.diagnostico)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  let i = 0
  const handleSubmit = (e) => {
    e.preventDefault()
  //Validacion Formulario
  if([nombre, familiar, email, alta, diagnostico].includes("")) {
    setError(true)
    return;

  } 

   setError(false)

   setPacientes(nombre)

   //Objeto Paciente
   const objetoPaciente= {
    nombre,
    familiar,
    email,
    alta,
    diagnostico,
    
   }

  if (paciente.id) {
    //Editar Paciente
    objetoPaciente.id = paciente.id
    const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
    setPacientes(pacientesActualizados)
    setPaciente({})
    alert("Paciente Actualizado Con Éxito!")

   } else {
    // Nuevo Paciente
    objetoPaciente.id = generarId()
    setPacientes([...pacientes, objetoPaciente])
   }

   
    i++
    console.log(i)

    //Reiniciar Form
    setNombre("")
    setFamiliar("")
    setEmail("")
    setAlta("")
    setDiagnostico("")
  }

  return (
  <div className='md:w-1/2'>
      <h1 
      className='text-2xl font-bold text-white lg:md-2/5 text-center'>Formulario
      </h1>
      <p className='text-lg font-bold text-gray-400 mt-5 text-center mb-5'>
        Añade Pacientes {""} <span className='text-gray-200'>completando el formulario!</span>
      </p>
      
      <form
      onSubmit={handleSubmit}
      className='bg-white rounded-md py-10 px-5 mb-10 mx-5'>
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        <div>
          <label htmlFor='paciente' className='block text-gray-800 font-bold uppercase'>
            Nombre Paciente
          </label>
          <input id='paciente' className='mb-5 w-full border-2 rounded-md p-2 mt-2' type="text" placeholder='Escribe el Nombre del Paciente'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='familiar' className='block text-gray-800 font-bold uppercase'>
            Nombre Familiar
          </label>
          <input id='familiar' className='mb-5 w-full border-2 rounded-md p-2 mt-2' type="text" placeholder='Escribe el Nombre del Familiar'
          value={familiar}
          onChange={(e) => setFamiliar(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='email' className='block text-gray-800 font-bold uppercase'>
            Email
          </label>
          <input id='email' className='mb-5 w-full border-2 rounded-md p-2 mt-2' type="email" placeholder='Escribe el Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='alta' className='block text-gray-800 font-bold uppercase'>
            Fecha Alta
          </label>
          <input id='alta' className='mb-5 w-full border-2 rounded-md p-2 mt-2' type="date"
          value={alta}
          onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='diagnostico' className='block text-gray-800 font-bold uppercase'>
            Diagnóstico
          </label>
          <textarea id='diagnostico' className='mb-5 w-full border-2 rounded-md p-2 mt-2' type="text" placeholder='Escribe el Diagnóstico del Paciente'
          value={diagnostico}
          onChange={(e) => setDiagnostico(e.target.value)}
         />
        </div>

        <input className='w-full text-white rounded-xl font-bold uppercase p-2 bg-indigo-600 hover:bg-indigo-800 cursor-pointer transition-all' type="submit"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>

  </div>
    
  )
}

export default Formulario