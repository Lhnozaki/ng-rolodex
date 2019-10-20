import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { SearchComponent } from "./components/search/search.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { CardComponent } from "./components/card/card.component";
import { AddComponent } from "./components/add/add.component";

const routes: Routes = [
  {
    path: "",
    component: SearchComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "contacts/:id",
    component: CardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "new",
    component: AddComponent
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
