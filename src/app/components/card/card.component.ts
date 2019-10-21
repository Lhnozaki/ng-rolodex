import { Component, OnInit, Input } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  contact;
  contactID = this.route.snapshot.paramMap.get("id");
  isShow = false;
  formData = {
    name: "",
    address: "",
    email: "",
    home: "",
    mobile: "",
    work: "",
    twitter: "",
    instagram: "",
    github: ""
  };
  nameValid = false;

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.backend.getContact(this.contactID).then(data => {
      this.contact = data;
    });
  }

  edit() {
    this.backend.editContact(this.contactID, this.formData).then(data => {
      this.contact = [data];
    });
  }

  delete() {
    this.backend.deleteContact(this.contactID).then(data => {
      this.router.navigate(["contacts"]);
    });
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  };
}
