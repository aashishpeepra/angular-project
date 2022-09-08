import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-board',
  template: `
    <p>
      This is just some template to be displayed
    </p>
  `,
  styles: [
  ]
})
export class ProductBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("just checking")
  }

}
