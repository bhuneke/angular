import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <h1>Hey guys!</h1>

  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  angularLogo = '';
}
