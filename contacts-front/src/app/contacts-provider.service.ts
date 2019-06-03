import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { allocExpando } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class ContactsProviderService {

  private allContacts: Object;
  private allContactsSubject = new Subject<any>();
  private addContactSubject = new Subject<any>();

  constructor(private http: HttpClient) {

    this.refreshFromDatabase();

   }

  getAllContactObservable(): Observable<any> {
    return this.allContactsSubject.asObservable();
  }

  getAddContactObservable(): Observable<any>{
    return this.addContactSubject.asObservable();
  }


  private refreshFromDatabase(): void{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    const url='http://localhost:3000/contacts/';
    this.http.get(url,httpOptions).subscribe( data => {
      this.allContacts = data;
      this.allContactsSubject.next(data);
    },
    err => {
      console.log(err);
    })

  }

  // returns a promise for fetching all contacts
  getAllContacts(): Promise<any>{
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    const url='http://localhost:3000/contacts/';
    return this.http.get(url,httpOptions).toPromise();
    
  }

  //adds a new contact and emits the addContactSubject Observable
  addContact(newContact: Object): void{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    let url='http://localhost:3000/contacts/';
      this.http.post(url, newContact, httpOptions).subscribe(
        data => {
          this.refreshFromDatabase();
          this.addContactSubject.next(data);
        },
        err => {
          console.log(err);
        }
      )


  }


  search(searchKey: string): Promise<any> {
    console.log(`searching for ${searchKey}`);
    const url=`http://localhost:3000/contacts/name/${searchKey}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    return this.http.get(url, httpOptions).toPromise();
    
  }



}

