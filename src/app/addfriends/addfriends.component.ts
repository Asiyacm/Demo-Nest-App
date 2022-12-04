import { Component } from '@angular/core';

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



  readValue=()=>
  {
    let data:any=
    {"name":this.name,"friendName":this.friendname,"friendNickName":this.nickname,"DescribeYourFriend":this.describe}
  
    console.log(data)

  }

}