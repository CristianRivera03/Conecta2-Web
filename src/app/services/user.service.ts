import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserCreateDTO,  UserDTO } from '../models/user';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  //Importaciones
  private http = inject(HttpClient);

  //Url
  private apiURL = `${environment.endpoint}User`


  constructor() { }
  getAllUsers() : Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(`${this.apiURL}/Get`)
  }

}
