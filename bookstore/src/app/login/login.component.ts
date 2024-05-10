import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../interfaces/login';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login = {
    emailId: '',
    password: ''
  };
  constructor(private router: Router, private http: HttpClient, private authService: AuthService){}

  onLogin(): void {
      // Perform authentication logic here
      this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
        if (res.result){
          alert("login succes");
          this.authService.setAuthenticated(true);
          this.router.navigate(['/book-list']);
        }
        else{
          alert(res.message)
        }
      })
      // Add authentication logic and navigate to the next page if successful
    }
    // Perform authentication logic
    //this.authService.login(this.loginObj.emailId, this.loginObj.password);
  }


