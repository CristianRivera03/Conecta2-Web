import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SessionDTO } from '../../models/session';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  //inyecciones
  private router = inject(Router);
  currentUser: SessionDTO | null = null;


  ngOnInit() {
    const sessionData = localStorage.getItem("userSession");

    if (sessionData) {
      this.currentUser = JSON.parse(sessionData);
    } else {
      // Si no hay session lo manda al login
      this.router.navigate(["/login"]);
    }
  }

  logout() {
    localStorage.removeItem("userSession");
    this.router.navigate(["/login"])
  }

}
