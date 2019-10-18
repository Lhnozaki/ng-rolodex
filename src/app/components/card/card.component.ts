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

  constructor(
    private backend: BackendService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.backend.getContact(id).then(data => {
      this.contact = data;
    });
  }
}
