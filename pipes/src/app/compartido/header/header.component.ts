import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(private router: Router) {
  }

  redirectNumeros() {
    this.router.navigate(['/numeros']);
  }

  redirectBasico() {
    this.router.navigate(['/basico']);
  }

  redirectOtros() {
    this.router.navigate(['/otros']);
  }


}
