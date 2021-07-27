import React from "react";
import Estilos from "./BarraAbajo.module.css";
import handjob from "./imagenes/handjob.gif";
import Estadisticas from "./Estadisticas";
import Makeup from "./imagenes/Makeup.png";
import Bimbofication from "./imagenes/Bimbofication.png";
import Selfie from "./imagenes/Selfie.png";
import First_main from "./imagenes/First_main.png";
import First_maindos from "./imagenes/First_maindos.png"

export default class BarraAbajo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Imagenes: [First_main,First_maindos,Makeup,Bimbofication],
    };
  }

  Character_transformation(Transformation){
    return(
      <img src={this.state.Imagenes[Transformation]} className={Estilos.main_character} alt = {"a"} />
    )
  }



  render() {
    
    return (
      <div className={Estilos.contenido}>
        <div>
          <table>
            <tr>
              <td>
                {" "}
                <img src={handjob} className={Estilos.handjob} alt = {""}  />
              </td>
              <td>
                <Estadisticas Values={this.props.Valores} />
              </td>
              <td className={Estilos.central_contenido}></td>
              <td>
                {this.Character_transformation(this.props.Valores.Bimbofication)}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
