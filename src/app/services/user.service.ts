import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webReqService: WebRequestService) { }


  signUp(data: Object) {
    return this.webReqService.post(`users/register`, data);
  }

  signIn(data: Object) {
    return this.webReqService.post('users/login', data);
  }

  setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  deleteUserId() {
    localStorage.removeItem('userId');
  }

}
