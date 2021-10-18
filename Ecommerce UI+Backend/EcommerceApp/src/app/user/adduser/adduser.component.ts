import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  addNewUser(formc : any){
    console.log(formc.value);

    let newUser = {
      emailid: formc.value.emailid,
      password: formc.value.password,
      enabled:"yes"      
    };

    console.log(newUser);

    this.userservice.addUser(newUser).subscribe(data => {
      console.log(data);
    });
}

}
