import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list-entry',
  templateUrl: './contact-list-entry.component.html',
  styleUrls: ['./contact-list-entry.component.scss']
})
export class ContactListEntryComponent implements OnInit {

  @Input('contactEntry') 
  contact: any;

  constructor() { }

  ngOnInit() {
  }

}
