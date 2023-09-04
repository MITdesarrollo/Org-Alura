import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import './App.css'
import { Header } from './components/header/Header'
import { Formulario } from './components/form/Form'
import { MiOrg } from './components/miOrg/MiOrg'
import { Team } from './components/team/Team'
import { Footer } from './components/footer/Footer'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [collaborators, setCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    team: "Programacion",
    photo: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondon",
    position: "Desarrollo de sofware e Instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    position: "Instructora",
    fav: true
  },
  {
    id: uuid(),
    team: "Programacion",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    position: "Head Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    team: "Innovacion y Gestion",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Harland Lohora",
    position: "Instructor",
    fav: true
  }
  ])
  const [teams, setTeams] = useState([
    { id: uuid(), title: "Programacion", colorBg: "#D9F7E9", colorLine: "#57C278" },
    { id: uuid(), title: "Front End", colorBg: "#E8F8FF", colorLine: "#82CFFA" },
    { id: uuid(), title: "Data Science", colorBg: "#F0F8E2", colorLine: "#A6D157" },
    { id: uuid(), title: "Devops", colorBg: "#FDE7E8", colorLine: "#E06B69" },
    { id: uuid(), title: "UX y Diseño", colorBg: "#FAE9F5", colorLine: "#DB6EBF" },
    { id: uuid(), title: "Movil", colorBg: "#FFF5D9", colorLine: "#FFBA05" },
    { id: uuid(), title: "Innovacion y Gestion", colorBg: "#FFEEDF", colorLine: "#FF8A29" },
  ]);
//  const [ fav, setFav] = useState()

  //actualizar color de team
  const handlerColor = (color, id) => {
    const newTeams = teams.map((team) => {
      if (team.id === id) {
        team.colorLine = color
      }
      return team;
    })
    setTeams(newTeams);
  }

  const like = (id) =>{
    const likeCollaborators = collaborators.map((collaborator) => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    })
    setCollaborators(likeCollaborators)
    }
  
  //se oculta o no el form
  const newShowForm = () => {
    setShowForm(!showForm)
  }
  //registrar colaborador
  const registerCollaborators = (collaborator) => {
    console.log("nuevo colaborador", collaborator);
    //aca va el spread, para no remplazar los datos anteriores y mandar el nuevo colaborador q recibe la fn
    setCollaborators([...collaborators, collaborator])
  }
  //elminiar colaborador
  const deleteCollaborator = (id) => {
    console.log("eliminar colaborador", id);
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)
    setCollaborators(newCollaborators)
  }
  //Crear team
  const handlerTeam = (newTeam) => {
    setTeams([... teams, {... newTeam, id:uuid()}])
  }
  
 
  return (
    <>
      <Header />
      {showForm && <Formulario
        teams={teams.map((team) => team.title)}
        registercollaborators={registerCollaborators}
        handlerTeam={handlerTeam}
      />
      }
      <MiOrg newShowForm={newShowForm} />
      {teams.map((el) => <Team
        data={el}
        key={el.title}
        collaborators={collaborators.filter(collaborator => collaborator.team === el.title)}
        deletecollaborator={deleteCollaborator}
        handlerColor={handlerColor} 
        like={like}  
      />)}
      <Footer />
    </>
  )
}

export default App;
