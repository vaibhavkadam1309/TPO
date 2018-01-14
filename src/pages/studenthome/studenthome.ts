import { Component } from '@angular/core';
import { ModalController, ViewController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import { NavController, NavParams } from 'ionic-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DataService } from '../../providers/all.services'
import { Http, Headers } from '@angular/http';



@Component({
    selector: 'studenthome',
    templateUrl: 'studenthome.html',
    providers: [DataService]


})
export class StudentHome {
    newRegisterFlag: boolean = false;
    studentHome: any = {};
    res: any;
    constructor(private modalController: ModalController, public AlertController: AlertController, public DataService: DataService) {
        // If we navigated to this page, we will have an item available as a nav param
        //this.selectedItem = navParams.get('item');
        debugger
    }
    openPopup(flag) {
        this.newRegisterFlag = false;
        let Modal = this.modalController.create(LoginPage, { enableBackdropDismiss: false });
        Modal.present();
    }
    save(data) {
        console.log(data);
        this.DataService.addUser(data).then(res => {
            this.res = res;
            if (this.res.status == true) {
                let alertMsg = this.AlertController.create({
                    title: 'Alert',
                    subTitle: 'User Added Successfully',
                    buttons: ['OK']
                });
                alertMsg.present();
                this.studentHome = {};
            }
            else {
                let alertMsg = this.AlertController.create({
                    title: 'Error',
                    subTitle: this.
                        res.error.message,
                    buttons: ['OK']
                });
                alertMsg.present();
            }
        })
    }
}
