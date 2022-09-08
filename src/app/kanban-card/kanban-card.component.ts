import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})

export class KanbanCardComponent implements OnInit {
  @Input() id:any = {projectId:"",projectOwner:{name:"default name"}};
  constructor() { }

  ngOnInit(): void {
  }

}
