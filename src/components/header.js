import React from "react"
import { Jumbotron } from 'reactstrap'
const style = {
    jumbotron: {
        background: "#2C3E50",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #4CA1AF, #2C3E50)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #4CA1AF, #2C3E50)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0

    },

    h1:{
        color: "#d9d9d9",
        fontSize: 80

    }



}

class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Jumbotron style={style.jumbotron} >
                <h1 style={style.h1} className="text-center">Jeremy Dain</h1>
            </Jumbotron>
        )
    }


}




export default Header