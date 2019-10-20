import { Component, OnInit } from "@angular/core";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
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

  justAdded;

  isShow = false;

  nameValid = false;

  constructor(private backend: BackendService) {}

  ngOnInit() {}

  validateName = () => {
    if (!this.formData.name) {
      this.nameValid = false;
    } else {
      this.nameValid = true;
    }
  };

  onSubmit = () => {
    let newContact = { ...this.formData, created_by: 1 };
    this.backend.addContact(newContact).then(data => {
      this.justAdded = data;
    });
  };

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
