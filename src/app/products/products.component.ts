import { Component, OnInit } from '@angular/core';
import{Product} from '../Product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title :string='component to view';
  products : Product ={
    name: "ngoc trinh",
    age :22,
    isMarried : false,
    LinkImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F2sao.vietnamnetjsc.vn%2Fimages%2F2019%2F07%2F09%2F11%2F18%2Fngoc-trinh-0.jpg&imgrefurl=https%3A%2F%2F2sao.vn%2Fngoc-trinh-pho-dien-vong-1-cang-tran-sau-bao-ngay-xap-xe-n-189339.html&docid=mNiU3JXvOcehLM&tbnid=flmQfI1W0xSxZM%3A&vet=10ahUKEwil397z4bDjAhVJnY8KHeOxDZ8QMwhCKAEwAQ..i&w=640&h=960&itg=1&bih=625&biw=1366&q=ng%E1%BB%8Dc%20trinh&ved=0ahUKEwil397z4bDjAhVJnY8KHeOxDZ8QMwhCKAEwAQ&iact=mrc&uact=8',
    LinkProfile : "https://dantri.com.vn"
  };

  constructor() { }

  ngOnInit() {
  }

}
