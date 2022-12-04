import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { Navigation2Component } from './navigation2/navigation2.component';
import { Navigation3Component } from './navigation3/navigation3.component';
import { FormsModule } from '@angular/forms';


const myRoute:Routes=
[
  {
    path:"",
    component: HomeComponent
  },
  {
  path:"gallery",
  component: GalleryComponent
},
{
  path:"contactus",
  component: ContactusComponent
},

{
  path:"adminLogin",
  component: AdminloginComponent
},
{
  path:"employeeLogin",
  component: EmployeeportalComponent
},
{
  path:"employeeRegistration",
  component: EmploginComponent
},
{
  path:"viewCourse",
  component: ViewcourseComponent
},
{
  path:"viewFriends",
  component:ViewfriendsComponent
},

{
  path:"addCourse",
  component:AddcourseComponent
},
{
  path:"addFriends",
  component:AddfriendsComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    ContactusComponent,
    AdminloginComponent,
    EmployeeportalComponent,
    EmploginComponent,
    AddcourseComponent,
    ViewcourseComponent,
    AddfriendsComponent,
    ViewfriendsComponent,
    NavigationComponent,
    Navigation2Component,
    Navigation3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
