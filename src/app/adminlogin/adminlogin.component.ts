import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username=""
  password=""

  constructor(private route:Router){}
  
  readValue=()=>
  {
    let data:any=
    {"username":this.username,"password":this.password}
     console.log(data)
     if (this.username=="admin"&&this.password=="nestdigital") {
      
      this.route.navigate(['/viewCourse'])
     } else {
         alert("Invalid Username and Password")
      
     }
  }
}
