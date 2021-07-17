import React from "react";
import Estilos from "./BarraAbajo.module.css";
import handjob from "./imagenes/handjob.gif";
import Estadisticas from "./Estadisticas";
import Makeup from "./imagenes/Makeup.png";

export default class BarraAbajo extends React.Component {
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
                <img src={handjob} className={Estilos.handjob} alt = {""} />
              </td>
              <td>
                <Estadisticas Values={this.props.Valores} />
              </td>
              <td className={Estilos.central_contenido}></td>
              <td>
                <img src={Makeup} className={Estilos.main_character} alt = {"a"} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
