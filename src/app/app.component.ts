import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Component Using Observables!';

  private data: Observable<number>;
  private values: Array<number> = [];
  private anyErrors: boolean;
  private finished: boolean;
  private status: string;

  constructor() {
  }

  init() {
      this.values.push(0);
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(50);
              this.status = "A medio camino";
          }, 3000);

          setTimeout(() => {
              observer.next(95);
              this.status = "Falta un pelín";
          }, 5000);

          setTimeout(() => {
              observer.complete();
          }, 6000);

          this.status = "Started";
      });

      let subscription = this.data.forEach(v => this.values.push(v))
		    .then(() => this.status = "Ended");
  }
}
