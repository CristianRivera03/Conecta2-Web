import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionDTO } from '../../models/session';
import { UserService } from '../../services/user.service';
import { UserDTO } from '../../models/user';



@Component({
  selector: 'app-manager-user',
  standalone: true,
  imports: [],
  templateUrl: './manager-user.component.html',
  styleUrl: './manager-user.component.scss'
})


//Clase
export class ManagerUserComponent {
    //usuario actual
  private router = inject(Router);
  private userService = inject(UserService);

  currentUser: SessionDTO | null = null;
  users : UserDTO[] = [];


  ngOnInit(){
    this.loadUserSession();
    if (this.currentUser){
      this.loadUsers(); // solo mostrara los posts si hay alguien logeado
    }
  }

  //Cargar session 
  loadUserSession() {
    const sessionData = localStorage.getItem("userSession");
    if (sessionData) {
      this.currentUser = JSON.parse(sessionData);
    } else {
      this.router.navigate(["/login"]);
    }
  }

  loadUsers(){
    this.userService.getAllUsers().subscribe({
      next: (res: any) => {
        this.users = res.value || res;

        console.log("Log de users", this.users);
        
      },
      error : (err) =>{
        console.error("Error al cargar la lista de usuarios", err);

      }
    })
  }

}
