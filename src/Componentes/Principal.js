import React from "react";
import Estilos from "./Principal.module.css";
import BarraAbajo from "./BarraAbajo";
import BarraDerecha from "./BarraDerecha";
import Vainilla_riley from "./imagenes/Vainilla_riley.jpg";
import Compu from "./imagenes/Compu.png";
import Testing from "./imagenes/Testing.jpg";

//Página principal, acá se renderizan todos los demás componentes. La mayoría de las variables que progresan con el tiempo irán acá

export default class Pagina extends React.Component {
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
      Images: [Testing, Vainilla_riley],
      Image_pos: 0,
      get_all: {},
    };
  }

  // Una vez el componente se renderiza, empieza el loop de monedas y el que actualiza las imagenes en pantalla

  componentDidMount() {
    this.timer = this.Updating();
    this.loop = this.Looping();
  }

  // -- Loop de monedas 
  Up_coins = (valor) => {
    this.setState({ Bimbo_coins: parseInt(this.state.Bimbo_coins + valor) });
    console.log(this.state.Bimbo_coins);
  };

  Updating = () => {
    setInterval(() => {
      this.Up_coins(this.state.Bonus_actual);
    }, 10);
  };
  // -- Utiliza el "Bonus Actual" para aumentar la cantidad de monedas como corresponda 
  

  //Cambia el bonus
  Update_bonus(num) {
    this.setState({ Bonus_actual: this.state.Bonus_actual + num });
  }

  //Modifica el parametro "Bonus Actual" y resta el coste de la mejora a las monedas totales
  Cambio_coins = (Upgrade, Minus) => {
    this.setState({
      Bonus_actual: this.state.Bonus_actual + this.state.Bonus_actual * Upgrade,
      Bimbo_coins: this.state.Bimbo_coins - Minus,
    });
  };


  // Loop del cambio de foto
  Looping(){
    setInterval(()=>{

      let imagen = document.getElementById('foto');
      imagen.style.opacity = 1;


      if(this.state.Image_pos < 1){
        this.setState({Image_pos: this.state.Image_pos + 1})
      }
      else{
        this.setState({Image_pos: 0})
      }
      setTimeout(()=>{imagen.style.opacity = 0},5000)
    },6000)
  }

  //Renderizado del cambio de fotos

  Display_images(pos) {
    return (

        <img id = 'foto' src={this.state.Images[pos]} className={Estilos.fondo_compu} alt = {""}></img>
    );
  }

  render() {

    return (
      <div className={Estilos.contenido}>
        <div className="row">
          <div className="col-md-9 col-sm-7">
            <div className={Estilos.imagenes_compu}>
              <div>
                <img src={Compu} className={Estilos.computador} alt = {""}></img>
                {this.Display_images(this.state.Image_pos)    /* Llama a la función de renderizado*/}
              </div>
              
            </div>
          </div>
          <div className="col-md-3 col-sm-5">
            
            <BarraDerecha
              Cambio_coins={this.Cambio_coins}  /* La función de Cambio de monedas es ahora utilizable por este componente hijo*/
              current_coins={this.state.Bimbo_coins} 
            />

          </div>
        </div>
        <div>
          <BarraAbajo Valores={this.state} /* Se llama al componente "BarraAbajo" */ /> 
        </div>
      </div>
    );
  }
}
