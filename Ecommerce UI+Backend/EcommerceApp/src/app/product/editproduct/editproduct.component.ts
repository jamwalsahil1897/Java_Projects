import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productservice: ProductService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productservice.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productservice.updateProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}
