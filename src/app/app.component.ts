
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import {CommonService} from './common.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

        constructor(private newService: CommonService) {   }
        Repdata;
        valbutton = 'Save';
        id;
        name;
        address;
        // tslint:disable-next-line:use-lifecycle-interface
        ngOnInit() {
          this.newService.GetUser().subscribe((data) => this.Repdata = data);
        }
      /*onSave = function(user,isValid: boolean) {    
      user.mode= this.valbutton;  
        this.newService.saveUser(user)  
        .subscribe(data =>  {  alert(data.data);  
            
          this.ngOnInit();    
        }   
        , error => this.errorMessage = error )  
          
      }*/

      onSave = function(user, isValid: boolean) {

        user.mode = this.valbutton;
        this.newService.saveUser(user).subscribe((data) => alert(data.data));
        this.ngOnInit();
      };


      /*edit = function(kk) {  
      this.id = kk._id;  
      this.name= kk.name;  
      this.address= kk.address;  
      this.valbutton ="Update";  
      }  */
      edit = function(kk) {
        this.id = kk.id;
        this.name = kk.name;
        this.address = kk.address;
        this.valbutton = 'Update';
      };

      /*delete = function(id) {  
      this.newService.deleteUser(id)  
      .subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
      } */
      delete = function(id) {
        this.newService.deleteUser(id).subscribe((data) => {alert(data.data);
                                                            this.ngOnInit(); } , console.error());
                                                          };
}
