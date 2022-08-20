import React from "react";
import Estilos from "./BarraAbajo.module.css";
import handjob from "./imagenes/handjob.gif";
import Estadisticas from "./Estadisticas";
import Makeup from "./imagenes/Makeup.png";
import Bimbofication from "./imagenes/Bimbofication.png";
import hearth from "./imagenes/hearth.png";
import First_main from "./imagenes/First_main.png";
import First_maindos from "./imagenes/First_maindos.png"
import Hipnotizada from "./imagenes/Hipnotizada.png"

export default class BarraAbajo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Imagenes: [First_main,First_maindos,Makeup,Hipnotizada,Bimbofication],
      img: hearth,
      value: 0
    };
    this.Click_corazon = this.Click_corazon.bind(this);
  }

  Character_transformation(Transformation){
    if(Transformation - this.state.value == 1){
      this.setState({value: this.state.value + 1})
    }
    
    return(
      <img src={this.state.Imagenes[this.state.value]} className={Estilos.main_character} alt = {"a"} />
    )
  }
  Click_corazon = (e) => {
    var Imag = document.createElement("img");
    Imag.src = this.state.img;
    Imag.className = "subir_level";
    Imag.style.top= 80 + 'vh';
    Imag.style.left= 12 + 'vw';
    document.body.appendChild(Imag);
    Imag.addEventListener("animationend", function () {
    Imag.parentElement.removeChild(Imag);
    });
    var Image = document.createElement("img");
    Image.src = this.state.img;
    Image.className = "subir_level_dos";
    Image.style.top= 80 + 'vh';
    Image.style.left= 12 +'vw';

    document.body.appendChild(Image);
    Image.addEventListener("animationend", function () {
    Image.parentElement.removeChild(Image);
    });
  };



  render() {
    
    return (
      <div className={Estilos.conntenido}>
          <div className = "col-md-3"><button  className ={Estilos.btnn} onClick = {() =>{
            this.props.Clicking_dick()
            this.Click_corazon();
          }}><img src = {handjob} className ={Estilos.handjob}></img></button></div>
          <div className = "col-md-4 padiando"><Estadisticas Values={this.props.Valores}/></div>
          <div className = "col-md-5 alin">{this.Character_transformation(this.props.Valores.Bimbofication)}</div>
        </div> 
    );
  }
}
