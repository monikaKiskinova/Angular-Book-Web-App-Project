import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginHandler(form: NgForm) {
    if(form.invalid) {
      console.error('The form is invalid.');
      return;
    }

    const {email, password} = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/profile']);
    });
    // this.userService.login(email, password).subscribe((res: any) => {
    //   localStorage.setItem('accessToken', res.accessToken)
    //   this.router.navigate(['/profile']);
    // })
  }

}
