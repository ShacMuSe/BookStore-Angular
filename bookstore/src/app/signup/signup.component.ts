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
    console.log('Full Name:', this.fullname);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}
