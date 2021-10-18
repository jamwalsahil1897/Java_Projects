import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  public addProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:8080/springbootrestful/ecommerce/products';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiServerUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiServerUrl}/${id}`);
  }
  updateProduct(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.apiServerUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiServerUrl}/${id}`, { responseType: 'text' });
  }


  // public updateProduct(product:Product): Observable<Product> {
  //   return this.httpClient.put<Product>(`${this.apiServerUrl}`, product);
  // }

  // public deleteProduct(productId: number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.apiServerUrl}/${productId}`);
  // }
  // getProductList(): Observable<Product> {
  //   return this.httpClient.get<Product>(`${this.apiServerUrl}`);
  // }

  // getProduct(id: number): Observable<Product> {
  //   return this.httpClient.get<Product>(`${this.apiServerUrl}/${id}`);
  // }
}
