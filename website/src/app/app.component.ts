import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { RouterOutlet } from '@angular/router';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { appInterceptor } from './app.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    multi: true,
    useExisting: appInterceptor,
  }],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, PageNotFoundComponent, AuthenticateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'The Book Bank';
}
