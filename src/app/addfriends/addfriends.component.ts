import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent {

  
  name=""
  friendname=""
  describe=""
  nickname=""


  constructor(private api:ApiService){}

  readValue=()=>
  {
    let friend:any=
    {"name":this.name,"friendName":this.friendname,"friendNickName":this.nickname,"DescribeYourFriend":this.describe}
  
    console.log(friend)

    this.api.addCourse(friend).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Friends added successfully")
          this.name=""
          this.friendname=""
          this.nickname=""
          this.describe=""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
