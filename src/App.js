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
   
    return (
      <div>
        <Header />
        <h1>{this.state.data}</h1>
      </div>
    )

  }


}

export default App
