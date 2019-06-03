import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListContainerComponent } from './contact-list-container/contact-list-container.component';
import { ContactListEntryComponent } from './contact-list-entry/contact-list-entry.component';
import { AddContactFormComponent } from './add-contact-form/add-contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListContainerComponent,
    ContactListEntryComponent,
    AddContactFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
