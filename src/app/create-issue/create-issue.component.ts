import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-create-issue',
  templateUrl:"./create-issue.component.html",
  styleUrls:["./create-issue.component.css"]
})
export class CreateIssueComponent implements OnInit {
  title = "Hello"
  projects:any = []
  users:any = []
  get_all_users(){
    axios.get("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/user").then(res=>{
      this.users = res.data;
    }).catch(err=>{
      console.error(err)
    })
  }
  get_all_projects(){
    axios.get("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/project").then(result=>{
      console.log(result)
      this.projects = result.data
    }).catch(err=>{
      console.log(err);
    })
  }
  constructor() { }
  onFormSubmit(){
    // axios.post("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue",{data:{}}).then(res=>{
    // alert("New issue created successfuly")
    // }).catch(err=>{

    // })


  }
  createNewIssue(data:any){
    data.status = 1; //as not in form hence default status assumption
    data.type = parseInt(data.type)
    data.tags=[data.tags]
    console.log(data)
    axios.post("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue",data).then(res=>{
      console.log(res);
      alert("Created new issue")
    }).catch(err=>{
      console.error(err)
    })
  }
  ngOnInit(): void {
    this.onFormSubmit()
    this.get_all_projects()
    this.get_all_users()
  }

}
