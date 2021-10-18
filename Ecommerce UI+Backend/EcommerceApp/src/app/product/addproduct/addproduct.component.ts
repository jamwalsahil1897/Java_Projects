import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form : any){
    console.log(form.value);

    let newProduct = {
       
      category: form.value.product_category,
      description: form.value.product_description,
      manufacturer: form.value.product_manufacturer,
      name: form.value.product_name,
      price: form.value.product_price,
      unit: form.value.product_unit

       
    };

    console.log(newProduct);

    this.productsService.addProduct(newProduct).subscribe(data => {
      console.log(data);
    });
}}
