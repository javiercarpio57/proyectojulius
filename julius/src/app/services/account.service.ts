import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url: string;
  public user: User = null;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:5000/api/login';
  }

  public login (user: User) {
    let params = new HttpParams();
    params = params.set('email', user.email);
    params = params.set('password', user.password);
    console.log(user);

    return this.http.get(this.url, { params }).toPromise();
  }

  // TODO: INVESTIGAR COMO PRESERVAR VARIABLE this.user
  public isLogged(): boolean {
    if (this.user) {
      return true;
    }
    return false;
  }
}
