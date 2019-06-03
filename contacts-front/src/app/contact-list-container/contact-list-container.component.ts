import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LowerCasePipe } from '@angular/common';
import { ContactsProviderService } from "../contacts-provider.service";

@Component({
  selector: 'app-contact-list-container',
  templateUrl: './contact-list-container.component.html',
  styleUrls: ['./contact-list-container.component.scss']
})
export class ContactListContainerComponent implements OnInit {

  //this represents the contacts to display.
  private contactsToDisplay: Object;
  constructor(private http: HttpClient, private contactService: ContactsProviderService) { 

  }

  ngOnInit() {
    //load all contacts on init
    this.contactService.getAllContacts().then(data => {
      this.contactsToDisplay = data;
      this.sortAscending();
      console.log(this.contactsToDisplay);
    });
    // add a subscriber for newly added contacts.
    this.contactService.getAddContactObservable().subscribe(data => {
      //update with the newly added contact
      this.contactsToDisplay = data;
    })
  }

  onSearch(searchKey: string){
    if (searchKey){
      //call the serive to search 
      this.contactService.search(searchKey).then((data) => {
        // load it and sort
        this.contactsToDisplay = data;
        this.sortAscending();
      })
      .catch((err) => {
        console.log(err);
      })
    }else{
      // if searchKey is empty, simply load all the 
      this.contactService.getAllContacts().then((data) => {
        this.contactsToDisplay = data;
        this.sortAscending();
      })
    }
  }

  // method to sort contactsToDisplay
  sortAscending(){
    this.contactsToDisplay = Object.values(this.contactsToDisplay).sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    })
  }

}
