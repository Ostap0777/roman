import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { TicketsComponent } from './Components/Pages/tickets/tickets.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from '../app/Components/Pages/register/register.component';
import { TicketOrderComponent } from './Components/Pages/ticket-order/ticket-order.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { OrderComponent } from './Components/Pages/order/order.component';
import { AdminComponent } from './Components/Pages/Adminn/admin/admin.component';
import { AdminAddComponent } from './Components/Pages/Adminn/admin-add/admin-add.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path:'tickets', component: TicketsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'ticket-order', component: TicketOrderComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/add', component: AdminAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
