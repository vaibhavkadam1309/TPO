import { Component, Inject, forwardRef } from '@angular/core';
import { ToastController, NavParams } from 'ionic-angular';
import { AlertController, ViewController, ModalController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: 'login.html',
})
export class LoginPage {


    credentials: any = {
        "email": "",
        "password": ""
        //"email": "vaibhav.kadam@tcognition.com",
        //"password": "12345678"
    };
    loader: any


    onPageLoaded() {
        console.log("Page Loaded!");
    }
    constructor(private navParams: NavParams, private modalController: ModalController, private viewController: ViewController,  private alertController: AlertController,
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

    }





}
