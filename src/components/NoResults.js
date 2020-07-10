import React from "react"
import {Jumbotron} from "reactstrap"

const NoResult = () => {
    const style = {
        jumbotron:{
            backgroundColor:"#ffffff"
        }
    }
    return (
        <div className="text-center">
        <Jumbotron style={style.jumbotron} className="text-center rounded">
            <h1>No results</h1>
           
            

        </Jumbotron>
        </div>
    )

}

export default NoResult