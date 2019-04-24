import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-componente-action-sheet',
  templateUrl: './componente-action-sheet.page.html',
  styleUrls: ['./componente-action-sheet.page.scss'],
})
export class ComponenteActionSheetPage implements OnInit {
  constructor(private actionSheetCtrl : ActionSheetController) { }
  ngOnInit() {
  }

  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Albuns',
      buttons:[
        {
        text : 'Excluir',
        role: 'desctructive',
        icon: 'trash',
        handler: ()=>{
          console.log("Vermelho")
        }
      },
      {
        text : 'Compartilhar',        
        icon: 'share',
        handler: ()=>{
          console.log("Compartilhar")
        }
      },
      {
        text : 'Assistir',        
        icon: 'arrow-dropringht-circle',
        handler: ()=>{
          alert("Assistir")
        }
      },
      {
        text : 'Cancelar',        
        icon: 'close',
        role: 'cancel',
        handler: ()=>{
          console.log("Cancelar")
        }
      }
    ]
    }); 
    
    await actionSheet.present();
  }

}

