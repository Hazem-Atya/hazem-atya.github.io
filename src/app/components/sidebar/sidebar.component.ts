import { Component, OnInit } from '@angular/core';
import {facebookLink, firstName, githubLink, lastName, linkedinLink, profilePicture} from "../../Utils/constants";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  firstName=firstName;
  lastName=lastName;
  fb=facebookLink;
  linkedin=linkedinLink;
  github=githubLink;
  profilePicture=profilePicture
  constructor() { }

  ngOnInit(): void {
  }

}
