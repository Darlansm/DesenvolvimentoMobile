import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componente-check-box',
  templateUrl: './componente-check-box.page.html',
  styleUrls: ['./componente-check-box.page.scss'],
})
export class ComponenteCheckBoxPage implements OnInit {
  
  public meses : any[] = [
    {nomeDoMes: "Janeiro", valor : 1 , marcado: false},
    {nomeDoMes: "Fevereiro", valor : 2 , marcado: true},
    {nomeDoMes: "Março", valor : 3 , marcado: false},
    {nomeDoMes: "Abril", valor : 4 , marcado: true},
    {nomeDoMes: "Maio", valor : 5, marcado: false},
    {nomeDoMes: "Junho", valor : 6 , marcado: false},
    {nomeDoMes: "Julho", valor : 7 , marcado: false},
    {nomeDoMes: "Agosto", valor : 8 , marcado: true},
    {nomeDoMes: "Setembro", valor : 9 , marcado: false},
    {nomeDoMes: "Outubro", valor : 10 , marcado: false},
    {nomeDoMes: "Novembro", valor : 11 , marcado: false},
    {nomeDoMes: "Dezembro", valor : 12 , marcado: false}

  ]; 
  
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    console.log(this.meses);
  }

  exibirMeses(){
    console.table(this.meses);
  }


}

