import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-create-issue',
  templateUrl:"./create-issue.component.html",
  styleUrls:["./create-issue.component.css"]
})
export class CreateIssueComponent implements OnInit {
  title = "Hello"
  constructor() { }
  onFormSubmit(){
    // axios.post("https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/issue",{data:{}}).then(res=>{
    // alert("New issue created successfuly")
    // }).catch(err=>{

    // })


  }
  ngOnInit(): void {
    this.onFormSubmit()
  }

}
