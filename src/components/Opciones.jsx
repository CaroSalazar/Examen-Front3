import React from "react"; 
 
class Opciones extends React.Component{

    render(){
      const { updateOptions, currentOption } = this.props
        return(
            <div className = "opciones">
              <div className="opcion">
                    <button id="A" className="botones" onClick={(e) => updateOptions(e.target.id)}>A</button>
                    <h2>{currentOption.opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={(e) => updateOptions(e.target.id)}>B</button>
                    <h2>{currentOption.opciones.b}</h2>
                </div>
            </div>
        )
    }
}
export default Opciones; 