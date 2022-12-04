import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}


  readValue=()=>
 {
  let course:any=
  {"courseTitle":this.title,"courseDescription":this.description, "courseDuration":this.duration,"courseDate":this.date,"courseVenue":this.venue}
console.log(course)


this.api.addCourse(course).subscribe(
  (response:any)=>{
  
    console.log(response)
    if(response.status=="success") {
      alert("Add Course Successfully")
      this.title=""
      this.description=""
      this.duration=""
      this.date=""
      this.venue=""
      
    } else {
      
      alert("Something Went Wrong")
    }
}


)

}

}
