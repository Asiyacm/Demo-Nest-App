import { Component } from '@angular/core';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  title=""
  description=""
  duration=""
  date=""
  venue=""


  readValue=()=>
 {
  let data:any=
  {"courseTitle":this.title,"courseDescription":this.description, "courseDuration":this.duration,"courseDate":this.date,"courseVenue":this.venue}
console.log(data)

}


}
