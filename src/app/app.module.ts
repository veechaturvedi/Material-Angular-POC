import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EqualValidatorDirective } from './shared/equal.validator.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { UsertableComponent } from './components/usertable/usertable.component';
import { CodevolutionComponent } from './components/codevolution/codevolution.component';
import { EmployeeService } from 'ng5-master/src/app/services/employee.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
const myRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'components/usertable', component: UsertableComponent },
  { path: 'components/codevolution', component: CodevolutionComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    EqualValidatorDirective,
    UsertableComponent,
    CodevolutionComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(myRoots)
  ],
  providers: [AuthService, AuthGuard, UserService, EmployeeService],

  bootstrap: [AppComponent]
})
export class AppModule {}
