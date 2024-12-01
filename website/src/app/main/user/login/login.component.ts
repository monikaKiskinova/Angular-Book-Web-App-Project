import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler() {
    const form = this.form!; 

    if(form.invalid) {
      console.log('The form is invalid.');
      return;
    }

    console.log(form.value);
  }

}
