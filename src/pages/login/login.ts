import { Component, Inject, forwardRef } from '@angular/core';
import { ToastController, NavParams } from 'ionic-angular';
import { AlertController, ViewController, ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DataService } from '../../providers/all.services'

@Component({
    templateUrl: 'login.html',
    providers: [DataService]
})
export class LoginPage {


    credentials: any = {
        "email": "",
        "password": ""
        //"email": "vaibhav.kadam@tcognition.com",
        //"password": "12345678"
    };
    loader: any
    res: any;


    onPageLoaded() {
        console.log("Page Loaded!");
    }
    constructor(private navParams: NavParams, private DataService: DataService, private modalController: ModalController, private viewController: ViewController, private AlertController: AlertController,
        private toastController: ToastController,
        private loadingController: LoadingController) {
        let templateFlag = navParams.get('popupFlag');


    }



    presentLoading() {
        this.loader = this.loadingController.create({
            content: "Please wait...",
        });
        this.loader.present();

    }

    onLogin() {
        let data = {
            "email": this.credentials.email,
            "password": this.credentials.password
        }
        this.DataService.login(data).then(res => {
            this.res = res;
            if (this.res.status == true) {
                debugger
                let alertMsg = this.AlertController.create({
                    title: 'Alert',
                    subTitle: 'User login Successfully',
                    buttons: ['OK']
                });
                alertMsg.present();
            }
            else {
                let alertMsg = this.AlertController.create({
                    title: 'Error',
                    subTitle: this.res.error.message,
                    buttons: ['OK']
                });
                alertMsg.present();
            }
        })
    }





}
