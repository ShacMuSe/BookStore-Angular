import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    // Add sign-up logic here
    console.log('Full Name:', this.fullname);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Add logic to save user details and navigate to the login page or perform other actions
  }

}
