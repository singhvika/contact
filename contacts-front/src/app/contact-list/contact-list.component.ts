import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  sampleData: Array<any> = [{"name": "This is sample data"}]

  constructor() { }

  ngOnInit() {
    
  }

}
