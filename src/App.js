import React from 'react'
import { Spinner } from "reactstrap"
import WeatherCard from "./components/WeatherCard"
const API_KEY = "c6facafece457d4cbb494c629a9804e9"
const style = {
  container:{
    paddingTop: 100
  }
}
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
      data: null

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    let myinput = event.target.value;
    this.setState({ input: myinput })

  }


   handleClick(){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=query&appid=key`
    url = url.replace("query",this.state.input.toLowerCase());
    url = url.replace("key",API_KEY)
    fetch(url)
      .then((response) => {
       return response.json()
      })
      .then((data) => {
        this.setState({data: data})
        console.log(this.state.data)
      } )
      
    }


  




  render() {
    if(this.state.data != null){
      return (
        <div style={style.container} className="container text-center">
        <div className="input-group mb-3 text-center">
          <input onChange={this.handleChange} type="text" className="form-control" placeholder="City Name" / >
            <div className="input-group-append">
              <button onClick={this.handleClick} className="btn btn-warning" type="button"><img height="16" width="16" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/></button>
            </div>
            </div>
            <WeatherCard data = {this.state.data} />
            </div>
       
        
      )

    }
    else {
      return (
        <div style={style.container} className=" container text-center">
        <div className="input-group mb-3 text-center">
          <input onChange={this.handleChange} type="text" className="form-control" placeholder="City Name" / >
            <div className="input-group-append">
              <button onClick={this.handleClick} className="btn btn-warning" type="button"><img height="16" width="16" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/></button>
            </div>
            </div>
            
            </div>
       
        
      )

    }
    
   
  
  
    
  }

    
   

  


}

export default App
