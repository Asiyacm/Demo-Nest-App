import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  name=""
  Cname=""
  designation=""
  phone=""
  email=""
  country=""
  subject=""
  
  
  readValue=()=>
   {
    let data:any=
    {"name":this.name,"company name":this.Cname, "designation":this.designation,"phone":this.phone,
    "email":this.email,"country":this.country,"subject":this.subject}
  console.log(data)
  
  }
  
  
  }
