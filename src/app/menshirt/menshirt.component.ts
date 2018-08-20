import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-menshirt',
  templateUrl: './menshirt.component.html',
  styleUrls: ['./menshirt.component.css'],
  providers:[ProductService]

})
export class MenshirtComponent implements OnInit {
  name = '';
  products = [
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'},
    // {productName:'productName',producerName:'producerName',productImage:'productImage',price:'200000'}
  ]
  producers = [
    // {producerId:'id',producerName:'producerName'},
    // {producerId:'id',producerName:'producerName'},
    // {producerId:'id',producerName:'producerName'},
    // {producerId:'id',producerName:'producerName'}
  ]
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProduct()
    .then(resJson => {
      for(let i=0;i<resJson.length;i++){
        this.products.push({
          productId:resJson[i].productId,
          productName:resJson[i].productName,
          producerName:resJson[i].producer.producerName,
          productImage:resJson[i].productImage.length > 0 ? resJson[i].productImage[0].productImage : '',
          price:resJson[i].price
        });
      }
    })
  }
  
}
