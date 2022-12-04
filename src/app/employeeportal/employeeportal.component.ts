import { Component } from '@angular/core';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent {

  empid=""
  password=""


  
  readValue=()=>
  {
    let data:any=
    {"username":this.empid,"password":this.password}
  
    console.log(data)

  }

}
