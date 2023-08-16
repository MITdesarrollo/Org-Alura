import {  useState } from 'react'

import './App.css'
import { Header } from './components/header/Header'
import { Formulario } from './components/form/Form'
import { MiOrg } from './components/miOrg/MiOrg'
import { Team } from './components/team/Team'

function App() {
  const [showForm, setShowForm] = useState(true)
  const [collaborators, setCollaborators] = useState([]) //Comienzo este estado con un arreglo vacio

  //se oculta o no el form
  const newShowForm = () => {
    setShowForm(!showForm) 
  }
//registrar colaborador
const registerCollaborators = (collaborator) => {
   console.log("nuevo colaborador", collaborator);
   //aca va el spread, para no remplazar los datos anteriores y mandar el nuevo colaborador q recibe la fn
   setCollaborators([... collaborators, collaborator])
}
  //lista equipos
  const teams = [
    {title:"Programacion", colorBg:"#D9F7E9 ", colorLine: "#57C278 "},
    {title:"Front End", colorBg:"#E8F8FF", colorLine: "#82CFFA"},
    {title:"Data Science", colorBg:"#F0F8E2", colorLine: "#A6D157"},
    {title:"Devops", colorBg:"#FDE7E8", colorLine: "#E06B69"},
    {title:"UX y Diseño", colorBg:"#FAE9F5", colorLine: "#DB6EBF"},
    {title:"Movil", colorBg:"#FFF5D9", colorLine: "#FFBA05"},
    {title:"Innovacion y Gestion", colorBg:"#FFEEDF", colorLine: "#FF8A29"},
]

  return (
    <>
      <Header />

      { showForm && <Formulario 
      teams={teams.map((team)=>team.title)}
      registercollaborators={registerCollaborators}
      />
      }
      <MiOrg newShowForm={newShowForm}/>

      {teams.map((el)=><Team
       data={el} 
       key={el.title}
       collaborators={collaborators.filter( collaborator => collaborator.team === el.title)}
      /> )}
    </>
  )
}

export default App;
