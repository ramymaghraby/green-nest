import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
heads: Array <any>;
totalRecords: number;
page = 1;
  constructor() { }

  ngOnInit() {
    this.heads = [
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
      {name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg'},
      {name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large'},
      {name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg'},
    ];
    this.getProducts();
  }
  getProducts() {
    this.totalRecords = this.heads.length;
  }

}
