import React from "react";
import Estilos from "./Barra_abajo.module.css";
import handjob from "./imagenes/handjob.gif";
import Main_character from './imagenes/Main_character.png';
import Estadisticas from "./Estadisticas";
import First_change from './imagenes/First_change.png'
import First_cross from './imagenes/First_cross.png'
import Imagen from "./imagenes/Imagen.png"
import Makeup from "./imagenes/Makeup.png";
import useEffect from 'react';

export default class Barra_abajo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bimbofication: 0,
      Handjob: 0,
      Boobs: 0,
      Ass: 0,
      Current_State: "Straight guy",
      Bimbo_coins: 0,
      Bonus_actual: 1,
      get_all: {},
    };
  }

  render() {
    return (
      <div className={Estilos.contenido}>
        <div>
          <table>
            <tr>
              <td>
                {" "}
                <img src={handjob} className={Estilos.handjob} />
              </td>
              <td><Estadisticas Values = {this.props.Valores} /></td>
              <td className = {Estilos.central_contenido}></td>
              <td><img src = {Makeup} className = {Estilos.main_character}/></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
