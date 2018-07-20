import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EndrecoDTO } from "../../models/endereco.dto";

@IonicPage()
@Component({
  selector: "page-pick-address",
  templateUrl: "pick-address.html"
})
export class PickAddressPage {
  items: EndrecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        logradouro: "Rua Quinze de Novembro",
        numero: "300",
        complemento: "Apto 200",
        bairro: "Santa Mônica",
        cep: "48293822",
        cidade: {
          id: "1",
          nome: "Uberlândia",
          estado: {
            id: "1",
            nome: "Minas Gerais"
          }
        }
      }
    ];
  }
}
