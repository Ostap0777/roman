import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TicketOrderComponent } from './ticket-order/ticket-order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path:'tickets', component: TicketsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'ticket-order', component: TicketOrderComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
