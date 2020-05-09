import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  exampleData: any[];
  constructor() { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.exampleData = [
      {name: 'ramy', mobile: '01005124034' },
      {name: 'dina', mobile: '01222228640' },
      {name: 'mazen', mobile: '01003700039' },
    ];
  }

}
