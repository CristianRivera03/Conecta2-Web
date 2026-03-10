import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionDTO } from '../models/session';
import { JsonPipe } from '@angular/common';


export const roleGuard: CanActivateFn = (route, state) => {
  
  //inyeccion de dependencias
  const router = inject(Router);
  const sessionData = localStorage.getItem("userSession")

  if(sessionData){
    const user : SessionDTO = JSON.parse(sessionData);


    const expectedRoles = route.data['expectedRoles'] as Array<string>;

    if(!expectedRoles || expectedRoles.includes(user.roleName)){
      return true;
    }else{
      alert("What do you looking for?")
      router.navigate(["/dashboard/feed"]);
      return false;
    }
  }

  //si no hay session retorna al login
  router.navigate(["/dashboard/login"]);
  return false;
};
