import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserCreateDTO,  UserDTO } from '../models/user';
import { ResponseAPI } from '../models/response-api';


@Injectable({
  providedIn: 'root'
})


export class UserService {
  //Importaciones
  private http = inject(HttpClient);

  //Url
  private apiURL = `${environment.endpoint}User`


  constructor() { }

  //Obtener users
  getAllUsers() : Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(`${this.apiURL}/Get`)
  }

  //Regfistro pide un UserCreate y devuelve un user normal porque si devuelve un create 
  // traerla contraseña en plaintext
  signUp(userData : UserCreateDTO): Observable<ResponseAPI<UserDTO>> {
    return this.http.post<ResponseAPI<UserDTO>>(`${this.apiURL}/Create`, userData);
  }

}
