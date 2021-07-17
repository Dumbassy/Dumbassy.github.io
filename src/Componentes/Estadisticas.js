import React from "react";
import Estilos from "./Barra_abajo.module.css";
export default class Estadisticas extends React.Component {
  constructor(props) {
    super(props);
  }
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
              <td>Status : {this.props.Values.Current_State}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
