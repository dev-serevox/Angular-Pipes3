import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template:
    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><div style="text-align: center;  align-items:center; justify-content: center;  background-color: #fff;  padding: 24px 24px 32px 24px;  box-shadow: 0 0 1px rgba(12, 26, 75, 24%), 0 3px 8px -1px rgba(50, 50, 71, 5%);  border-radius: 16px;  width: 350px; left: 50%;"><p>Apply Formatting:- {{decNum1 | number:"3.1"}} </p><br /><p>Apply Formatting:- {{decNum1 | number:"2.1-4"}}</p></div>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipes reactive';
  Fruits = ['Apple', ' Orange', ' Grapes', ' Mango', ' Kiwi', ' Pear'];
  decNum1: number = 8.7589623;
  decNUm2: number = 5.43;
}
