import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from '../../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | null>(null);
  public user$ = this.user$$.asObservable();

  // USER_KEY = '[user]';
  user: User | null = null;
  userSubscription: Subscription | null = null;

  get isLoggedIn(): boolean {
    return !!this.user;
    // return !!this.user?.isAuth;
  }

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }
  // constructor(private http: HttpClient) {
  //   try {
  //     const lsUser = localStorage.getItem(this.USER_KEY) || '';
  //     this.user = JSON.parse(lsUser);
  //   } catch (error) {
  //     this.user = null;
  //   }
  // }

  login(email:string, password:string) {
    return this.http.post<User>('/users/login', {email, password})
    .pipe(tap((user) => {
      this.user$$.next(user);
      console.log(this.isLoggedIn);
    }))
    // .pipe(tap((Response) => console.log(Response.isAuth)));
  }

  register(email:string, password:string, rePassword:string) {
    return this.http.post<User>('/users/register', {email, password, rePassword})
    .pipe(tap((user) => {
      this.user$$.next(user);
      console.log(this.isLoggedIn);
    }));
  }

  getProfile() {
    return this.http.get<User>(`/users/profile`)
    // return this.http.get<User>(`/users`)
    .pipe(tap((user) => this.user$$.next(user)));
  }
  
  // getUser(userId: string) {
  //   return this.http.get<User>(`/users/${userId}`);
  // }

  logout() {
    // return this.http.post('/users/logout', {})
    return this.http.get('/users/logout', {})
      .pipe(tap((user) => {
        this.user$$.next(null);
        console.log(this.isLoggedIn);
      }));
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
