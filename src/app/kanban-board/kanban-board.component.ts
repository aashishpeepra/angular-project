import { Component, OnInit } from '@angular/core';
import axios from "axios"
@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {
  data:Array<Object> = []
  constructor() { }

  ngOnInit(): void {
    axios.get("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project").then(result=>{
      console.log(result)
      this.data = result.data;
    }).catch(err=>{
      console.log(err);
    })
  }

}
