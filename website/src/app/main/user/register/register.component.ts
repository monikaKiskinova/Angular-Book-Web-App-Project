import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { matchPasswordsValidator } from '../../../utils/match-passwords.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rePassword: new FormControl('', [Validators.required]),
    },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    )
  })

  constructor(private userService: UserService, private router: Router) { }

  registerHandler() {
    if (this.form.invalid) {
      return;
    }

    const { email, passGroup: { password, rePassword } = {}, } = this.form.value;

    this.userService.register(email!, password!, rePassword!)
      .subscribe(() => {
        this.router.navigate(['/books']);
      })
  }
}
