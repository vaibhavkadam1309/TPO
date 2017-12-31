import { Component } from '@angular/core';
import { ModalController, ViewController, Events } from 'ionic-angular';
//import { NavController, NavParams } from 'ionic-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
    selector: 'studenthome',
    templateUrl: 'studenthome.html',
    
})
export class StudentHome {
    newRegisterFlag: boolean = false    ;
    studentHome: any = {};
    constructor(  private modalController:ModalController) {
        // If we navigated to this page, we will have an item available as a nav param
        //this.selectedItem = navParams.get('item');
    }
    openPopup(flag) {
        this.newRegisterFlag = false;
        let Modal = this.modalController.create(LoginPage,  { enableBackdropDismiss: false });
        Modal.present();
    }
    save(data){
        console.log(data);
    }
}
