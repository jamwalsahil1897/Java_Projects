import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  public products: Product[];
  

  constructor(private productservice:ProductService){}
  
 ngOnInit(){
   this.getProduct();
 }

  public getProduct(): void{
    this.productservice.getProducts().subscribe(
      (response: Product[]) => {
        this.products=response;

       console.log(response.length);
  
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        
      }
      
    );
  }




  

}
