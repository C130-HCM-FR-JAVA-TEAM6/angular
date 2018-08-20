import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenshirtComponent } from './menshirt/menshirt.component';
import {HttpModule} from '@angular/http';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component'
const routerconfig : Routes =[
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'menshirt',component:MenshirtComponent},
  {path:'login',component:LoginComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenshirtComponent,
    CartComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routerconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
