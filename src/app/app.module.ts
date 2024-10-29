import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TicketsComponent,
    LoginComponent,
    RegisterComponent,
    TicketOrderComponent,
    HomePageComponent,
    OrderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
