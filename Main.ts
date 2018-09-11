import {Carro} from '../POO/Carro';

let carro1 : Carro = new Carro (0, 0, 0);

let acao: string;
acao = prompt("Escolha uma ação: embarcar, desembarcar, abastecer, andar, gasolina, quilometragem").toLowerCase();
  switch (acao) {
    case "embarcar":
      carro1.embarcar();  
      break;
    case "desmbarcar":
      carro1.desembarcar();
      break;
    case "abastecer":
      console.log("Quanto quer abastecer?");
      carro1.abastecer();
      break;
    case "andar":
      console.log("Quantos quilômetros?");
      carro1.andar();
      break;
    case "gasolina":
      carro1.getGasolina();
      break;
    case "quilometragem":
      carro1.getKm();
      break;
    default:
      console.log("Escolha uma das opções.");
      break;
  }