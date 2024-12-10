import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null> (null);
  private user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) { }

  // getUser(userId: string) {
  //   return this.http.get<User>(`/users/${userId}`);
  // }

  login(email:string, password:string) {
    return this.http.post<User>('/users/login', {email, password})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  register(email:string, password:string, rePassword:string) {
    return this.http.post<User>('/users/register', {email, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<User>(`/users/profile`)
    // return this.http.get<User>(`/users`)
    .pipe(tap((user) => this.user$$.next(user)));
  }
}
