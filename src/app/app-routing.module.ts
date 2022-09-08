import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductBoardComponent } from './product-board/product-board.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {ViewInsightComponent} from "./view-insight/view-insight.component";

const routes:Routes = [
  {path:"project-board" , component:ProductBoardComponent},
  {path:"create-issue",component:CreateIssueComponent},
  {path:"create-project",component:CreateProjectComponent},
  {path:"view-insight",component:ViewInsightComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
