import { Component} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) {}

  formSubmitHandler(form: NgForm) {
    if(form.invalid) {
      console.log('The form is invalid.');
      return;
    }

    const {email, password, rePassword} = form.value;

    this.userService.register(email, password, rePassword)
    .subscribe(() => {
      this.router.navigate(['/books']);
    })
  }
}
