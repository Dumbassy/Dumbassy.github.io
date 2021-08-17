import React from "react";
import Estilos from "./Mouseover.module.css";


export default class Mouseover extends React.Component {

    render () {
        return(
            <div className={Estilos.caja}>
              <div>Efectivamente esto debería verse bien</div>
            </div>
        )
    }
}