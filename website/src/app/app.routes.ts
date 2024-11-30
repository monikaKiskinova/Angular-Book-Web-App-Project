import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { LoginComponent } from './main/user/login/login.component';
import { AddBookComponent } from './main/books/add-book/add-book.component';
import { BookListComponent } from './main/books/book-list/book-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},

    {path: 'login', component: LoginComponent},

    {path: 'books', component: BookListComponent},
    {path: 'add-book', component:AddBookComponent},

    {path: '404', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404', pathMatch: 'full'},
];
