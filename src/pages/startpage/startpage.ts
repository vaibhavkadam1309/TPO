import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
//import { NavController, NavParams } from 'ionic-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StudentHome } from '../../pages/studenthome/studenthome';

@Component({
  selector: 'startpage',
  templateUrl: 'startpage.html'
})
export class StartPage {
  selectedItem: any;

  constructor(private router: Router, ) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = navParams.get('item');
  }
  gotoPage(userType) {
    switch (userType) {
      case 'student':
        this.router.navigate(['/student_home']);
        // this.nav.push(StudentHome);
        break;
      case 'staff':
        //this.nav.push(StaffHome);
        break;
      case 'company':
        // this.nav.push(CompanyHome);
        break;
      case 'tpo':
        //this.nav.push(TpoHome);
        break;
    }
  }
}
