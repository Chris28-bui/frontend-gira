import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EmployeeInformationPageComponent } from './pages/employee-information-page/employee-information-page.component';
import { EditInformationPageComponent } from './pages/edit-information-page/edit-information-page.component';
import { ValidationService } from './pages/service/validation.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'employee_information', component: EmployeeInformationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'homepage', component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    EmployeeInformationPageComponent,
    EditInformationPageComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
