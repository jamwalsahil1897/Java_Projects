import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdduserComponent,
    EdituserComponent,
    ViewuserComponent,
    DeleteuserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AdduserComponent,
    EdituserComponent,
    ViewuserComponent,
    DeleteuserComponent
  ]
})
export class UserModule { }
