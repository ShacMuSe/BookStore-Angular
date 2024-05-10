import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  // Getter for authentication status
  get isAuthenticatedStatus(): boolean {
    return this.isAuthenticated;
  }

  // Setter for authentication status
  setAuthenticated(status: boolean): void {
    this.isAuthenticated = status;
  }

  // Method to check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
