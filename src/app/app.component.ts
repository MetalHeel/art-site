import { Component } from '@angular/core';
import { MobileHomeComponent } from './mobile.home.component';
import { StandardHomeComponent } from './standard.home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MobileHomeComponent, StandardHomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isMobileBrowser() {
		return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
}
