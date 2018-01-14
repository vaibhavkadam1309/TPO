import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const AppConstants = 'http://localhost:3000/'


@Injectable()

export class DataService {
    constructor(private http: Http) { }

    //add new user
    addUser(obj) {
        let request = 'http://localhost:3000/save_user';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return new Promise(resolve => {
            this.http.post(request, obj, { headers: headers })
                .map(res => res.json())
                .subscribe(result => {
                    let InsertedUser = result;
                    resolve(InsertedUser);
                },
                err => console.error(err),
                () => console.log('service successfully execute'));
        });
    }
    login(obj) {
        let request = 'http://localhost:3000/login';
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return new Promise(resolve => {
            this.http.post(request, obj, { headers: headers })
                .map(res => res.json())
                .subscribe(result => {
                    let InsertedUser = result;
                    resolve(InsertedUser);
                },
                err => console.error(err),
                () => console.log('service successfully execute'));
        });
    }

}
