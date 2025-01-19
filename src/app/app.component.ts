import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Pipes Demo';

  text = 'hello world';
  date = new Date();
  price = 1234.56;
  decimalValue = 3.14159;
  jsonData = { name: 'John', age: 25, address: '123 Main Street' };
  items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
}