import { Injectable } from '@angular/core';
import {HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http: HttpClient ) { }

  saveUser(user) {
    return this.http.post('http://localhost:8080/api/SaveUser/', user).subscribe((response: Response) => response.json());
  }

  GetUser() {
    return this.http.get('http://localhost:8080/api/getUser/');
  }

  deleteUser(id) {
    return this.http.post('http://localhost:8080/api/deleteUser/', {id}).subscribe((response: Response) => response.json());
  }
}
