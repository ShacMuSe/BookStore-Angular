import { Routes } from '@angular/router';
import BookListComponent from './book-list/book-list.component';
import BookDetailsComponent from './book-details/book-details.component';
import ShoppingCartComponent from './shopping-cart/shopping-cart.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';


export const routes: Routes = [
    { path: 'book-list', 'title': 'Home', component: BookListComponent },
    { path: 'books/:id', 'title' : 'Home | book-details', component:BookDetailsComponent },
    { path: 'shopping-cart', 'title': 'shopping-cart', component: ShoppingCartComponent },
    { path: '', redirectTo: '/book-list', pathMatch:'full' },
    { path: 'about','title': 'about', component: AboutComponent },
    { path: 'login', 'title': 'login', component: LoginComponent },
    { path: 'login', children:[
        { path: 'signup', 'title' : 'signup', component:SignupComponent }
    ]},
    { path: 'logout', component: LogoutComponent },
    
    { path: '**', component: PageNotFoundComponent },
];
