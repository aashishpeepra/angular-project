import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-board',
  template: `
    <div class="Container" >
      
    </div>
  `,
  styleUrls:["./product-board.component.css"]
})
export class ProductBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("just checking")
  }

}
