import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  cart=1
  navigateToSeller() {
    this.router.navigate(['/seller']);
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }
  navigateToSignUp(){
    this.router.navigate(['/signup']);
  }
}

