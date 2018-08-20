import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isNull = true;
  products = []
  constructor() {}

  ngOnInit() {
    this.products.push({
      productId:'1',
      productName:'productName',
      productImage:'https://img.zanado.com/media/catalog/product/cache/all/thumbnail/360x420/7b8fef0172c2eb72dd8fd366c999954c/1/_/quan_jogger_ni_nam_the_thao_81b1.jpg',
      size:'size',
      color:'color',
      producerName:'producerName',
      price:'200000',
      quantity:'2',
      total:'400000'
    });
    if(this.products.length > 0){
      this.isNull = false;
    }
  }
  deleteCartItem(productId){
    console.log(productId)
  }

}
