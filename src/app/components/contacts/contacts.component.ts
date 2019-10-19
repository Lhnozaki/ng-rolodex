import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts;

  constructor(private backend: BackendService, private router: Router) {}

  ngOnInit() {
    this.backend.getContacts().then(data => {
      this.contacts = data;
    });
  }

  getContact(data) {
    const index = data;
    this.router.navigate([`contacts/${index}`]);
  }
}
