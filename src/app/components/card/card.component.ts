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

  delete() {
    this.backend.deleteContact(this.contactID).then(data => {
      this.router.navigate(["contacts"]);
    });
  }
}
