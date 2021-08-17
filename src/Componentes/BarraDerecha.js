import React from "react";
import Estilos from "./BarraAbajo.module.css";
import Sitting from "./imagenes/Sitting.png";
import Testing_title from "./imagenes/Testing_title.png";
import Ejercicios from "./imagenes/Ejercicios.png";
import Mouseover from "./Mouseover"
import Maquillaje from "./imagenes/Maquillaje.png"
import Selfie from "./imagenes/Selfie.png"
import Tryning from "./imagenes/Tryning.png"

// Constantes de upgrade
const Network_searching = {
  Level: [
    "Casual",
    "Vainilla Porn",
    "Big cock porn",
    "GangBang",
    "Sissy Porn",
    "Hypno Porn",
    "Brainwashing",
    "Dumb Bimbo",
  ],
  Bonus_level: [0,0.3, 0.9, 1.5, 3, 5, 12, 19,22],
  Tam: 8,
  Precio: [0,50, 130, 370, 840, 1550, 5000, 12000, 190000],
};
const Beauty_care = {
  Level: ["Nothing","Basis", "Lips", "Eyes", "Hair Color"],
  Bonus_level: [0, 2.5, 3.7, 4,5],
  Tam: 4,
  Precio: [0, 2500, 3700, 15000, 35000],
};

const Crossdress = {
  Level: ["Nothing","Stocking", "Bra", "Panties", "Girly clothes", "Bitchy clothes"],
  Bonus_level: [0, 0.5, 1, 1.5, 2.5, 3.5],
  Tam: 6,
  Precio: [0, 3000, 12000, 48000, 65000, 80000],
};

const Shape = {
  Level: ["Nothing","Diet", "Abdomen", "Squads", "Hormnonnes"],
  Bonus_level: [0, 1, 1.5, 2.5, 4],
  Tam: 4,
  Precio: [0, 6000, 12000, 48000, 90000, 120000],
};
const Sissify = {
  Level: ["Nothing","Cage", "Buttplug", "Dildo", "Reduce dick"],
  Bonus_level: [0, 2, 2.5, 3, 12],
  Tam: 5,
  Precio: [0, 15000, 43000, 90000, 350000],
};
const Training = {
  Level: ["Nothing","Handjob", "Blowjob", "Anal Sex"],
  Bonus_level: [0, 4, 6, 8],
  Tam: 4,
  Precio: [0, 250000, 500000, 1000000],
};

const Bimbofication = {
  Level: ["Nothing","Implant, Lips"],
  Bonus_level: [0, 5, 5],
  Tam: 3,
  Precio: [1000000, 1000000],
};
const Work = {
  Level: ["Nothing","Handjob", "Blowjob", "Sex", "Whore", "Free Whore"],
  Bonus_level: [0, 5, 5, 5, 5, 7, 12],
  Tam: 5,
  Precio: [1000000, 1000000, 1000000, 1000000, 1500000, 2500000],
};
const Complete_Bimbo = {
  Level: ["Nothing","IQ Drop", "No thinking", "No brain"],
  Bonus_level: [0, 10, 15, 20],
  Tam: 4,
  Precio: [0, 2000000, 3000000, 4000000],
};

export default class BarraDerecha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bimbo_buy: [
        Network_searching,
        Beauty_care,
        Crossdress,
        Shape,
        Sissify,
        Training,
        Bimbofication,
        Work,
        Complete_Bimbo,
      ],
      Current_level_0: 0,
      Current_level_1: 0,
      Current_level_2: 0,
      Current_level_3: 0,
      Current_level_4: 0,
      Current_level_5: 0,
      Current_level_6: 0,
      Current_level_7: 0,
      Current_level_8: 0,

    };
  }





  Buttons(Pos) {
    if (Pos === 0) {
      return (
        <button
          className={Estilos.Derecha_button}
          onClick={(e) => {
            if (
              this.props.current_coins <
              this.state.Bimbo_buy[0].Precio[this.state.Current_level_0 + 1]
            ) {
              console.log("Error");
              return;
            }
            if (
              this.state.Current_level_0 !==
              this.state.Bimbo_buy[0].Tam
            ) {
              if(this.state.Current_level_0 > 0){
                this.props.Bimboficar(0.2);
              }
              this.setState({
                Current_level_0: (this.state.Current_level_0 += 1),
              });
              console.log(
                this.state.Bimbo_buy[0].Level[this.state.Current_level_0]
              );
              this.props.Cambio_coins(
                this.state.Bimbo_buy[0].Bonus_level[this.state.Current_level_0],
                this.state.Bimbo_buy[0].Precio[this.state.Current_level_0]
              );

            } else {
              return;
            }
          }}
        >
          <div>
            <img src={Sitting} className={Estilos.tam_images} alt={""} />
            <span>
              {this.state.Bimbo_buy[0].Level[this.state.Current_level_0]}
            </span>
            <span className = {Estilos.precios}>BC : $ {this.state.Bimbo_buy[0].Precio[this.state.Current_level_0 + 1]} </span>
          </div>
        </button>
      );
    }
    else if (Pos === 1) {
      return(
      <button
        className={Estilos.Derecha_button}
        onClick={() => {
          if (this.props.current_coins < this.state.Bimbo_buy[1].Precio[this.state.Current_level_1 + 1]) {
            console.log("Error");
            return;
          }
          if (this.state.Current_level_1 !== this.state.Bimbo_buy[1].Tam) {
            this.setState({
              Current_level_1: (this.state.Current_level_1 += 1),
            });
            if(this.state.Current_level_0 > 0){
              this.props.Bimboficar(0.2);
            }
            this.props.Cambio_coins(
              this.state.Bimbo_buy[1].Bonus_level[this.state.Current_level_1],
              this.state.Bimbo_buy[1].Precio[this.state.Current_level_1]
            );
          } else {
            console.log("Algo pasó");
            return;
          }
        }}
      >
        <div>
          <img src={Maquillaje} className={Estilos.tam_images} alt={""} />
          <span>
            {this.state.Bimbo_buy[1].Level[this.state.Current_level_1 + 1]}
          </span>
          <span className = {Estilos.precios}>BC : $ {this.state.Bimbo_buy[1].Precio[this.state.Current_level_1 + 1]} </span>
        </div>
      </button>
      )}
      else if (Pos === 2) {
        return(
        <button
          className={Estilos.Derecha_button}
          onClick={() => {
            if (this.props.current_coins < this.state.Bimbo_buy[2].Precio[this.state.Current_level_2 + 1]) {
              console.log("Error");
              return;
            }
            if (this.state.Current_level_2 !== this.state.Bimbo_buy[2].Tam) {
              this.setState({
                Current_level_2: (this.state.Current_level_2 += 1),
              });
              if(this.state.Current_level_0 > 0){
                this.props.Bimboficar(0.2);
              }
              this.props.Cambio_coins(
                this.state.Bimbo_buy[2].Bonus_level[this.state.Current_level_2],
                this.state.Bimbo_buy[2].Precio[this.state.Current_level_2]
              );

            } else {
              console.log("Algo pasó");
              return;
            }
          }}
        >
          <div>
            <img src={Selfie} className={Estilos.tam_images} alt={""} />
            <span>
              {this.state.Bimbo_buy[2].Level[this.state.Current_level_2 + 1]}
            </span>
            <span className = {Estilos.precios}>BC : $ {this.state.Bimbo_buy[2].Precio[this.state.Current_level_2 + 1]} </span>
          </div>
        </button>
        )}
    else if (Pos === 3) {
      if(this.props.coins > 5000){this.setState({Display_3: this.state.Display_3 + 1})}
      return(
      
      <button
        className={Estilos.Derecha_button}
        onClick={() => {
          if (this.props.current_coins < this.state.Bimbo_buy[3].Precio[this.state.Current_level_3 + 3]) {
            console.log("Error");
            return;
          }
          if (this.state.Current_level_3 !== this.state.Bimbo_buy[3].Tam) {
            this.setState({
              Current_level_3: (this.state.Current_level_3 += 1),
            });
            if(this.state.Current_level_0 > 0){
              this.props.Bimboficar(0.2);
            }
            this.props.Cambio_coins(
              this.state.Bimbo_buy[3].Bonus_level[this.state.Current_level_3],
              this.state.Bimbo_buy[3].Precio[this.state.Current_level_3]
            );
          } else {
            console.log("Algo pasó");
            return;
          }
        }}
      >
        <div>
          <img src={Ejercicios} className={Estilos.tam_images} alt={""} />
          <span>
            {this.state.Bimbo_buy[3].Level[this.state.Current_level_3 + 1]}
          </span>
          <span className = {Estilos.precios}>BC : $ {this.state.Bimbo_buy[3].Precio[this.state.Current_level_3 + 1]} </span>
        </div>
      </button>
      
      )}
      else if (Pos === 5) {
        return(
        <button
          className={Estilos.Derecha_button}
          onClick={() => {
            if (this.props.current_coins < this.state.Bimbo_buy[5].Precio[this.state.Current_level_5 + 1]) {
              console.log("Error");
              return;
            }
            if (this.state.Current_level_5 !== this.state.Bimbo_buy[5].Tam) {
              this.setState({
                Current_level_5: (this.state.Current_level_5 += 1),
              });
              if(this.state.Current_level_0 > 0){
                this.props.Bimboficar(0.2);
              }
              this.props.Cambio_coins(
                this.state.Bimbo_buy[5].Bonus_level[this.state.Current_level_5],
                this.state.Bimbo_buy[5].Precio[this.state.Current_level_5]
              );
            } else {
              console.log("Algo pasó");
              return;
            }
          }}
        >
          <div>
            <img src={Tryning} className={Estilos.tam_images} alt={""} />
            <span>
              {this.state.Bimbo_buy[5].Level[this.state.Current_level_5]}
            </span>
            <span className = {Estilos.precios}>BC : $ {this.state.Bimbo_buy[5].Precio[this.state.Current_level_5 + 1]} </span>
          </div>
        </button>
        )}
      
     
  }



  render() {

    
    return (

      <div className={Estilos.Derecha_contenido}>
        <div className={Estilos.Span_title}>
          <img className={Estilos.Title} src={Testing_title} alt={""}></img>
        </div>
        {this.Buttons(0)}
        {(this.props.Display_1 > 0) ? this.Buttons(1):null}
        {(this.props.Display_2 > 0) ? this.Buttons(2):null}
        {(this.props.Display_3 > 0) ? this.Buttons(3):null}
        {(this.props.Display_5 > 0) ? this.Buttons(5):null}


        {/*<BotonDerecha Cambio_coins = {this.props.Cambio_coins} current_coins={this.props.Bimbo_coins} Bimbo_buy = {this.state.Bimbo_buy} Current_Level = {this.state.Current_level_0}
        />*/}
      </div>
    );
  }
}
