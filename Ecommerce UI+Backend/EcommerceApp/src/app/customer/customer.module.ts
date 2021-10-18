import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { FormsModule } from '@angular/forms';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';



@NgModule({
  declarations: [
    AddcustomerComponent,
    EditcustomerComponent,
    DeletecustomerComponent,
    ViewcustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AddcustomerComponent,
    EditcustomerComponent,
    ViewcustomerComponent,
    DeletecustomerComponent
  ]
})
export class CustomerModule { }
