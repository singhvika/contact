import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { ContactsProviderService } from "./../contacts-provider.service";


@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent implements OnInit {

  contactForm: FormGroup;
  
  constructor( private http: HttpClient, private contactService: ContactsProviderService ) { }

  ngOnInit() {
    //create the form on init of this component
    this.createForm();
  }

  private createForm(){
    //form elements
    this.contactForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl(''),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl('')
    })

  }

  onSubmit(){
    //check if form valid
    if (this.contactForm.valid){

      // call the contactService to add the new contact
      this.contactService.addContact(this.contactForm.value);
      //reset the form
      this.contactForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl(''),
        phone: new FormControl('',[Validators.required]),
        email: new FormControl('')
      })
      
    }
    else{
      //simply return if invalid
      console.log(`VALID: ${this.contactForm.valid}`);
      return;
    }



    

  }

}
