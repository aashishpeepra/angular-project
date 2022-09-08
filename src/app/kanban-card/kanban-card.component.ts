import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {
  @Input() id:String = "ID:HU220001";
  constructor() { }

  ngOnInit(): void {
  }

}
