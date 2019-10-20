import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get("/api/contacts").toPromise();
  }

  getContact(id) {
    return this.http.get(`/api/contacts/${id}`).toPromise();
  }

  addContact(data) {
    return this.http.post("/api/contacts", data).toPromise();
  }

  deleteContact(data) {
    return this.http.delete(`/api/contacts/${data}`).toPromise();
  }
}
