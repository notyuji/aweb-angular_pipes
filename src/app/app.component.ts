import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Pipes Demo';

  text = 'Welcome';
  date = new Date();
  price = 1234.56;
  decimalValue = 3.14159;
  jsonData = { name: 'Levin Mallari', age: 20, address: 'Babo Pangulo, Porac, Pampanga' };
  items = ['Plastic', 'Bag', 'Car', 'Pencil', 'Mouse'];
}