import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addNewCustomer(formc : any){
    console.log(formc.value);

    let newCustomer = {
      firstName: formc.value.firstName,
      lastName: formc.value.lastName,
      customerPnone: formc.value.customerPnone,
      userid:formc.value.userid,
      
    };

    console.log(newCustomer);

    this.customerService.addCustomer(newCustomer).subscribe(data => {
      console.log(data);
    });
}

}
