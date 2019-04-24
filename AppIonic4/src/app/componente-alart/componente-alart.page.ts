
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-componente-alart',
  templateUrl: './componente-alart.page.html',
  styleUrls: ['./componente-alart.page.scss'],
})
export class ComponenteAlartPage implements OnInit {
  constructor(private alertCtrl: AlertController) { }
  ngOnInit() {
  }
  async abrirAlertSimples() {
    let alartSimples = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader: 'Sub Header',
      message: 'Essa é a mensagem do alert simples',
      buttons: ["OK"]
    });
    await alartSimples.present();
  }
  async abrirAlertComMultiplosBotoes() {
    let alartMultiplo = await this.alertCtrl.create({
      header: 'Alert Simples',
      message: 'Essa é a mensagem do alert com multiplos botões',
      buttons: ["Cancelar", "OK", "Abrir Modal", "Excluir"]
    });
    await alartMultiplo.present();
  }

  async abrirAlertConfirmacao() {
    let alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Deseja cancelar o <b>pedido</b> <b> XPTO </b>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Pedido cancelado: XPTO')
          }
        },
        {
          text: 'Pagar',
          handler: () => {
            console.log("Pago com sucesso")
          }

        }
      ]
    });
    await alert.present();
  }

  async abrirPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo',
          cssClass: 'secondary',
          role: 'cancel',
          handler: () => {
            console.log('Aqui vai abri a tela de cadastro de novos usuarios')
          }
        },
        {
          text: 'Entrar',
// PARA PEGAR O VALOR DOS DADOS BASTA PASSAR OS DADOS
          handler: (data) => {
            console.log('Seja bem vindo fulano de tal',data)
          }
        }
      ]

    });
    await alert.present();
  }
  async abrirRadio() {
    let alert = await this.alertCtrl.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
  async abrirCheckBox() {
    let alert = await this.alertCtrl.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}



