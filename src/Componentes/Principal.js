import React from "react";
import Estilos from "./Principal.module.css";
import BarraAbajo from "./BarraAbajo";
import BarraDerecha from "./BarraDerecha";
import Vainilla_riley from "./imagenes/blackwa.webp";
import Compu from "./imagenes/Compu.png";
import Testing from "./imagenes/desires.webp";
import Spiral from "./imagenes/barbie.gif"
import Banged from "./imagenes/bimbo-hypno2.gif"
import Surprise from "./imagenes/giiif.webp"

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
      Images: [Testing,Spiral, Vainilla_riley,Spiral,Banged,Spiral,Surprise,Spiral],
      Text: ["Stupid", "Whore", "Bimbo", "Dumb","Obey","Cock Sucker"],
      Image_pos: 0,
      Display_0: 0,
      Display_1: 0,
      Display_2: 0,
      Display_3: 0,
      Display_4: 0,
      Display_5: 0,
      Display_6: 0,
      Display_7: 0,
      Display_8: 0,
      Pos_loop: 0,
      Tiempo_loop:2000,
      Tiempo_oppacity:50,
      
    };
    this.Cambio_coins = this.Cambio_coins.bind(this);
    this.Bimboficar = this.Bimboficar.bind(this);
    this.Clicking_dick =  this.Clicking_dick.bind(this);

  }

  // Una vez el componente se renderiza, empieza el loop de monedas y el que actualiza las imagenes en pantalla

  componentDidMount() {
    this.timer = this.Updating();
    this.loop = this.Looping();
  }
  componentWillUnmount() {
  clearInterval(this.timer);
  }


  // -- Loop de monedas 
  Up_coins = (valor) => {
    this.setState({ Bimbo_coins: parseInt(this.state.Bimbo_coins + valor) })
    if(this.state.Bimbo_coins > 500 && this.state.Display_1 == 0){this.setState({ Display_1: 1})}
    if(this.state.Bimbo_coins > 1500 && this.state.Display_2 == 0){this.setState({Display_2: 1})}
    if(this.state.Bimbo_coins > 5000  && this.state.Display_3 == 0){this.setState({Display_3: 1})}
    if(this.state.Bimbo_coins > 1400){}
    if(this.state.Bimbo_coins > 11400 && this.state.Display_5 == 0){this.setState({Display_5:1})}
    if(this.state.Bimbo_coins > 11400){}
    if(this.state.Bimbo_coins > 11400){}
    if(this.state.Bimbo_coins > 11400){}

  };

  Updating = () => {
    setInterval(() => {
      this.Up_coins(this.state.Bonus_actual);
    }, 1000);
  };
  // -- Utiliza el "Bonus Actual" para aumentar la cantidad de monedas como corresponda 
  



  //Modifica el parametro "Bonus Actual" y resta el coste de la mejora a las monedas totales
  Cambio_coins = (Upgrade, Minus) => {
    let Suma = this.state.Bonus_actual +this.state.Bonus_actual*Upgrade;
    Suma = parseFloat(Suma.toFixed(2));
    this.setState({ Bonus_actual: Suma });
    this.setState({
      Bonus_actual: Suma,
      Bimbo_coins: this.state.Bimbo_coins - Minus,
    });
  };

  Bimboficar(Value){
    let Suma = this.state.Bimbofication + Value;
    Suma = parseFloat(Suma.toFixed(2));
    
    this.setState({Bimbofication: Suma});
  }




  // Loop del cambio de foto
  Looping(){
    setInterval(()=>{

      let imagen = document.getElementById('foto');
      imagen.style.opacity = 1;

      if(this.state.Image_pos < 7){
        this.setState({Image_pos: this.state.Image_pos + 1})
      }
      else{
        this.setState({Image_pos: 0})
      }
      setTimeout(()=>{imagen.style.opacity = 0.4},this.state.Tiempo_oppacity)
    },this.state.Tiempo_loop)
  }

  //Renderizado del cambio de fotos

  Display_images(pos) {
    return (
        <div className={Estilos.contiene_loop}>
          <img src = {Compu}  className = {Estilos.computador}></img>
          <img id = 'foto' src={this.state.Images[pos]} className={Estilos.fondo_compu} alt = {""}></img>
          <div className = {Estilos.mensajes}><h1>{this.state.Text[pos]}</h1></div>
        </div>
    );
  }

  Clicking_dick(){
    this.setState({Bimbo_coins: this.state.Bimbo_coins + 1});
  }
  

  render() {
    return (
      <div className={Estilos.contenido}>
          <div className="cola">
            <div className={Estilos.imagenes_compu}  >  
                {this.Display_images(this.state.Image_pos)    /* Llama a la función de renderizado*/}
            </div>
          </div>
          <div className="barra">
            <BarraDerecha
              Bimboficar = {this.Bimboficar}
              Cambio_coins={this.Cambio_coins}  /* La función de Cambio de monedas es ahora utilizable por este componente hijo*/
              current_coins={this.state.Bimbo_coins}
              Display_1 = {this.state.Display_1}
              Display_2 = {this.state.Display_2}
              Display_3 = {this.state.Display_3}
              Display_5 = {this.state.Display_5}
              
            />

          </div>
        <div className={Estilos.abajito}>
          <BarraAbajo Valores={this.state} Bimbofication = {this.state.Bimbofication}
           Clicking_dick =  {this.Clicking_dick} /* Se llama al componente "BarraAbajo" */ /> 
        </div>
      </div>
    );
  }
}
