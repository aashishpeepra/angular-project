import { Component, OnInit } from '@angular/core';
import axios from "axios"
@Component({
  selector: 'app-product-board',
  templateUrl:'./product-board.component.html',
  styleUrls: ['./product-board.component.css'],
})
export class ProductBoardComponent implements OnInit {
  data = []
  constructor() {}

  ngOnInit(): void {
    console.log('just checking');
    axios.get("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project").then(result=>{
      console.log(result)
      this.data = result.data
    }).catch(err=>{
      console.log(err);
    })
  }
}
