import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userServerUrl='http://localhost:8080/springbootrestful/ecommerce/users';
  constructor(private httpClient: HttpClient) { }

  public addUser(userBody: any): Observable<User>{
    const userUrl = 'http://localhost:8080/springbootrestful/ecommerce/users';

    return this.httpClient.post<User>(userUrl,userBody); // return an observable
  }
}
