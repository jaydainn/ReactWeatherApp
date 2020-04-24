import React from 'react'
import Header from "./components/header"
import ProjectData from "./data/MyProjects"
import ProjectCard from "./components/ProjectCard"

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: ProjectData

    }
  }

  

  
  render() {
    const Projects = this.state.data.map((element) => {
      return <ProjectCard key={element.id} data={element} />
    })
    return (
      <div>
        <Header />
        <div className="row">
        {Projects}
        </div>
        
      </div>
    )

  }


}

export default App
