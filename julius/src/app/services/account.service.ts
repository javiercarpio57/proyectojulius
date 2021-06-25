import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://127.0.0.1:5000/api/login';
  }

  login (user: User): Promise<any> {
    let params = new HttpParams();
    params = params.set('email', user.email);
    params = params.set('password', user.password);
    console.log(user);

    return this.http.get<any>(this.url, { params }).toPromise();
  }
}
