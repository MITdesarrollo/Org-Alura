import {  useState } from 'react'

import './App.css'
import { Header } from './components/header/Header'
import { Formulario } from './components/form/Form'
import { MiOrg } from './components/miOrg/MiOrg'

function App() {
  const [showForm, setShowForm] = useState(true)

  const newShowForm = () => {
    setShowForm(!showForm) 
  }

  return (
    <>
      <Header />
      { showForm && <Formulario />}
      <MiOrg newShowForm={newShowForm}/>
    </>
  )
}

export default App;
