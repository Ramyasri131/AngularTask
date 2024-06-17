import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonComponent } from './common/common.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS';
}
