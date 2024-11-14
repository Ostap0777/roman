import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { TicketsComponent } from './Components/Pages/tickets/tickets.component';
import { LoginComponent } from '../../src/app/Components/Pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../app/Components/Pages/register/register.component';
import { TicketOrderComponent } from './Components/Pages/ticket-order/ticket-order.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { OrderComponent } from './Components/Pages/order/order.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';  // Імпортуємо MatDialogModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/Pages/Adminn/admin/admin.component';
import { AdminAddComponent } from './Components/Pages/Adminn/admin-add/admin-add.component'; // Обов'язково для роботи з анімаціями


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
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    AdminComponent,
    AdminAddComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
	 MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
