import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [UserService],
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  formSubmitHandler(form: NgForm) {
    if(form.invalid) {
      console.log('The form is invalid.');
      return;
    }

    const {email, password} = form.value;

    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['/profile']);
    })

    console.log(form.value);
  }

}
