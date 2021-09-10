import React from "react"; 
 
class Historial extends React.Component{

    render(){
        const { record, previousOption} = this.props
        return(
            <div className="recordatorio">
                <h3>Selección anterior: {previousOption}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {record.map((historia, i) => (
                        <li key={String(i)}>{historia}</li>
                    ))}
                </ul>
            </div>)
         }
    }
export default Historial;