import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
  `,
  styles: `
    h1 {
      color: red;
    }
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
