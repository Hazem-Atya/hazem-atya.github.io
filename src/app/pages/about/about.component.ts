import { Component, OnInit } from '@angular/core';
import {profilePicture} from "../../Utils/constants";

// declare const mainJS: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profilePicture=profilePicture;
  constructor() { }

  ngOnInit(): void {
    // mainJS();
  }

}
