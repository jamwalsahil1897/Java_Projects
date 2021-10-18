import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerServerUrl='http://localhost:8080/springbootrestful/ecommerce/customer';
  constructor(private httpClient: HttpClient) { }

  public addCustomer(customerBody: any): Observable<Customer>{
    const productUrl = 'http://localhost:8080/springbootrestful/ecommerce/customer';

    return this.httpClient.post<Customer>(productUrl,customerBody); // return an observable
  }
}
