import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngSrc sample';

  exampleCallback(request: XMLHttpRequest) {
    console.log(request.getAllResponseHeaders());
  }
}
