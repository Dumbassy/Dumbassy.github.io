import React from "react";
import Estilos from "./BarraAbajo.module.css";
export default class Estadisticas extends React.Component {
 // Simplemente muestra el estado actual de las variables
  render() {
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td className = {Estilos.espaciando}>Bimbofication : {this.props.Values.Bimbofication}</td>
              <td>Bimbo coins : {this.props.Values.Bimbo_coins}</td>
            </tr>
            <tr>
              <td>Handjob : {this.props.Values.Handjob}</td>
              <td>Boobs : {this.props.Values.Boobs}</td>
            </tr>
            <tr>
              <td>Ass : {this.props.Values.Ass}</td>
              <td>Bonus : {this.props.Values.Bonus_actual}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
