import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-create-project',
  templateUrl:"./create-project.component.html",
  styleUrls:["./create-project.component.css"]

})
export class CreateProjectComponent implements OnInit {
  users:any = []
  get_all_users(){
    axios.get("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user").then(res=>{
      this.users = res.data;
    }).catch(err=>{
      console.error(err)
    })
  }
  constructor() { }
  createNewProject(data:any){
    axios.post("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project",data).then(res=>{
      alert("new project created")
    }).catch(err=>{
      console.error(err)
    })
  }
  ngOnInit(): void {
    this.get_all_users()
  }

}
