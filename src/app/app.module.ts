import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductBoardComponent } from './product-board/product-board.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ButtonComponent } from './button/button.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ViewInsightComponent } from './view-insight/view-insight.component';

@NgModule({
  declarations: [
     ProductBoardComponent,
    CreateIssueComponent,
    CreateProjectComponent,
    AppComponent,
    ButtonComponent,
    KanbanBoardComponent,
    KanbanCardComponent,
    NavigationComponent,
    ViewInsightComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
