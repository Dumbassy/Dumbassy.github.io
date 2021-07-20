import React from "react";
import Estilos from "./BarraAbajo.module.css";
import Sitting from "./imagenes/Sitting.png";
import Testing_title from "./imagenes/Testing_title.png";
import Ejercicios from "./imagenes/Ejercicios.png";
import hearth from "./imagenes/hearth.png";
import First_cross from "./imagenes/First_cross.png"

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
    "Dum Bimbo",
  ],
  Bonus_level: [0, 0.1, 0.15, 0.3, 0.35, 0.7, 1.5, 2.5, 3.5],
  Tam: 8,
  Precio: [0, 100, 300, 600, 1000, 10000, 100000, 150000, 200000],
};
const Beauty_care = {
  Level: ["Basis", "Lips", "Eyes", "Hair Color"],
  Bonus_level: [0, 0.4, 0.7, 1],
  Tam: 4,
  Precio: [0, 500, 3000, 15000, 35000],
};

const Crossdress = {
  Level: ["Stocking", "Bra", "Panties", "Girly clothes", "Bitchy clothes"],
  Bonus_level: [0, 0.5, 1, 1.5, 2.5, 3.5],
  Tam: 6,
  Precio: [0, 3000, 12000, 48000, 65000, 80000],
};

const Shape = {
  Level: ["Diet", "Abdomen", "Squads", "Hormnonnes"],
  Bonus_level: [0, 1, 1.5, 2.5, 4],
  Tam: 4,
  Precio: [0, 6000, 12000, 48000, 90000, 120000],
};
const Sissify = {
  Level: ["Cage", "Buttplug", "Dildo", "Reduce dick"],
  Bonus_level: [0, 2, 2.5, 3, 12],
  Tam: 5,
  Precio: [0, 15000, 43000, 90000, 350000],
};
const Training = {
  Level: ["Handjob", "Blowjob", "Anal Sex"],
  Bonus_level: [0, 4, 6, 8],
  Tam: 4,
  Precio: [0, 250000, 500000, 1000000],
};

const Bimbofication = {
  Level: ["Implant, Lips"],
  Bonus_level: [0, 5, 5],
  Tam: 3,
  Precio: [1000000, 1000000],
};
const Work = {
  Level: ["Handjob", "Blowjob", "Sex", "Whore", "Free Whore"],
  Bonus_level: [0, 5, 5, 5, 5, 7, 12],
  Tam: 5,
  Precio: [1000000, 1000000, 1000000, 1000000, 1500000, 2500000],
};
const Complete_Bimbo = {
  Level: ["IQ Drop", "No thinking", "No brain"],
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
      img: hearth,
    };
  }

  Click_corazon = (e) => {
    var Imag = document.createElement("img");
    Imag.src = this.state.img;
    Imag.className = "subir_level";
    Imag.style.top = e.clientY + "px";
    Imag.style.left = e.clientX + "px";
    document.body.appendChild(Imag);
    Imag.addEventListener("animationend", function () {
      Imag.parentElement.removeChild(Imag);
    });
    var Image = document.createElement("img");
    Image.src = this.state.img;
    Image.className = "subir_level_dos";
    Image.style.top = e.clientY + "px";
    Image.style.left = e.clientX + "px";
    document.body.appendChild(Image);
    Image.addEventListener("animationend", function () {
      Image.parentElement.removeChild(Image);
    });
  };

  Buttons(Pos) {
    if (Pos == 0) {
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
              document.addEventListener("click", this.Click_corazon);
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
              <span>{this.state.Bimbo_buy[1].Precio[this.state.Current_level_1]} </span>
            </span>
          </div>
        </button>
      );
    }
    else if (Pos == 1) {
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
            console.log(
              this.state.Bimbo_buy[1].Level[this.state.Current_level_1]
            );
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
          <img src={First_cross} className={Estilos.tam_images} alt={""} />
          <span>
            {this.state.Bimbo_buy[1].Level[this.state.Current_level_1]}

          </span>
        </div>
      </button>
      )}
    else if (Pos == 3) {
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
            console.log(
              this.state.Bimbo_buy[3].Level[this.state.Current_level_3]
            );
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
            {this.state.Bimbo_buy[3].Level[this.state.Current_level_3]}
          </span>
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
        {this.Buttons(1)}
        {this.Buttons(3)}

        {/*<BotonDerecha Cambio_coins = {this.props.Cambio_coins} current_coins={this.props.Bimbo_coins} Bimbo_buy = {this.state.Bimbo_buy} Current_Level = {this.state.Current_level_0}
        />*/}
      </div>
    );
  }
}
