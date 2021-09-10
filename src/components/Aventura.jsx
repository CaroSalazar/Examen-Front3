import React from "react"; 
import data from "./data.json";
import Historial from "./Historial.jsx";
import Opciones from "./Opciones.jsx";

let record = []; 
 
class Aventura extends React.Component{

    constructor(){
        super();
        this.state = {
            prevSelection: "",
            option: data[0],
            level : 2
        }
    }
    
    handleClick = (option) => {
        this.setState({level: this.state.level + 1})
        let id = this.state.level + option.toLowerCase();
        let newOption = data.find(aventura => aventura.id === id)
        if(this.state.prevSelection){
            record = [...record, this.state.prevSelection]
        }
        this.setState({option: newOption, prevSelection: option})
    }

    shouldComponentUpdate() {
        if (this.state.level > 5) {
          alert("Fin de la aventura")
          return false
        } else {
          return true
        }
      }

    render(){
        return(
            <div className="App">
                  <div className="layout">
                    <h1 className="historia">{this.state.option.historia}</h1>
                    <Opciones updateOptions={this.handleClick} currentOption={this.state.option} />
                    <Historial record={record} previousOption={this.state.prevSelection}/>
                  </div>
            </div>
        )
    }
}

export default Aventura; 